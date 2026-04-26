# JH's Portfolio

React 18 + Vite 기반 개인 포트폴리오 웹사이트입니다.  
데이터 엔지니어/백엔드 신입 채용 심사 흐름에 맞춰 설계 및 고도화하였습니다.

🔗 **배포 페이지:** https://jhyungit.github.io/

---

## Tech Stack

- React 18 + Vite
- JavaScript (ES2022)
- CSS Custom Properties (Design Tokens)
- GitHub Pages

---

## 디자인 의사결정 요약

- **시맨틱 토큰 기반 디자인 시스템**: `--color-primary`, `--text-strong`, `--bg-elevated` 등 50+개 토큰으로 라이트/다크 모드를 단일 소스로 관리. 다크 모드 `--text-muted`를 `#8ca0bb`로 조정해 WCAG AA 명암비(≥4.5:1) 충족.
- **Pretendard 가변 폰트 + 타이포그래피 스케일**: Dynamic Subset CDN으로 초기 로딩 없이 한글 최적화 서체 적용, `clamp()` 기반 유체 타이포그래피로 380px~1440px 전 해상도 대응.
- **CSS 전용 스태거 애니메이션**: framer-motion 의존성 없이 `@keyframes` + `--card-index` CSS 변수로 Hero 요소별 50~660ms 진입 딜레이, Skill 카드 탭 전환 30ms 스태거 구현. React `key` prop 변경으로 리마운트를 유도해 탭 전환마다 애니메이션 재실행.
- **접근성 우선 설계**: 전역 `:focus-visible` 아웃라인, 두 모달 모두 `role="dialog" aria-modal="true"` + Esc 닫기 + 포커스 트랩 + 오픈/클로즈 시 포커스 복원, 프로젝트 카드에 `tabIndex={0}` + Enter/Space 키보드 지원 추가.
- **`prefers-reduced-motion` 전역 대응**: 미디어 쿼리 하나로 모든 fade-up 전환, title-underline 드로우, Hero 스태거, Skill 카드 애니메이션을 일괄 비활성화해 전정 장애 사용자 경험 보호.

---

## 주요 기능

- Hero 텍스트 줄 단위 stagger 진입 애니메이션
- Career 타임라인 레일 (연도 배지 위치 동적 계산)
- Skill 탭 전환 시 카드 stagger 재등장
- Project 캐러셀 + 이미지 슬라이드 모달 (focus trap 포함)
- 이력서 PDF 다운로드 (Contact 섹션)
- 라이트/다크 모드 토글 (CSS token 전환)
