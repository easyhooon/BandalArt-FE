# BandalArt FE

반다라트의 공식 랜딩 페이지와 AdMob `app-ads.txt`를 제공하는 정적 웹 프로젝트입니다.

## 개발

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## Vercel 배포

1. Vercel에서 `easyhooon/BandalArt-FE` 저장소를 가져옵니다.
2. Framework Preset은 Vite, Build Command는 `npm run build`, Output Directory는 `dist`를 사용합니다.
3. production URL이 확정되면 Google Play와 App Store의 개발자 웹사이트를 같은 URL로 갱신합니다.
4. `public/og.png`의 절대 production URL을 `index.html`의 `og:image`와 `twitter:image`에 추가합니다.

## app-ads.txt

실제 배포 전 AdMob 콘솔에서 personalized snippet을 복사해 `public/app-ads.txt`로 저장해야 합니다.

- 예시 publisher ID를 사용하지 않습니다.
- 배포 후 `https://{production-host}/app-ads.txt`가 인증 없이 `200 OK`와 일반 텍스트로 응답하는지 확인합니다.
- `app-ads.txt.example`은 위치와 절차를 설명하기 위한 파일이며 production에 배포되지 않습니다.

구현 전략은 [docs/LANDING_PAGE_STRATEGY.md](docs/LANDING_PAGE_STRATEGY.md)를 참고하세요.
