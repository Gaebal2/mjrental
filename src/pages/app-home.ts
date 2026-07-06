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
      --header-h: 64px;
      --mainIMGH-h: 260px;
      --call-h: 56px;

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

    .mainIMG {
      position: relative;
      height: var(--mainIMGH-h);
      background: #000;
      overflow: hidden;
    }

    .mainIMG-main {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center top;
      display: block;
      background: #000;
    }

    .social-links {
      position: absolute;
      left: 16px;
      bottom: 16px;
      display: flex;
      gap: 12px;
      z-index: 10;
      // 소셜아이콘 화면 중앙정렬
      // left: 50%;
      // transform: translateX(-50%);
    }

    .social-links a {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      background: rgba(0, 0, 0, 0.55);
      border: 1px solid rgba(215, 168, 63, 0.35);
      backdrop-filter: blur(10px);
      transition: 0.25s;
    }

    .social-links a:active {
      transform: scale(0.95);
      background: #d7a83f;
    }

    .instagram-icon {
      width: 22px;
      height: 22px;
    }

    .x-icon {
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }

    .youtube-icon {
      width: 24px;
      height: 16px;
    }

    .screen2 {
      height: 100dvh;
      scroll-snap-align: start;
      overflow: hidden;
      background: #283574;
    }

    .screen2IMG {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #283574;
    }

    .top-search {
      position: absolute;
      top: 24px;
      right: 18px;
      display: flex;
      align-items: center;
      gap: 6px;
      z-index: 20;
    }

    .top-search button {
      background: white;
      color: #333;
      border: none;
      padding: 6px 10px;
      font-size: 13px;
    }

    .naver {
      color: white;
      font-size: 16px;
      font-weight: 900;
    }

    .search-box {
      width: 100px;
      padding: 5px 9px;
      border: 2px solid white;
      color: white;
      font-size: 13px;
    }

    .screen2IMG-text {
      position: absolute;
      left: 30px;
      top: 330px;
      z-index: 20;
    }

    .screen2IMG-text h1 {
      margin: 0;
      color: #e2be69;
      font-size: clamp(42px, 13vw, 62px);
      line-height: 1.08;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .screen2IMG-line {
      width: 170px;
      height: 2px;
      background: #6e6a7d;
      margin: 34px 0;
    }

    .screen2IMG-text h2 {
      margin: 0;
      color: white;
      font-size: clamp(34px, 9vw, 46px);
      font-weight: 900;
    }

    .top-search button {
      background: white;
      color: #333;
      border: none;
      padding: 6px 12px;
      cursor: pointer;
    }

    .screen2IMG-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center bottom;
      z-index: 1;
    }

    .service {
      height: calc(100dvh - var(--header-h) - var(--mainIMGH-h));
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

    .contact-screen {
      background: #2f302d;
    }

    .contact-page {
      width: 100%;
      height: 100%;
      padding: 24px 18px;
      box-sizing: border-box;
      background: #2f302d;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 22px;
    }

    .contact-title {
      display: flex;
      align-items: center;
      gap: 10px;

      color: white;
      font-size: 16px;
      font-weight: 900;
    }

    .contact-title span {
      width: 6px;
      height: 28px;
      background: #d7a83f;
      border-radius: 999px;
    }

    .map-box {
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background: #444;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .map-box img {
      width: 100%;
      height: auto;
      display: block;
    }

    .contact-call {
      display: block;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      text-decoration: none;
    }

    .contact-call img {
      width: 100%;
      height: auto;
      display: block;
    }

    @media (max-height: 720px) {
      .page {
        --header-h: 56px;
        --mainIMGH-h: 220px;
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
      .contact-page {
        padding: 18px 14px;
        gap: 14px;
      }

      .contact-title {
        font-size: 22px;
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

          <section class="mainIMG">
            <img
              class="mainIMG-main"
              src="/images/Mainpage_image.JPG"
              alt="MJ Rental main"
            />
            <div class="social-links">
              <a
                href="https://instagram.com/yourid"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <img
                  class="instagram-icon"
                  src="/icons/250px-Instagram.svg.webp"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://x.com/clazyman"
                target="_blank"
                rel="noopener"
                aria-label="X"
              >
                <img
                  class="x-icon"
                  src="/icons/330px-X_logo_2023.svg.webp"
                  alt="X"
                />
              </a>

              <a
                href="https://youtube.com/@clazyman"
                target="_blank"
                rel="noopener"
                aria-label="Youtube"
              >
                <img
                  class="youtube-icon"
                  src="/icons/330px-YouTube_full-color_icon_(2024).svg.webp"
                  alt="Youtube"
                />
              </a>
            </div>
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

        <section class="screen2">
          <div class="screen2IMG">
            <div class="top-search">
              <span class="naver">NAVER</span>
              <div class="search-box">▶ 모정렌터카</div>
              <button>검색</button>
            </div>
            <div class="screen2IMG-text">
              <h1>
                MOJEONG<br />
                SIGNATURE<br />
                RENTCAR
              </h1>
              <div class="screen2IMG-line"></div>
              <h2>모정렌터카</h2>
            </div>
            <img class="screen2IMG-bg" src="/images/2-2.PNG" />
          </div>
        </section>

        <section class="screen">
          <img class="full-page" src="/images/3.png" />
        </section>

        <section class="screen contact-screen">
          <div class="contact-page">

            <div class="map-box">
              <img src="/images/map_top.PNG" alt="More than a rental. A refined experience." />
            </div>
            <div class="contact-title">
              <span></span>
              찾아오시는 길
            </div>

            <div class="map-box">
              <img src="/images/map.PNG" alt="모정렌터카 위치 지도" />
            </div>

            <a class="contact-call" href="tel:0312823647">
              <img src="/images/contact.PNG" alt="상담문의 031-282-3647" />
            </a>
          </div>
        </section>
      </main>
    `;
  }
}

