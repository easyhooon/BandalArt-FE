export type PrivacyLocale = 'ko' | 'en' | 'ja'

export function getPrivacyLocale(pathname: string): PrivacyLocale | null {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/privacy') return 'ko'
  if (normalizedPath === '/en/privacy') return 'en'
  if (normalizedPath === '/ja/privacy') return 'ja'
  return null
}
