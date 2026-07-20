import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { registerSW } from 'virtual:pwa-register';

import './pages/app-home';
import './components/header';
import './styles/global.css';
import { router } from './router';

const updateSW = registerSW({
  immediate: true,

  onNeedRefresh() {
    console.log('새 버전이 감지되어 앱을 자동으로 갱신합니다.');

    window.setTimeout(() => {
      void updateSW(true);
    }, 300);
  },

  onOfflineReady() {
    console.log('MJ Rental 앱을 오프라인에서도 사용할 수 있습니다.');
  },
});

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 100%;
      margin: 0;
      padding: 0;
      background: #000;
    }

    .install-backdrop {
      position: fixed;
      inset: 0;
      z-index: 999;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(2px);
    }

    .install-dialog {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      padding: 16px;
      border-radius: 14px;
      background: rgba(24, 24, 24, 0.96);
      color: #fff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      width: 250px !important;
      min-width: 250px !important;
      max-width: 250px !important;
      box-sizing: border-box;
    }

    .install-dialog strong {
      display: block;
      font-size: 0.95rem;
      margin-bottom: 2px;
    }

    .install-dialog span {
      font-size: 0.85rem;
      color: #d0d0d0;
      line-height: 1.4;
    }

    .install-actions {
      display: flex;
      gap: 8px;
      justify-content: center;
    }

    button {
      border: none;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 0.9rem;
      cursor: pointer;
      font-weight: 600;
    }

    .install-btn {
      background: #fff;
      color: #111;
    }

    .close-btn {
      background: transparent;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .ios-guide {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      z-index: 1001;

      width: min(300px, calc(100vw - 40px));
      padding: 20px;

      box-sizing: border-box;
      border-radius: 16px;

      background: rgba(20, 20, 20, 0.97);
      border: 1px solid rgba(215, 168, 63, 0.5);

      color: white;

      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    }

    .ios-guide-title {
      margin: 0 0 12px;

      color: #f2c45f;
      font-size: 18px;
      font-weight: 900;
      text-align: center;
    }

    .ios-guide-text {
      color: #e2e2e2;
      font-size: 14px;
      line-height: 1.7;
      text-align: center;
    }

    .ios-guide-steps {
      margin: 16px 0;

      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ios-guide-step {
      display: flex;
      align-items: center;
      gap: 10px;

      padding: 10px 12px;

      border-radius: 10px;
      background: rgba(255, 255, 255, 0.06);

      font-size: 14px;
    }

    .ios-guide-number {
      width: 26px;
      height: 26px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #d7a83f;
      color: #111;

      font-weight: 900;
    }

    .ios-close-btn {
      width: 100%;

      margin-top: 4px;
      padding: 10px;

      background: linear-gradient(90deg, #b88422, #e4ba5c, #c99334);

      color: #111;
      font-weight: 900;
    }

    @media (max-width: 600px) {
      .install-actions {
        width: 100%;
      }

      .install-actions button {
        flex: 1;
      }
    }
  `;

  private deferredPrompt: any = null;
  private showInstallDialog = false;

  // Safari 전용 설치 안내창
  private showIosInstallGuide = false;

  private updateCheckTimer: number | null = null;

  private isIosDevice() {
    return (
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
  }

  private isSafariBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();

    return (
      userAgent.includes('safari') &&
      !userAgent.includes('crios') &&
      !userAgent.includes('fxios') &&
      !userAgent.includes('edgios')
    );
  }

  private isStandaloneMode() {
    const iosStandalone =
      'standalone' in navigator &&
      (navigator as Navigator & { standalone?: boolean }).standalone === true;

    const displayModeStandalone = window.matchMedia(
      '(display-mode: standalone)'
    ).matches;

    return iosStandalone || displayModeStandalone;
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener(
      'beforeinstallprompt',
      this.handleBeforeInstallPrompt
    );

    window.addEventListener('appinstalled', this.handleAppInstalled);

    window.addEventListener(
      'pwa-update-available',
      this.handlePwaUpdateAvailable
    );

    window.addEventListener('focus', this.handleWindowFocus);

    window.addEventListener('online', this.handleWindowFocus);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);

    // iPhone/iPad Safari는 beforeinstallprompt가 발생하지 않으므로
    // 직접 설치 방법 안내창을 표시한다.
    window.setTimeout(() => {
      const dismissed = localStorage.getItem('mjrental-ios-guide-dismissed');

      if (
        this.isIosDevice() &&
        this.isSafariBrowser() &&
        !this.isStandaloneMode() &&
        dismissed !== 'true'
      ) {
        this.showIosInstallGuide = true;
        this.requestUpdate();
      }
    }, 1200);

    window.setTimeout(() => {
      this.checkForUpdates();
    }, 2000);

    this.startUpdatePolling();
  }

  disconnectedCallback() {
    window.removeEventListener(
      'beforeinstallprompt',
      this.handleBeforeInstallPrompt
    );
    window.removeEventListener('appinstalled', this.handleAppInstalled);
    window.removeEventListener(
      'pwa-update-available',
      this.handlePwaUpdateAvailable
    );
    window.removeEventListener('focus', this.handleWindowFocus);
    window.removeEventListener('online', this.handleWindowFocus);
    document.removeEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
    this.stopUpdatePolling();
    super.disconnectedCallback();
  }

  private dismissIosInstallGuide() {
    this.showIosInstallGuide = false;

    localStorage.setItem('mjrental-ios-guide-dismissed', 'true');

    this.requestUpdate();
  }

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ('startViewTransition' in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });
  }

  private handleBeforeInstallPrompt = (event: Event) => {
    if (this.isIosDevice()) return;
    event.preventDefault();
    this.deferredPrompt = event;
    this.showInstallDialog = true;
    this.requestUpdate();
  };

  private handleAppInstalled = () => {
    this.showInstallDialog = false;
    this.deferredPrompt = null;
    this.announceInstallDialogClosed();
    this.requestUpdate();
  };

  private handlePwaUpdateAvailable = () => {
    this.refreshApp();
  };

  private handleWindowFocus = () => {
    this.checkForUpdates();
  };

  private handleVisibilityChange = () => {
    if (!document.hidden) {
      this.checkForUpdates();
    }
  };

  private startUpdatePolling() {
    this.stopUpdatePolling();
    this.updateCheckTimer = window.setInterval(() => {
      if (!document.hidden) {
        this.checkForUpdates();
      }
    }, 60000);
  }

  private stopUpdatePolling() {
    if (this.updateCheckTimer !== null) {
      window.clearInterval(this.updateCheckTimer);
      this.updateCheckTimer = null;
    }
  }

  private checkForUpdates = () => {
    if (document.visibilityState === 'visible') {
      void updateSW();
    }
  };

  private async installApp() {
    if (!this.deferredPrompt) {
      return;
    }

    this.deferredPrompt.prompt();
    const choice = await this.deferredPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      console.log('사용자가 앱 설치를 수락했습니다.');
    }

    this.deferredPrompt = null;
    this.showInstallDialog = false;

    this.announceInstallDialogClosed();
    this.requestUpdate();
  }

  private announceInstallDialogClosed() {
    window.dispatchEvent(new CustomEvent('pwa-install-dialog-closed'));
  }

  private dismissInstallDialog() {
    this.showInstallDialog = false;
    this.announceInstallDialogClosed();
    this.requestUpdate();
  }

  private refreshApp() {
    updateSW(true);
  }

  render() {
    return html`
      ${this.showInstallDialog
        ? html`<div class="install-backdrop"></div>`
        : ''}
      ${this.showInstallDialog
        ? html`
            <div
              class="install-dialog"
              role="dialog"
              aria-label="앱 설치 안내"
              style="width: 250px; min-width: 250px; max-width: 250px;"
            >
              <div>
                <strong>모정렌터카 앱을 설치해 보세요.</strong>
                <span>
                  오프라인에서 앱을 사용할 수 있어요. 설치하려면 "설치화면"에서 "설치"버튼을 눌러주세요.
                </span>
              </div>

              <div class="install-actions">
                <button class="close-btn" @click=${this.dismissInstallDialog}>
                  나중에
                </button>

                <button class="install-btn" @click=${this.installApp}>
                  설치화면
                </button>
              </div>
            </div>
          `
        : ''}
      ${this.showIosInstallGuide
        ? html`
            <div
              class="install-backdrop"
              @click=${this.dismissIosInstallGuide}
            ></div>

            <div
              class="ios-guide"
              role="dialog"
              aria-label="iPhone 앱 설치 안내"
            >
              <h2 class="ios-guide-title">MJ Rental 앱 설치하기</h2>

              <div class="ios-guide-text">
                Safari에서는 설치창이 자동으로 표시되지 않습니다. 아래 방법으로
                홈 화면에 추가해 주세요.
              </div>

              <div class="ios-guide-steps">
                <div class="ios-guide-step">
                  <span class="ios-guide-number">1</span>
                  <span>Safari 하단의 공유 버튼을 누르세요.</span>
                </div>

                <div class="ios-guide-step">
                  <span class="ios-guide-number">2</span>
                  <span>메뉴에서 ‘홈 화면에 추가’를 선택하세요.</span>
                </div>

                <div class="ios-guide-step">
                  <span class="ios-guide-number">3</span>
                  <span>오른쪽 위의 ‘추가’를 누르세요.</span>
                </div>
              </div>

              <button
                class="ios-close-btn"
                @click=${this.dismissIosInstallGuide}
              >
                확인
              </button>
            </div>
          `
        : ''}
      ${router.render()}
    `;
  }
}

