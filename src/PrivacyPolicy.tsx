import { useEffect } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import privacyPolicySource from './content/privacy-policy.md?raw'
import type { PrivacyLocale } from './privacyRoutes'

const CONTACT_EMAIL = 'mraz3068@gmail.com'

const localeConfig: Record<
  PrivacyLocale,
  { label: string; path: string; documentLanguage: string; title: string; description: string }
> = {
  ko: {
    label: '한국어',
    path: '/privacy',
    documentLanguage: 'ko',
    title: '반다라트 개인정보처리방침',
    description: '반다라트 Android 및 iOS 앱의 개인정보 처리 기준을 안내합니다.',
  },
  en: {
    label: 'English',
    path: '/en/privacy',
    documentLanguage: 'en',
    title: 'Bandalart Privacy Policy',
    description: 'Learn how the Bandalart Android and iOS apps process personal information.',
  },
  ja: {
    label: '日本語',
    path: '/ja/privacy',
    documentLanguage: 'ja',
    title: 'Bandalart プライバシーポリシー',
    description: 'BandalartのAndroid・iOSアプリにおける個人情報の取扱いについてご案内します。',
  },
}

const policySections = privacyPolicySource.split(/\n---\n\n(?=# )/)

const policyByLocale: Record<PrivacyLocale, string> = {
  ko: policySections[0],
  en: policySections[1],
  ja: policySections[2],
}

const markdownComponents: Components = {
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')

    return (
      <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  },
  table: ({ children }) => (
    <div className="privacy-table-wrap">
      <table>{children}</table>
    </div>
  ),
}

function PrivacyPolicy({ locale }: { locale: PrivacyLocale }) {
  const config = localeConfig[locale]

  useEffect(() => {
    document.documentElement.lang = config.documentLanguage
    document.title = `${config.title} | Bandalart`

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    description?.setAttribute('content', config.description)
  }, [config])

  return (
    <div className="site-shell privacy-shell">
      <a className="skip-link" href="#privacy-content">본문으로 바로가기</a>

      <header className="site-header privacy-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="반다라트 홈">
            <img src="/app-icon.png" alt="" width="36" height="36" />
            <span>반다라트</span>
          </a>
          <a className="privacy-home-link" href="/">홈으로</a>
        </div>
      </header>

      <main id="privacy-content" className="privacy-main">
        <div className="privacy-heading">
          <p className="section-label">Privacy policy</p>
          <nav className="privacy-language" aria-label="개인정보처리방침 언어">
            {(Object.keys(localeConfig) as PrivacyLocale[]).map((option) => (
              <a
                key={option}
                href={localeConfig[option].path}
                lang={localeConfig[option].documentLanguage}
                aria-current={option === locale ? 'page' : undefined}
              >
                {localeConfig[option].label}
              </a>
            ))}
          </nav>
        </div>

        <article className="privacy-document">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {policyByLocale[locale]}
          </ReactMarkdown>
        </article>
      </main>

      <footer className="site-footer privacy-footer">
        <div className="footer-inner">
          <a className="brand brand--footer" href="/" aria-label="반다라트 홈">
            <img src="/app-icon.png" alt="" width="32" height="32" />
            <span>반다라트</span>
          </a>
          <p>부담 없는 만다라트 계획표로 목표를 더욱 선명하게.</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>문의하기</a>
          <small>© {new Date().getFullYear()} BandalArt</small>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
