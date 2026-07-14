import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { registerSW } from 'virtual:pwa-register';

import './pages/app-home';
import './components/header';
import './styles/global.css';
import { router } from './router';

const updateSW = registerSW({
  onNeedRefresh() {
    const ok = window.confirm('새로운 버전이 있습니다.\n업데이트하시겠습니까?');

    if (ok) {
      updateSW(true);
    }
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
  `;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ('startViewTransition' in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      } else {
        this.requestUpdate();
      }
    });
  }

  render() {
    return router.render();
  }
}
