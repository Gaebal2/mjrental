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
      max-height: 740px;
      margin: 0 auto;
      background: #050505;
      overflow: hidden;
    }

    .app-header {
      height: 64px;
      display: flex;
      align-items: center;
      padding: 0 18px;
      background: linear-gradient(180deg, #111, #090909);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-sizing: border-box;
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

    .hero-main {
      width: 100%;
      height: 260px;
      object-fit: cover;
      object-position: center top;
      display: block;
    }

    .service {
      height: calc(740px - 64px - 260px);
      padding: 14px 12px 12px;
      background: linear-gradient(180deg, #080808, #030303);
      box-sizing: border-box;

      display: grid;
      grid-template-rows: auto 1fr auto;
      row-gap: 10px;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 17px;
      font-weight: 900;
      margin: 0;
      white-space: nowrap;
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
      display: flex;
      align-items: center;
    }

    .grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(6px, 1.1vh, 14px) 12px;
    }

    .card {
      border-radius: 10px;
      overflow: hidden;
      background: #111;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card img {
      width: 100%;
      height: auto;
      display: block;
    }

    .call {
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }

    .call img {
      width: 100%;
      height: clamp(42px, 6vh, 62px);
      object-fit: contain;
      display: block;
    }

    @media (max-height: 700px) {
      .app-header {
        height: 48px;
      }

      .hero-main {
        height: 220px;
      }

      .service {
        height: calc(100vh - 48px - 220px);
        padding: 8px 10px 8px;
      }

      .section-title {
        font-size: 15px;
      }

      .grid-wrapper {
        margin: 6px 0;
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
        height: 100vh;
      }

      .hero-main {
        height: clamp(220px, 30vh, 300px);
        object-fit: contain;
      }

      .service {
        height: calc(100vh - 64px - clamp(220px, 30vh, 300px));
      }
    }
  `;

  render() {
    return html`
      <main class="page">
        <header class="app-header">
          <button class="menu-btn">☰</button>
          <div class="header-title"><span>MJ</span> RENTAL</div>
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
                <img src="/images/grid1_right.JPG" alt="픽업 딜리버리 서비스" />
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

          <div class="call">
            <img
              src="/images/Mainpage_bottom_call.JPG"
              alt="지금 바로 문의하기"
            />
          </div>
        </section>
      </main>
    `;
  }
}
