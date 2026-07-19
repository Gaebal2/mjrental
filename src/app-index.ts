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
      updateSW(true);
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
  private updateCheckTimer: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', this.handleAppInstalled);
    window.addEventListener('pwa-update-available', this.handlePwaUpdateAvailable);
    window.addEventListener('focus', this.handleWindowFocus);
    window.addEventListener('online', this.handleWindowFocus);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);

    window.setTimeout(() => {
      this.checkForUpdates();
    }, 2000);

    this.startUpdatePolling();
  }

  disconnectedCallback() {
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    window.removeEventListener('appinstalled', this.handleAppInstalled);
    window.removeEventListener('pwa-update-available', this.handlePwaUpdateAvailable);
    window.removeEventListener('focus', this.handleWindowFocus);
    window.removeEventListener('online', this.handleWindowFocus);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.stopUpdatePolling();
    super.disconnectedCallback();
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
    }, 15000);
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
      ${this.showInstallDialog ? html`<div class="install-backdrop"></div>` : ''}
      ${this.showInstallDialog
        ? html`
            <div
              class="install-dialog"
              role="dialog"
              aria-label="앱 설치 안내"
              style="width: 250px; min-width: 250px; max-width: 250px;"
            >
              <div>
                <strong>MJ Rental 앱을 설치할까요?</strong>
                <span>모정렌터카 앱을 설치하면 오프라인에서 더 빠르게 사용할 수 있어요.</span>
              </div>
              <div class="install-actions">
                <button class="close-btn" @click=${this.dismissInstallDialog}>닫기</button>
                <button class="install-btn" @click=${this.installApp}>설치</button>
              </div>
            </div>
          `
        : ''}
      ${router.render()}
    `;
  }
}
