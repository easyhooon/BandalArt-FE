import PrivacyPolicy from './PrivacyPolicy'
import { getPrivacyLocale } from './privacyRoutes'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexters.bandalart'
const APP_STORE_URL =
  'https://apps.apple.com/kr/app/%EB%B0%98%EB%8B%A4%EB%9D%BC%ED%8A%B8-%EB%B6%80%EB%8B%B4-%EC%97%86%EB%8A%94-%EB%A7%8C%EB%8B%A4%EB%9D%BC%ED%8A%B8-%EA%B3%84%ED%9A%8D%ED%91%9C/id6743101965'
const CONTACT_EMAIL = 'mraz3068@gmail.com'

const gridCells = [
  '아침 루틴',
  '책 10쪽',
  '주 3회 운동',
  '물 2L',
  '일찍 자기',
  '건강',
  '자격증',
  '저축',
  '취미',
  '기록',
  '스트레칭',
  '영어 공부',
  '올해의 목표',
  '월 20만원',
  '사진 정리',
  '산책하기',
  '강의 듣기',
  '투자 공부',
  '악기 연습',
  '감사 일기',
  '야식 줄이기',
  '복습하기',
  '가계부 쓰기',
  '주 1회',
  '주간 회고',
]

function StoreLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`store-links${compact ? ' store-links--compact' : ''}`} aria-label="앱 다운로드">
      <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-button store-button--dark">
        <img className="store-button__brand-icon" src="/assets/apple.svg" alt="" width="22" height="22" />
        <span className="store-button__label">
          <span className="store-button__caption">iPhone에서</span>
          <strong>App Store</strong>
        </span>
        <span aria-hidden="true" className="store-button__arrow">↗</span>
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-button store-button--light">
        <img className="store-button__brand-icon" src="/assets/googleplay.svg" alt="" width="22" height="22" />
        <span className="store-button__label">
          <span className="store-button__caption">Android에서</span>
          <strong>Google Play</strong>
        </span>
        <span aria-hidden="true" className="store-button__arrow">↗</span>
      </a>
    </div>
  )
}

function BandalartGrid() {
  return (
    <div className="grid-card" aria-hidden="true">
      <div className="grid-card__head">
        <span>🎯</span>
        <div>
          <small>올해 꼭 이루고 싶은</small>
          <strong>나만의 반다라트</strong>
        </div>
        <em>36%</em>
      </div>
      <div className="bandalart-grid">
        {gridCells.map((cell, index) => (
          <span
            key={cell}
            className={[
              index === 12 ? 'is-main' : '',
              [6, 8, 16, 18].includes(index) ? 'is-category' : '',
              [3, 10, 15, 20].includes(index) ? 'is-complete' : '',
            ].filter(Boolean).join(' ')}
          >
            {cell}
          </span>
        ))}
      </div>
      <div className="grid-card__progress"><span /></div>
    </div>
  )
}

