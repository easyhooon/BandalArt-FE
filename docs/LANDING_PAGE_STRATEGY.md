# BandalArt 랜딩 페이지 전략

## 목표

- 반다라트의 핵심 가치와 사용 흐름을 한 페이지에서 소개한다.
- Google Play와 App Store로 연결되는 공식 홈페이지를 제공한다.
- AdMob 소유권 검증을 위해 production URL의 루트에서 `/app-ads.txt`를 제공할 수 있게 한다.
- 별도 유료 도메인 없이 Vercel 기본 도메인으로 먼저 운영한다.

## 구현 방향

- 별도 저장소 `easyhooon/BandalArt-FE`에서 관리한다.
- React, TypeScript, Vite 기반의 정적 단일 페이지로 구현한다.
- [여비 랜딩 페이지](https://home.yeobee.me/)의 정보 구조와 반응형 리듬을 참고한다.
- 여비의 Cloudflare Workers, SSR, 다중 호스트 구성은 가져오지 않는다.
- 반다라트 앱의 컬러, 타이포그래피, 5×5 표 모티프와 실제 기능 설명을 사용한다.

## 페이지 구성

1. 고정 헤더와 앱 다운로드 CTA
2. 큰 목표를 작은 실천으로 나눈다는 핵심 메시지의 Hero
3. 목표 설정 → 25칸 작성 → 달성 표시의 사용 흐름
4. 5×5 표, 달성률, 여러 반다라트, 저장·공유, 다크 모드 소개
5. Android/iOS 다운로드 CTA
6. 문의 이메일, 개인정보처리방침, 저작권 정보가 있는 Footer

## 기술·운영 범위

- 모바일 우선 반응형 레이아웃
- semantic HTML, 키보드 탐색, 충분한 색상 대비와 이미지 대체 텍스트
- title, description, Open Graph와 favicon
- Vercel Git 배포가 가능한 정적 build
- `public/app-ads.txt`를 production 루트에 제공

## app-ads.txt 정책

- AdMob 콘솔에서 복사한 실제 personalized snippet만 사용한다.
- 실제 publisher ID를 받기 전에는 예시나 추정 값을 production 파일에 넣지 않는다.
- 구현 단계에서는 필요한 파일 위치와 배포 검증 절차를 문서화하고, 실제 snippet 입력은 별도 완료 조건으로 남긴다.

## 검증

- lint, TypeScript 검사와 production build 통과
- 모바일·태블릿·데스크톱 반응형 구조 확인
- 앱 다운로드·문의·정책 링크 확인
- 배포 후 `/app-ads.txt`가 인증 없이 `200 OK`와 일반 텍스트로 응답하는지 확인

## 완료 조건

- 반다라트 브랜드의 공식 랜딩 페이지가 Vercel production URL로 공개된다.
- 앱 다운로드 및 지원 경로가 정상 동작한다.
- 실제 AdMob snippet이 입력된 `/app-ads.txt`가 검증 가능하다.

관련 이슈: https://github.com/Nexters/BandalArt-KMP/issues/219
