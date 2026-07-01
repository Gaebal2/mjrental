import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #000;
    }

.page {
  margin: 0;
  padding: 0;
  background: #000;

  height: 100vh;
  overflow-y: auto;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  -webkit-overflow-scrolling: touch;
}

.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.hero-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center top;
  display: block;
}

    .sticky-title {
      position: absolute;
      top: 42%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 46px;
      font-weight: 900;
      color: white;
      white-space: nowrap;
      z-index: 3;
    }

    .sticky-title .gold {
      color: #d7a83f;
    }

    .menu-button {
      position: fixed;
      top: 24px;
      right: 20px;
      z-index: 50;
      background: transparent;
      border: 0;
      color: #d7a83f;
      font-size: 34px;
    }

section {
  margin: 0;
  padding: 0;
  background: #000;

  height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.full-image {
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: contain;
}

    @media (min-width: 820px) {
      :host {
        display: flex;
        justify-content: center;
        background: #111;
      }

      .page {
        width: 430px;
        overflow: hidden;
      }

      .menu-button {
        right: calc(50% - 195px);
      }
    }
  `;

  render() {
    return html`
      <main class="page">
        <section class="hero-section">
          <img class="hero-image" src="/images/1.png" alt="MJ Rental main" />

          <div class="sticky-title">
            <span class="gold">MJ</span>
            <span>RENTAL</span>
          </div>

          <button class="menu-button">☰</button>
        </section>

        <section>
          <img class="full-image" src="/images/2.png" alt="MJ Rental service" />
        </section>

        <section>
          <img class="full-image" src="/images/3.png" alt="MJ Rental signature rentcar" />
        </section>

        <section>
          <img class="full-image" src="/images/4.png" alt="MJ Rental car list and contact" />
        </section>
      </main>
    `;
  }
}