function App() {
  const privacyLocale = getPrivacyLocale(window.location.pathname)

  if (privacyLocale) {
    return <PrivacyPolicy locale={privacyLocale} />
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="반다라트 홈">
            <img src="/app-icon.png" alt="" width="36" height="36" />
            <span>반다라트</span>
          </a>
          <nav className="header-nav" aria-label="주요 메뉴">
            <a href="#how">사용 방법</a>
            <a href="#features">주요 기능</a>
          </nav>
          <a className="header-cta" href="#download">앱 다운로드</a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">부담 없는 만다라트 계획표</p>
              <h1>큰 목표는 작게,<br />매일의 실천은<br /><mark>선명하게.</mark></h1>
              <p className="hero__description">
                이루고 싶은 목표를 25칸의 작은 행동으로 나누고,<br className="desktop-break" /> 오늘의 달성을 하나씩 채워보세요.
              </p>
              <StoreLinks />
            </div>
            <div className="hero__visual">
              <div className="hero__shape hero__shape--one" />
              <div className="hero__shape hero__shape--two" />
              <BandalartGrid />
            </div>
          </div>
        </section>

        <section className="steps" id="how" aria-labelledby="steps-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="section-label">계획이 막막할 때</p>
              <h2 id="steps-title">목표를 이루는 과정을<br />세 단계로 가볍게 시작해요.</h2>
            </div>
            <ol className="step-list">
              <li>
                <span>01</span>
                <div className="step-icon" aria-hidden="true">◎</div>
                <strong>중심 목표를 정하고</strong>
                <p>지금 가장 이루고 싶은 목표 하나를 가운데에 적어요.</p>
              </li>
              <li>
                <span>02</span>
                <div className="step-icon step-icon--grid" aria-hidden="true">
                  {Array.from({ length: 25 }, (_, index) => <span key={index} />)}
                </div>
                <strong>작은 행동으로 나누고</strong>
                <p>목표를 실천할 수 있는 구체적인 행동으로 25칸을 채워요.</p>
              </li>
              <li>
                <span>03</span>
                <div className="step-icon" aria-hidden="true">✓</div>
                <strong>하나씩 달성해요</strong>
                <p>완료한 칸을 표시하며 목표에 가까워지는 흐름을 확인해요.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="section-shell section-heading section-heading--features">
            <p className="section-label">목표에만 집중할 수 있게</p>
            <h2 id="features-title">계획부터 기록까지,<br />반다라트가 단순하게 정리할게요.</h2>
          </div>

          <article className="feature feature--dark">
            <div className="feature__inner">
              <div className="feature__copy">
                <span className="feature__number">01</span>
                <h3>25칸에 꿈을 담아보세요</h3>
                <p>큰 목표와 연결되는 여덟 가지 방향을 정하고, 매일 실천할 수 있는 행동으로 구체화해요.</p>
              </div>
              <div className="phone-stage phone-stage--mint">
                <img src="/assets/screen-01.png" alt="25칸으로 구성된 반다라트 목표 화면" width="1080" height="1920" loading="lazy" />
              </div>
            </div>
          </article>

          <article className="feature feature--light">
            <div className="feature__inner feature__inner--reverse">
              <div className="feature__copy">
                <span className="feature__number">02</span>
                <h3>색과 이모지로<br />나답게 구분해요</h3>
                <p>목표에 어울리는 이모지와 색상을 고르고 마감일과 메모를 더해, 다시 보고 싶은 계획을 만들어요.</p>
              </div>
              <div className="phone-stage phone-stage--sky">
                <img src="/assets/screen-02.png" alt="목표 이모지와 색상, 마감일을 수정하는 반다라트 화면" width="1080" height="1920" loading="lazy" />
              </div>
            </div>
          </article>

          <article className="feature feature--soft">
            <div className="feature__inner">
              <div className="feature__copy">
                <span className="feature__number">03</span>
                <h3>여러 개의 목표도<br />한곳에서 관리해요</h3>
                <p>운동, 공부, 저축처럼 서로 다른 목표를 각각의 반다라트로 만들고 달성률을 한눈에 확인해요.</p>
              </div>
              <div className="phone-stage phone-stage--yellow">
                <img src="/assets/screen-03.png" alt="여러 반다라트와 달성률을 보여주는 목록 화면" width="1080" height="1920" loading="lazy" />
              </div>
            </div>
          </article>
        </section>

        <section className="support" aria-labelledby="support-title">
          <div className="support__inner">
            <div>
              <p className="section-label">꾸준함을 돕는 작은 기능</p>
              <h2 id="support-title">눈이 편한 다크 모드부터<br />저장과 공유까지.</h2>
              <p>계획을 이미지로 남겨 공유하고, 기기 설정에 맞는 화면으로 언제든 편하게 확인하세요.</p>
            </div>
            <div className="support__cards" aria-hidden="true">
              <div className="support-card support-card--dark">
                <span>☾</span>
                <strong>다크 모드</strong>
                <small>늦은 시간에도 편안하게</small>
              </div>
              <div className="support-card support-card--white">
                <span>↗</span>
                <strong>저장과 공유</strong>
                <small>나의 계획을 가까운 사람과</small>
              </div>
            </div>
          </div>
        </section>

        <section className="download" id="download" aria-labelledby="download-title">
          <div className="download__inner">
            <img
              src="/assets/store-graphic.png"
              alt="당신의 목표를 더욱 선명하게, 반다라트 앱 화면"
              width="512"
              height="250"
              className="download__graphic"
              loading="lazy"
            />
            <div className="download__content">
              <div className="download__copy">
                <p>오늘의 한 칸부터 시작해요</p>
                <h2 id="download-title">지금 반다라트를<br />시작해 보세요.</h2>
              </div>
              <StoreLinks compact />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand brand--footer" href="#top" aria-label="반다라트 홈">
            <img src="/app-icon.png" alt="" width="32" height="32" />
            <span>반다라트</span>
          </a>
          <p>부담 없는 만다라트 계획표로 목표를 더욱 선명하게.</p>
          <a href="/privacy">개인정보처리방침</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>문의하기</a>
          <small>© {new Date().getFullYear()} BandalArt</small>
        </div>
      </footer>
    </div>
  )
}

export default App
