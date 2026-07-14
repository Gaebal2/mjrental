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
      min-height: 100dvh;
      height: auto;

      overflow: visible;

      background: #050505;
    }

    .screen {
      width: 100%;
      min-height: 0;
      height: auto;

      overflow: visible;

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

    .home-screen {
      display: flex;
      flex-direction: column;
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
      width: 100%;
      height: auto;

      padding: clamp(8px, 1.4dvh, 14px) 12px clamp(12px, 2dvh, 20px);

      background: linear-gradient(180deg, #080808, #030303);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      gap: clamp(10px, 1.4dvh, 16px);

      overflow: visible;
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
      width: 100%;
      overflow: visible;
    }

    .grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .card {
      width: 100%;
      aspect-ratio: 340 / 140;
      border-radius: 10px;
      overflow: hidden;
      background: #111;
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .call {
      width: 100%;
      margin-top: 4px;
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
      width: 100%;
      aspect-ratio: 9 / 16;
      min-height: 680px;
      background: #283574;
      overflow: hidden;
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
      width: 100%;
      height: auto;
      background: #2f302d;
      overflow: visible;
    }

    .screen3-page {
      width: 100%;
      height: auto;

      padding: clamp(12px, 2dvh, 18px) clamp(10px, 3vw, 16px);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      gap: clamp(10px, 1.8dvh, 16px);

      overflow: visible;
    }

    .screen3-page::-webkit-scrollbar {
      display: none;
    }

    /* 위쪽 3-1 이미지 박스 */
    .screen3-img-box-up {
      width: 100%;
      height: auto;
      flex: 0 0 auto;
      border-radius: 10px;
      overflow: hidden;
      background: transparent;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    /* 이미지 원본 비율에 맞춰 박스 높이도 자동 축소 */
    .screen3-img-box-up img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }

    /* 아래쪽 3-2 이미지 박스 */
    .screen3-img-box-down {
      width: 100%;
      height: auto;
      flex: 0 0 auto;
      border-radius: 10px;
      overflow: hidden;
      background: transparent;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    /* 아래 이미지도 원본 비율 유지 */
    .screen3-img-box-down img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }

    .contact-screen {
      width: 100%;
      height: auto;
      background: #2f302d;
      overflow: visible;
    }

    .contact-page {
      width: 100%;
      height: auto;

      padding: clamp(12px, 2dvh, 18px) clamp(10px, 3vw, 16px);
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      gap: clamp(10px, 1.8dvh, 16px);

      overflow: visible;
    }

    .contact-page::-webkit-scrollbar {
      display: none;
    }

    /* 위쪽 안내 이미지 */
    .map-box-up {
      width: 100%;
      height: auto;

      flex: 0 0 auto;

      border-radius: 10px;
      overflow: hidden;
      background: transparent;

      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .map-box-up img {
      width: 100%;
      height: auto;

      object-fit: contain;
      display: block;
    }

    /* 찾아오시는 길 제목 */
    .contact-title {
      display: flex;
      align-items: center;
      gap: 10px;

      flex: 0 0 auto;

      color: white;
      font-size: clamp(16px, 5vw, 22px);
      font-weight: 900;
      line-height: 1.2;
    }

    .contact-title span {
      width: 6px;
      height: 26px;

      background: #d7a83f;
      border-radius: 999px;

      flex-shrink: 0;
    }

    /* 지도 이미지 */
    .map-box-down {
      width: 100%;
      height: auto;

      flex: 0 0 auto;

      border-radius: 10px;
      overflow: hidden;
      background: transparent;

      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
    }

    .map-box-down img {
      width: 100%;
      height: auto;

      object-fit: contain;
      display: block;
    }

    /* 전화번호 및 주소 */
    .contact-box {
      width: 100%;

      flex: 0 0 auto;

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

      -webkit-tap-highlight-color: transparent;
    }

    .contact-phone:active {
      transform: scale(0.99);
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

    /* 스크롤 안내 전체 영역 */
    .scroll-guide {
      position: fixed;
      left: 50%;
      bottom: clamp(32px, 8dvh, 70px);
      transform: translateX(-50%);
      z-index: 9999;

      display: flex;
      flex-direction: column;
      align-items: center;

      pointer-events: none;
      animation: guideFloat 2s ease-in-out infinite;
    }

    /* 화살표 3개를 겹쳐서 세로 배치 */
    .scroll-guide-arrows {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
    }

    /* CSS로 만드는 chevron-up */
    .arrow-up {
      width: 18px;
      height: 18px;

      border-top: 4px solid #d7a83f;
      border-left: 4px solid #d7a83f;

      margin: -4px 0;

      opacity: 0.2;

      transform: rotate(45deg);
      animation: arrowUp 1.4s ease-in-out infinite;
    }

    /* 아래에서 위로 순서대로 밝아짐 */
    .arrow-up:nth-child(1) {
      animation-delay: 0.4s;
    }

    .arrow-up:nth-child(2) {
      animation-delay: 0.2s;
    }

    .arrow-up:nth-child(3) {
      animation-delay: 0s;
    }

    .scroll-guide-text {
      color: #fff;
      font-size: clamp(14px, 4vw, 18px);
      font-weight: 800;
      letter-spacing: -0.3px;
      white-space: nowrap;

      padding: 9px 16px;
      border-radius: 999px;

      background: rgba(0, 0, 0, 0.72);
      border: 1px solid rgba(215, 168, 63, 0.45);

      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);

      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    }

    @keyframes arrowUp {
      0% {
        opacity: 0.15;
        border-color: #666;
        transform: rotate(45deg) translate(6px, 6px);
      }

      45% {
        opacity: 1;
        border-color: #ffd76a;
        filter: drop-shadow(0 0 6px rgba(255, 215, 106, 0.9));
      }

      100% {
        opacity: 0.15;
        border-color: #666;
        transform: rotate(45deg) translate(-6px, -6px);
      }
    }

    @keyframes guideFloat {
      0%,
      100% {
        transform: translateX(-50%) translateY(0);
      }

      50% {
        transform: translateX(-50%) translateY(-6px);
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

    /* 일반 Fold 세로 화면 */
    @media (min-width: 600px) and (max-width: 899px) {
      .page {
        width: min(100%, 600px);
        max-width: 600px;
        margin: 0 auto;

        --header-h: 72px;
        --main-img-h: 360px;
        --call-h: 68px;
      }

      .app-header {
        padding: 0 24px;
      }

      .menu-btn {
        width: 48px;
        height: 48px;
        font-size: 36px;
      }

      .header-title {
        margin-left: 18px;
        font-size: 26px;
      }

      .service {
        padding: 16px 22px 20px;
        row-gap: 16px;
      }

      .section-title {
        font-size: 23px;
      }

      .grid-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .grid {
        width: 100%;
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .card {
        width: 100%;
        aspect-ratio: 340 / 140;
      }

      .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .call-banner {
        height: 68px;
      }

      .call-text {
        font-size: 26px;
      }
    }

    /* 태블릿·큰 Fold 가로 화면 */
    @media (min-width: 900px) {
      .page {
        width: min(100%, 900px);
        max-width: 900px;
        margin: 0 auto;

        --header-h: 76px;
        --main-img-h: 420px;
        --call-h: 72px;
      }

      .service {
        padding: 18px 28px 22px;
        row-gap: 18px;
      }

      .section-title {
        font-size: 25px;
      }

      .grid-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .grid {
        width: 100%;
        max-width: 820px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px 24px;
      }

      .card {
        width: 100%;
        aspect-ratio: 340 / 140;
      }

      .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .call-banner {
        height: 72px;
      }

      .call-text {
        font-size: 28px;
      }
    }
  `;

  private callPhone() {
    window.location.href = 'tel:01085023647';
  }

  private callPhone2() {
    window.location.href = 'tel:0312823647';
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleWindowScroll, {
      passive: true,
    });
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleWindowScroll);
    super.disconnectedCallback();
  }

  private handleWindowScroll = () => {
    if (this.showScrollGuide && window.scrollY > 20) {
      this.showScrollGuide = false;
    }
  };

  render() {
    return html`
      <main class="page">
        <section class="screen home-screen">
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
                  <img src="./images/grid1_left_2.png" alt="사고대차" />
                </div>
                <div class="card">
                  <img src="./images/grid1_right_2.png" alt="일반렌탈" />
                </div>
                <div class="card">
                  <img src="./images/grid2_left_2.png" alt="월대, 장기렌탈" />
                </div>
                <div class="card">
                  <img src="./images/grid2_right_2.png" alt="VIP의전" />
                </div>
                <div class="card">
                  <img src="./images/grid3_left_2.png" alt="공항픽업" />
                </div>
                <div class="card">
                  <img src="./images/grid3_right_2.png" alt="골프픽업" />
                </div>
              </div>
            </div>

            <div class="call" @click=${this.callPhone}>
              <div
                class="call-banner"
                onclick="location.href='tel:01085023647'"
              >
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
              <img src="./images/3-1.jpg" alt="해안도로를 향해" />
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
                src="./images/map_top.png"
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
              <div class="contact-phone" @click=${this.callPhone2}>
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
                <div class="scroll-guide-arrows">
                  <div class="arrow-up"></div>
                  <div class="arrow-up"></div>
                  <div class="arrow-up"></div>
                </div>

                <div class="scroll-guide-text">화면을 위로 스크롤 하세요</div>
              </div>
            `
          : null}
      </main>
    `;
  }
}
