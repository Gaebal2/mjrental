import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  @state()
  private showScrollGuide = true;

  static styles = css`
    :host {
      display: block;
      background: #050505;
      color: white;
      font-family: Arial, sans-serif;
    }

    .page {
      --header-h: 64px;
      --main-img-h: 260px;
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
      width: 100%;
      height: 100dvh;
      scroll-snap-align: start;
      scroll-snap-stop: always;
      overflow: hidden;
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

    .main-img {
      position: relative;
      height: var(--main-img-h);
      background: #000;
      overflow: hidden;
    }

    .main-img img.main-img-bg {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center top;
      display: block;
    }

    .social-links {
      position: absolute;
      left: 16px;
      bottom: 16px;
      display: flex;
      gap: 12px;
      z-index: 10;
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
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
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

    .service {
      height: calc(100dvh - var(--header-h) - var(--main-img-h));
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

    .call-banner {
      width: 100%;
      height: 56px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 22px;

      box-sizing: border-box;

      background: linear-gradient(
        90deg,
        #b88422 0%,
        #d4a444 35%,
        #e4ba5c 65%,
        #c99334 100%
      );

      cursor: pointer;
      user-select: none;

      transition: 0.25s;
    }

    .call-banner:hover {
      filter: brightness(1.05);
    }

    .call-banner:active {
      transform: scale(0.99);
    }

    .call-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .phone-circle {
      width: 38px;
      height: 38px;

      border-radius: 50%;

      background: #111;

      color: #f5c85b;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;
    }

    .call-text {
      font-size: 22px;
      font-weight: 800;
      color: #222;
      letter-spacing: -0.5px;
    }

    .arrow {
      font-size: 34px;
      color: #222;
      font-weight: 700;
    }

    .screen2 {
      position: relative;
      background: #283574;
    }

    .screen2-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center bottom;
      z-index: 1;
    }

    .top-search {
      position: absolute;
      top: 24px;
      right: 18px;
      display: flex;
      align-items: center;
      gap: 6px;
      z-index: 3;
    }

    .naver {
      color: white;
      font-size: clamp(13px, 4vw, 16px);
      font-weight: 900;
    }

    .search-box {
      width: clamp(86px, 28vw, 108px);
      padding: 5px 8px;
      border: 2px solid white;
      color: white;
      font-size: clamp(11px, 3.5vw, 13px);
      box-sizing: border-box;
      white-space: nowrap;
    }

    .top-search button {
      background: white;
      color: #333;
      border: none;
      padding: 6px 10px;
      font-size: clamp(11px, 3.5vw, 13px);
      cursor: pointer;
    }

    .screen2-text {
      position: absolute;
      left: clamp(24px, 7vw, 34px);
      top: clamp(220px, 42dvh, 340px);
      z-index: 3;
    }

    .screen2-text h1 {
      margin: 0;
      color: #e2be69;
      font-size: clamp(42px, 13vw, 62px);
      line-height: 1.08;
      font-weight: 300;
      letter-spacing: 1px;
    }

    .screen2-line {
      width: clamp(150px, 42vw, 180px);
      height: 2px;
      background: #6e6a7d;
      margin: clamp(26px, 5dvh, 34px) 0;
    }

    .screen2-text h2 {
      margin: 0;
      color: white;
      font-size: clamp(34px, 9vw, 46px);
      font-weight: 900;
    }

    .screen3 {
      background: #2f302d;
    }

    .screen3-page {
      width: 100%;
      height: 100%;
      padding: 18px 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow: hidden;
    }

    .screen3-img-box-up {
      flex: 1;
      min-height: 0;
      border-radius: 10px;
      overflow: hidden;
      background: #444;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .screen3-img-box-up img {
      width: 100%;
      max-height: 246dvh;
      object-fit: contain;
      display: block;
    }

    .screen3-img-box-down {
      width: 100%;
      flex-shrink: 0;
      border-radius: 10px;
      overflow: hidden;
      background: #444;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .screen3-img-box-down img {
      width: 100%;
      height: auto;
      object-fit: contain;
      display: block;
    }

    .contact-screen {
      background: #2f302d;
    }

    .contact-page {
      width: 100%;
      height: 100%;
      padding: 18px 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow: hidden;
    }

    .map-box-up {
      flex: 1;
      min-height: 0;
      border-radius: 10px;
      overflow: hidden;
      background: #444;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .map-box-up img {
      width: 100%;
      max-height: 246dvh;
      object-fit: contain;
      display: block;
    }

    .map-box-down {
      width: 100%;
      flex-shrink: 0;
      border-radius: 10px;
      overflow: hidden;
      background: #444;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .map-box-down img {
      width: 100%;
      height: auto;
      object-fit: contain;
      display: block;
    }

    .contact-title {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      font-size: clamp(16px, 5vw, 22px);
      font-weight: 900;
    }

    .contact-title span {
      width: 6px;
      height: 26px;
      background: #d7a83f;
      border-radius: 999px;
      flex-shrink: 0;
    }

    .contact-box {
      width: 100%;
      background: #444;
      border-radius: 10px;
      padding: 14px 16px;
      box-sizing: border-box;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }

    .contact-phone {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .label {
      background: #f2d68a;
      color: #2d2d2d;
      font-size: clamp(14px, 4vw, 18px);
      font-weight: 900;
      padding: 4px 9px;
      border-radius: 4px;
      line-height: 1;
      white-space: nowrap;
    }

    .number {
      color: white;
      font-size: clamp(20px, 6vw, 28px);
      font-weight: 900;
      line-height: 1;
      letter-spacing: 1px;
      white-space: nowrap;
    }

    .contact-address {
      color: #d8d8d8;
      font-size: clamp(12px, 3.4vw, 14px);
      font-weight: 500;
      line-height: 1.6;
    }

    .scroll-guide {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      pointer-events: none;
      animation: guideFloat 1.3s ease-in-out infinite;
    }

    .scroll-guide-arrow {
      color: #d7a83f;
      font-size: 48px;
      font-weight: 900;
      line-height: 1;
      text-shadow: 0 0 18px rgba(215, 168, 63, 0.8);
    }

    .scroll-guide-text {
      margin-top: 8px;
      color: white;
      font-size: clamp(16px, 4.2vw, 20px);
      font-weight: 900;
      white-space: nowrap;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.68);
      border: 1px solid rgba(215, 168, 63, 0.45);
      backdrop-filter: blur(8px);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
    }

    @keyframes guideFloat {
      0% {
        transform: translate(-50%, -50%) translateY(0);
      }

      50% {
        transform: translate(-50%, -50%) translateY(-10px);
      }

      100% {
        transform: translate(-50%, -50%) translateY(0);
      }
    }

    @media (max-height: 720px) {
      .page {
        --header-h: 56px;
        --main-img-h: 220px;
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

      .screen2-text {
        top: 300px;
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

  private callPhone() {
    window.location.href = 'tel:0312823647';
  }

  private onScroll(e: Event) {
    if (!this.showScrollGuide) return;

    const target = e.currentTarget as HTMLElement;

    if (target.scrollTop > 20) {
      this.showScrollGuide = false;
    }
  }

  render() {
    return html`
      <main class="page" @scroll=${this.onScroll}>
        <section class="screen">
          <header class="app-header">
            <button class="menu-btn">☰</button>
            <div class="header-title"><span>모정</span> 렌터카</div>
          </header>

          <section class="main-img">
            <img
              class="main-img-bg"
              src="./images/Mainpage_image.png"
              alt="MJ Rental main"
            />

            <div class="social-links">
              <a
                href="https://youtube.com/@mjrental"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <img
                  class="instagram-icon"
                  src="./assets/icons/250px-Instagram.svg.webp"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://youtube.com/@mjrental"
                target="_blank"
                rel="noopener"
                aria-label="X"
              >
                <img
                  class="x-icon"
                  src="./assets/icons/330px-X_logo_2023.svg.webp"
                  alt="X"
                />
              </a>

              <a
                href="https://youtube.com/@mjrental"
                target="_blank"
                rel="noopener"
                aria-label="Youtube"
              >
                <img
                  class="youtube-icon"
                  src="./assets/icons/330px-YouTube_full-color_icon_(2024).svg.webp"
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
                  <img src="./images/grid1_left_2.png" alt="보험대차 전문" />
                </div>
                <div class="card">
                  <img
                    src="./images/grid1_right_2.png"
                    alt="픽업 딜리버리 서비스"
                  />
                </div>
                <div class="card">
                  <img src="./images/grid2_left_2.png" alt="금연차량 운영" />
                </div>
                <div class="card">
                  <img
                    src="./images/grid2_right_2.png"
                    alt="수입 국산 대다수 차량 보유"
                  />
                </div>
                <div class="card">
                  <img
                    src="./images/grid3_left_2.png"
                    alt="전차종 세차시 살균소독"
                  />
                </div>
                <div class="card">
                  <img src="./images/grid3_right_2.png" alt="리스렌트" />
                </div>
                <div class="card">
                  <img src="./images/grid4_left.JPG" alt="장기렌트" />
                </div>
                <div class="card">
                  <img src="./images/grid4_right.JPG" alt="단기렌트" />
                </div>
              </div>
            </div>

            <div class="call" @click=${this.callPhone}>
              <div class="call-banner" onclick="location.href='tel:0312823647'">
                <div class="call-left">
                  <div class="phone-circle">☎</div>
                  <span class="call-text">지금 바로 문의하기</span>
                </div>
              <div class="arrow">→</div>
              </div>
            </div>
          </section>
        </section>

        <section class="screen screen2">
          <img
            class="screen2-bg"
            src="./images/2-2.PNG"
            alt="모정렌터카 시그니처 렌트카"
          />

          <div class="top-search">
            <span class="naver">NAVER</span>
            <div class="search-box">▶ 모정렌터카</div>
            <button>검색</button>
          </div>

          <div class="screen2-text">
            <h1>
              MOJEONG<br />
              SIGNATURE<br />
              RENTCAR
            </h1>
            <div class="screen2-line"></div>
            <h2>모정렌터카</h2>
          </div>
        </section>

        <section class="screen screen3">
          <div class="screen3-page">
            <div class="screen3-img-box-up">
              <img src="./images/3-1.PNG" alt="해안도로를 향해" />
            </div>

            <div class="screen3-img-box-down">
              <img src="./images/3-2.png" alt="보유 차량 리스트" />
            </div>
          </div>
        </section>

        <section class="screen contact-screen">
          <div class="contact-page">
            <div class="map-box-up">
              <img
                src="./images/map_top.PNG"
                alt="More than a rental. A refined experience."
              />
            </div>

            <div class="contact-title">
              <span></span>
              찾아오시는 길
            </div>

            <div class="map-box-down">
              <img src="./images/map.png" alt="모정렌터카 위치 지도" />
            </div>

            <div class="contact-box">
              <div class="contact-phone" @click=${this.callPhone}>
                <span class="label">상담문의</span>
                <span class="number">031-282-3647</span>
              </div>

              <div class="contact-address">
                <div>용인 : 경기도 용인시 기흥구 언남로 17-1 상가 201호</div>
                <div>분당 : 경기도 성남시 분당구 성남대로 172번길24 712호</div>
              </div>
            </div>
          </div>
        </section>

        ${this.showScrollGuide
          ? html`
              <div class="scroll-guide">
                <div class="scroll-guide-arrow">^</div>
                <div class="scroll-guide-arrow">^</div>
                <div class="scroll-guide-text">화면을 위로 스크롤 하세요!</div>
              </div>
            `
          : null}
      </main>
    `;
  }
}

