import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #050505;
      color: white;
      font-family: Arial, sans-serif;
    }

    .page {
      width: 100%;
      height: 100dvh;

      overflow-y: auto;
      overflow-x: hidden;

      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;

      background: #050505;
    }

    .screen {
      height: 100dvh;
      scroll-snap-align: start;
      overflow: hidden;
      background: #050505;
    }

    .full-page {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #050505;
    }

    .app-header {
      height: var(--header-h);
      display: flex;
      align-items: center;
      padding: 0 18px;
      background: linear-gradient(180deg, #111, #090909);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-sizing: border-box;
      flex-shrink: 0;
    }

    .menu-btn {
      width: 44px;
      height: 44px;
      border: none;
      background: transparent;
      color: #d7a83f;
      font-size: 30px;
      cursor: pointer;
    }

    .header-title {
      margin-left: 14px;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 1px;
    }

    .header-title span {
      color: #d7a83f;
    }

    .hero {
      height: var(--hero-h);
      background: #000;
      overflow: hidden;
    }

    .hero-main {
      width: 100%;
      height: 100%;
      object-fit: fit;
      object-position: center top;
      display: block;
      background: #000;
    }

    .service {
      height: calc(100dvh - var(--header-h) - var(--hero-h));
      padding: clamp(8px, 1.4dvh, 14px) 12px clamp(8px, 1.2dvh, 12px);
      background: linear-gradient(180deg, #080808, #030303);
      box-sizing: border-box;

      display: grid;
      grid-template-rows: auto minmax(0, 1fr) auto;
      row-gap: clamp(6px, 1.1dvh, 12px);
      overflow: hidden;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: clamp(15px, 4vw, 18px);
      font-weight: 900;
      margin: 0;
      white-space: nowrap;
      line-height: 1.2;
    }

    .section-title::before {
      content: '';
      width: 4px;
      height: 22px;
      background: #d7a83f;
      border-radius: 999px;
      flex-shrink: 0;
    }

    .grid-wrapper {
      min-height: 0;
      overflow: hidden;
    }

    .grid {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: repeat(4, minmax(0, 1fr));
      gap: clamp(6px, 1dvh, 10px) 12px;
    }

    .card {
      min-height: 0;
      border-radius: 10px;
      overflow: hidden;
      background: #111;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #111;
    }

    .call {
      width: 100%;
      height: var(--call-h);
      border-radius: 10px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .call img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #000;
    }

    @media (max-height: 720px) {
      .page {
        --header-h: 56px;
        --hero-h: 220px;
        --call-h: 48px;
      }

      .app-header {
        padding: 0 14px;
      }

      .menu-btn {
        width: 40px;
        height: 40px;
        font-size: 28px;
      }

      .header-title {
        font-size: 18px;
      }

      .service {
        padding: 8px 10px;
      }

      .grid {
        gap: 6px 8px;
      }
    }

    @media (min-width: 820px) {
      :host {
        display: flex;
        justify-content: center;
        background: #181818;
      }

      .page {
        width: 430px;
      }
    }
  `;

  render() {
    return html`
      <main class="page">
        <section class="screen">
          <header class="app-header">
            <button class="menu-btn">☰</button>
            <div class="header-title"><span>모정</span> 렌터카</div>
          </header>

          <section class="hero">
            <img
              class="hero-main"
              src="/images/Mainpage_image.JPG"
              alt="MJ Rental main"
            />
          </section>

          <section class="service">
            <div class="section-title">모정렌터카만의 차별화된 서비스</div>

            <div class="grid-wrapper">
              <div class="grid">
                <div class="card">
                  <img src="/images/grid1_left.JPG" alt="보험대차 전문" />
                </div>
                <div class="card">
                  <img
                    src="/images/grid1_right.JPG"
                    alt="픽업 딜리버리 서비스"
                  />
                </div>
                <div class="card">
                  <img src="/images/grid2_left.JPG" alt="금연차량 운영" />
                </div>
                <div class="card">
                  <img
                    src="/images/grid2_right.JPG"
                    alt="수입 국산 대다수 차량 보유"
                  />
                </div>
                <div class="card">
                  <img
                    src="/images/grid3_left.JPG"
                    alt="전차종 세차시 살균소독"
                  />
                </div>
                <div class="card">
                  <img src="/images/grid3_right.JPG" alt="리스렌트" />
                </div>
                <div class="card">
                  <img src="/images/grid4_left.JPG" alt="장기렌트" />
                </div>
                <div class="card">
                  <img src="/images/grid4_right.JPG" alt="단기렌트" />
                </div>
              </div>
            </div>

            <div
              class="call"
              @click=${() => (window.location.href = 'tel:0312823647')}
            >
              <img
                src="/images/Mainpage_bottom_call.JPG"
                alt="지금 바로 문의하기"
              />
            </div>
          </section>
        </section>
        <section class="screen">
          <img class="full-page" src="/images/2.png" />
        </section>

        <section class="screen">
          <img class="full-page" src="/images/3.png" />
        </section>

        <section class="screen">
          <img class="full-page" src="/images/4.png" />
        </section>
      </main>
    `;
  }
}
