function Landing() {
  return (
    <>
      <header>
        <nav>
          <div class="gnb">
            <a href="index.html">
              <img src="./img/logo.svg" alt="Linkbrary logo to home page" />
            </a>
            <a class="label label-short" href="./signin.html">
              로그인
            </a>
          </div>
        </nav>
        <div class="head-content">
          <h1 class="main-text">
            <span class="main-text-stress background-clip-text">
              세상의 모든 정보를
            </span>
            <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <a class="label label-long " href="./signup.html">
            링크 추가하기
          </a>
          <img
            class="head-image"
            src="./img/image 25.png"
            alt="intro Linkbrary service"
          />
        </div>
      </header>

      <article>
        <section>
          <h2 class="title">
            <span class="title-1-gradient  background-clip-text">
              원하는 링크를
            </span>
            저장하세요
          </h2>
          <p class="description">
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요.
          </p>
          <img
            src="./img/_img1.png"
            class="content-image"
            alt="링크 내용이 담긴 카드들"
          />
        </section>

        <section>
          <h2 class="title">
            링크를 폴더로
            <span class="title-2-gradient background-clip-text">관리</span>
            하세요
          </h2>
          <p class="description">
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
          </p>
          <img
            src="./img/img2.png"
            class="content-image"
            alt="폴더 이름 변경 기능"
          />
        </section>

        <section>
          <h2 class="title">
            저장한 링크를
            <span class="title-3-gradient background-clip-text">공유</span>해
            보세요
          </h2>
          <p class="description">
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </p>
          <img
            src="./img/img3.png"
            class="content-image"
            alt="폴더 공유 기능"
          />
        </section>

        <section>
          <h2 class="title">
            저장한 링크를
            <span class="title-4-gradient background-clip-text">검색</span>해
            보세요
          </h2>
          <p class="description">중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          <img
            src="./img/_img4.png"
            class="content-image"
            alt="링크 검색 기능"
          />
        </section>
      </article>

      <footer>
        <div class="footer-box">
          <span class="copyright">©codeit - 2023</span>
          <div class="footer-links">
            <a class="footer-link" href="privacy.html">
              Privacy Policy
            </a>
            <a class="footer-link" href="faq.html">
              FAQ
            </a>
          </div>
          <div class="sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/facebook.svg"
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/tweeter.svg"
                alt="twitter 홈페이지로 연결된 twitter 로고"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/youtube.svg"
                alt="youtube 홈페이지로 연결된 youtube 로고"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/instagram.svg"
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
