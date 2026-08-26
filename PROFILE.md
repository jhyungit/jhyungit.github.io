# PROFILE.md — 사실 원본

이 문서는 **모든 취업 산출물의 단일 사실 원본(single source of truth)**이다.

**적용 대상**
1. 이력서 PDF (`docs/resume.html`)
2. 포트폴리오 PDF (`docs/portfolio.html`)
3. GitHub 프로필 README (`jhyungit/jhyungit`)
4. 포트폴리오 웹사이트 (`src/data/`, https://jhyungit.github.io/)

**여기에 없는 것은 어디에도 쓰지 않는다.**

수치는 확정값이다. 추정·반올림·재해석하지 않는다.

---

## 0. 동기화 규칙

**동기화 방향은 단방향이다.**

```
PROFILE.md  (원본)
    ↓
docs/resume.html
    ↓
docs/portfolio.html
    ↓
src/data/            (웹사이트)
    ↓
GitHub 프로필 README (jhyungit/jhyungit)
```

- 사실이 바뀌면 **PROFILE.md를 먼저 고친다.** 그다음 위 순서로 전파한다
- **역방향으로 고치지 않는다.** 산출물에서 발견한 새 사실은 먼저 PROFILE.md에
  반영한 뒤 나머지에 전파한다
- 산출물 사이에 불일치가 발견되면, 어느 쪽이 맞는지 판단하지 말고
  **PROFILE.md를 기준으로 양쪽을 맞춘다.** PROFILE.md에 없으면 사용자에게 묻는다

### 과거에 실제로 발생한 불일치 (재발 방지용 기록)

| 항목 | 발생한 표기 차이 | 확정값 |
|---|---|---|
| WebSocket 이벤트 스키마 | "28종" vs "30여 종" | **28종** |
| yorr-arcade 팀 서비스 | "채택" vs "채택·이식" | **채택은 내 것 / 이식은 팀원** |
| YORR 배포 주소 | yorr.site vs vercel 주소 | **yorr.site** |
| TripCrew 실시간 구조 | "Redis 기반" vs "SimpleBroker" | **인메모리 SimpleBroker** |
| 달리셔스 팀 규모 | "5인 팀" vs "6인 팀" | **6인 팀** |
| 수상 건수 | "2건" vs "4건" | **4건** |

최종 확인: 2026-08-26

---

## 1. 기본 정보

| 항목 | 값 |
|---|---|
| 이름 | 이정현 (Jeonghyun Lee) |
| 직군 표기 | **Backend Developer** (단일 표기. "Fullstack", "Data-driven" 병기 금지) |
| 한 줄 소개 | Spring Boot 기반 API 서버를 설계하고, 쿼리·인덱스로 응답 속도를 개선하는 백엔드 개발자입니다. |
| 이메일 | jh021199@gmail.com |
| GitHub | https://github.com/jhyungit |
| 웹사이트 | https://jhyungit.github.io/ |
| 위치 | Seoul, Korea |

> 전화번호는 이 파일에 두지 않는다. `docs/resume.html`(git 미추적)에만 있다.

---

## 2. 확정 수치 — 반올림·추정 금지

### TripCrew (2026.04–06, SSAFY 관통 프로젝트, 2인 팀, 팀장, 백엔드 담당 기여도 50%)
- 30만 건 기준 **0.473초 → 0.018초 (약 26배)**
- 인덱스: **(role, created_at) 복합 인덱스**
- EXPLAIN: **type ALL → ref**, **filesort 제거**
- 인덱스 적용 후에도 **OFFSET 10만 구간 0.244초** ← 빼면 안 된다
  → 대용량 페이징의 근본 해법은 커서 방식
- 낙관적 락: version 컬럼, 충돌 시 **409**
  (충돌이 드문 특성상 비관적 락 대비 성능 유리하다 판단)
- Flyway **V1~V17**
- Docker Compose **4컨테이너** (MySQL · Redis · Backend · Caddy)
- Caddy 리버스 프록시로 HTTPS 운영
- SSAFY 관통 **우수상 (7팀 중 2위)**
- 실시간 공동 편집: **STOMP + 인메모리 SimpleBroker · 단일 인스턴스 구조**
- 인증: JWT + Refresh Token, **Kakao / Naver** 소셜 로그인 (OAuth 2.0)
- 스택: Java 17 · Spring Boot 3 · Spring Security · MyBatis · MySQL 8 ·
  Redis · Vue 3 · Docker Compose · AWS EC2 · JWT · Flyway
- Live: https://tripcrew.duckdns.org
- Code: https://github.com/tripcrew/tripcrew

### YORR (2026.07–08, SSAFY 공통 프로젝트, 6인 팀, PM/팀장)
- WebSocket 이벤트 스키마 **28종** 단독 정의
- 최고 동시접속 **80명**
- 누적 게임 참여 **635건** / 플레이 **487판**
- 만족도 설문 **n=17, 4점 이상 94.1%** (5점 58.8% / 4점 35.3%)
- 팀원 MR **21건** 통합
- 1차 배포 **2026.07.30** / 2차 배포 **2026.08.05**
- SSAFY 공통 프로젝트 **1위**
- 게임 라인업 **3종** (그중 2종이 yorr-arcade 출신)
- **12라운드** 종료 판정
- 소셜 로그인: **Google**
- 라운드 상태 저장소: **InMemory** (`InMemoryRoundStateStore`)
- WebSocket: **raw handler** (`GameWebSocketHandler`)
- 스택: Java · Spring Boot · JPA · WebSocket · WebRTC · MySQL ·
  Docker · AWS EC2 · Jira · GitLab
- Live: https://yorr.site
- Code: https://github.com/team-yorr/yorr

### 달리셔스 (2023.01–03, T-academy 기업 연계, 6인 팀, CB 모델 담당 & 팀 리딩)
- **6인 팀**
- **6팀 중 1위** (기업 연계 최종 프로젝트 우수상)
- 데이터 **약 5만 건**, **사내 제공** (크롤링 아님 — 명시할 것)
- 운영팀 수동 메뉴 선정 **30분 → 3분 (약 90% 단축)**
- 잠재고객 **2만 명** 규모 고객사 계약 성사 기여
- Cosine Similarity 기반 Content-Based 모델
  (CB · CF · ML · DL 결합 하이브리드로 고도화)
- 한 번의 주문 기록만으로 개인화 추천 → 콜드 스타트 해결
- 스택: Python · Pandas · Scikit-learn · PySpark · Cosine Similarity
- Code: https://github.com/jhyungit/Final_project
- 동아일보 보도: https://www.donga.com/news/It/article/all/20230503/119128322/1

### 무신사 향수 별점 예측 (T-academy ASAC 과정)
- 최종 분류 정확도 **84%**
- HTML 파싱으로 수집 불가한 리뷰 데이터 → "사용자 동작 시점에 비동기 로딩"
  가설 수립 → **브라우저 DevTools Network 탭으로 HTTP 요청 패턴 추적** →
  페이지 파라미터 포함 GET 호출 패턴 식별 → 코드로 재현·안정적 수집
- EDA로 별점 **1점·5점 양극화(클래스 불균형)** 발견
  → 3등급(1–2 / 3 / 4–5) 재분류 → **Random Forest**
- **네트워크 요청 패턴 분석은 이 프로젝트에만 해당**
- 스택: Python · Pandas · Scikit-learn · Random Forest · DevTools (Network)

### yorr-arcade (2026.07–08, 개인 프로젝트, 1인 개발)
- React · TypeScript · Three.js · Socket.IO · Vite
- 게임 **2종** 1인 개발 — 3D 렌더링과 실시간 이벤트 동기화 직접 구현
- 팀 서비스에 채택되어 최종 라인업 3종 중 2종 차지
- **팀 서비스로의 이식은 팀원 담당**

### IBK기업은행 (2023.07–08, IT금융개발부 IT글로벌개발팀 청년인턴)
- **4개 앱** 통합 슈퍼앱 프로토타입 (i-ONE Bank, Box POS 등) 기획·구현, Figma
- 개인·기업 고객 특성을 반영한 Flowchart 로직 설계 (금융홈·포스홈 분리)
- 기술 로직을 비기술 이해관계자용 고객 경험 시나리오로 재구성해 발표
- IT본부장 참석 최종 발표에서 **우수팀 · 우수인턴** 선정

### 그 외 프로젝트
- **Nyam Nyam** — 캡스톤디자인 1, 조장. MySQL DB 스키마 설계 · 리뷰 기능 구현 ·
  HTML/CSS 웹 페이지 구현
- **PySpark 마포구 카페 현황 분석** — 대용량 처리 · 시각화.
  https://github.com/jhyungit/PySpark-project
- **MLB 선수 연봉 예측** — **MLB Stats API** · Linear Regression.
  https://github.com/jhyungit/ML_baseball_project

### 교육 / 자격 / 수상
- SSAFY 15기 Java 전공반: 2026.01–2026.12, **1,725시간**, 11반 반장
- ASAC 빅데이터 분석가 과정 1기: 2022.09–2023.03, **920시간**, SK planet 주관
- 명지대학교 정보통신공학과: 2017.03–2022.02 졸업, **3.45 / 4.5**
- 호주: **2019.02–2020.01 (11개월)**. ILSC Sydney Intermediate → Advanced 수료,
  멜버른 현지 근무 (Waterfront Southgate, 2019.08–2019.12)
- 정보처리기사 **2024.12** (한국산업인력공단)
- SQLD **2025.12** (한국데이터산업진흥원)
- OPIc **IH** **2025.06** (ACTFL)
- **수상 4건**
  - SSAFY 공통 프로젝트 **1위** — 2026.08
  - SSAFY 관통 프로젝트 **우수상 (2위)** — 2026.06
  - IBK **우수팀 · 우수인턴** — 2023.08
  - ASAC 과정 **우수상 (1위)** — 2023.03

### 라이브 서비스
| 서비스 | URL | 비고 |
|---|---|---|
| YORR | https://yorr.site | AWS EC2 |
| TripCrew | https://tripcrew.duckdns.org | DuckDNS 무료 도메인 — 게시·면접 전 생존 확인 |

---

## 3. 기술 사실 — 혼동 잦음

| 항목 | 사실 | 흔한 오류 |
|---|---|---|
| YORR WebSocket | **raw handler** (`GameWebSocketHandler`) | STOMP로 착각 |
| TripCrew WebSocket | **STOMP** | — |
| YORR 라운드 상태 저장소 | **InMemory** (`InMemoryRoundStateStore`) | "Redis로 라운드 상태 관리" |
| TripCrew 실시간 협업 | **인메모리 SimpleBroker · 단일 인스턴스** | "Redis Pub/Sub" ← 실제 발생 |
| YORR 소셜 로그인 | **Google** | Kakao로 착각 |
| TripCrew 소셜 로그인 | **Kakao / Naver** | — |
| 네트워크 요청 패턴 분석 | **무신사만** | MLB·달리셔스에 전용 금지 |
| MLB 데이터 수집 | **MLB Stats API** | "크롤링" 표기 금지 |
| 달리셔스 데이터 | **사내 제공** | "크롤링" 오해 금지 |
| YORR 게임별 Redis 스토어 | 존재하나 **담당자 미확인** | 기재하지 않음 |

---

## 4. YORR 담당 경계 — 팀 프로젝트

> 이 절의 목적은 **팀 레포에 코드가 있다는 것과 내가 그것을 만들었다는 것을
> 구분**하는 데 있다. 산출물에 들어가는 문장은 아래 "담당 확정" 범위를 넘지 않는다.
>
> 분석 방법: git log 기반, 머지 커밋 제외, lock/build/dist/node_modules 제외
> 역할: PM/팀장 · 실시간 통신 설계 · 운영/장애 대응

### 담당 확정 — 커밋 근거 있음

**(1) WebSocket 통신 계약 설계 — 대표 소재**
- `GameWebSocketHandler.java` (최다 수정)
- `WsEnvelope.java`, `WsErrorCode.java`, `RoomSessionRegistry.java`,
  `WebSocketConfig.java`
- `ws/dto/` 하위 페이로드 클래스 (요청-응답 짝 구조)

설계 포인트:
- record + 제네릭 P — 페이로드 타입을 컴파일 타임에 보장, 봉투 구조는 단일화
- `@JsonInclude(NON_NULL)` — null 필드를 JSON에서 제외해 프론트 계약의
  optional과 일치
- `withMsgId()` — 요청 msgId를 응답에 되돌려 요청-응답 상관관계(correlation) 확립
- `withRoomId()` — 입장 전후 스코프 변화를 봉투 레벨에서 표현
- 불변 + 정적 팩토리 `of()` — 서버 시각 자동 주입
- 효과: 게임 3종 확장 시 규격 위에 얹기만 하면 됨

**(2) WebRTC 음성 시그널링**
- `VoiceIceService.java`, `VoiceIceController.java`
- `VoiceSignalPayload`, `VoiceSignaledPayload`, `VoicePeersPayload`
- `RoomSessionRegistryVoiceTest.java` (단위 테스트)
- 게임 상태는 WebSocket 서버 경유, 음성은 P2P로 분리.
  ICE 후보 교환만 서버가 중계
- CORS·에코 문제를 실사용 중 발견해 수정

**(3) 라운드 동기화 · 타이머**
- `RoundTimerService`, `RoundSynchronizationService`, `RoundState`,
  `RoundStateStore`(port), `InMemoryRoundStateStore`, `GameCompletionService`
- 12라운드 종료 판정 로직

**(4) 팀장으로서 통합·형상 관리**
- Git 협업 컨벤션 정립 (`CONTRIBUTING.md`), MR 템플릿 수립
- 팀원 MR develop 통합 **21건**
- v0.1 릴리스 머지 관리
- 잘못된 main 머지 revert 대응

**(5) 그 외**
- Google 소셜 로그인 (※ TripCrew는 Kakao/Naver. YORR는 Google)
- `RoomValidationService`, `RoomValidationController`, `RoomCreateService`
- QA 이슈: 세션 토큰 만료 시 대기실 연결 화면 멈춤 (우선순위 상위, 완료)
  → 세션↔playerId 매핑과 SESSION_EXPIRED 구분 처리로 해결
- 관전 화면이 조작보다 먼저 결과를 노출하던 문제
  → 화면 단위 수정이 아니라 shake/shaken 이벤트 계약을 신설해 해결.
    동일 유형의 순서 역전을 구조적으로 차단
- 클라이언트 신뢰 경계 분리 — 센서 값 전량 전송은 그 자체가 지연이 되므로
  동작 판정은 클라이언트에 두되, 상태·순서·점수 갱신은 서버 이벤트로만
  가능하도록 계약을 설계
- 사용자 피드백을 백로그화해 후속 릴리스에 반영
  (튜토리얼·툴팁, 센서 보정·버튼 조작 지원)

**(6) AI 개발 워크플로 · 팀 리딩**
- CLAUDE.md에 코딩 규칙을, CONTRIBUTING.md에 커밋·MR 컨벤션을 고정해
  6인이 같은 형태의 결과를 얻도록 표준화
- MCP로 Jira·Notion을 연동해 티켓 발급·스프린트 운영·요구사항 문서화 자동화
- 생성 결과는 실행계획과 커밋 단위로 확인한 뒤 반영
- Jira 이슈·일정·릴리스 관리

### 담당 아님 — 내 성과로 쓰지 말 것

| 소재 | 실제 담당 |
|---|---|
| Redis 스냅샷 세션 재접속 **구현** | 팀원 |
| 게임 모듈 추상화 (WebSocket 입력 + Redis 상태 분리) | 팀원 |
| Micrometer 커스텀 지표 | 팀원 (Infra) |
| CI/CD (Jenkinsfile, deploy/) | 팀원 (Infra) |
| Prometheus·Grafana 모니터링 구축 | 팀원 (Infra) |
| Expectimax 요트 AI | 팀원 (AI/Backend) |
| 게임 재접속 404 버그 | 팀원 |

### 반쪽만 사실인 것 — 정확히 구분할 것

- **재접속**: 프로토콜 설계(`SysReconnectPayload`/`SysReconnectedPayload` DTO)는
  내 것. 복구 로직 구현은 팀원.
  → "규격을 정의했고 구현은 팀원이 맡았다"까지만 기재
- **모니터링 도구 세팅 브랜치 머지**: 내가 머지했으나 구현은 팀원.
  머지는 통합이지 구현이 아님
- **yorr-arcade 게임 2종**: 개인 레포에서 1인 개발한 것은 내 것이고,
  팀 서비스로 채택된 것도 사실. 단 **팀 서비스로의 이식은 팀원 담당**

### 기재 규칙
- **코드 라인 수는 쓰지 않는다.** 담당 모듈 기준으로 서술한다
- 규격 설계와 통합을 맡는 것은 팀장의 정상적인 역할 분담이다

---

## 5. 표현 규칙

### 쓰지 않을 표현
- 형용사 자기평가: "성실한", "긍정적인", "열정적인", "Hard worker",
  "Fast learner", "Reliable teammate", "건강한 개발자"
- 자기평가 숙련도 척도 (별점 5점 등) — 검증 불가
- 학점을 성과로 제시 ("A0 성적 취득")
- 성과가 아닌 것을 배지로 ("3개월", "2개월")
- 직군 병기: "Backend / Fullstack", "Backend · Data-driven"
- 데이터/ML 이력을 **앞에** 배치 — "백엔드로 넘어온 데이터 사람"으로 읽힌다.
  백엔드 뒤에 두고, 서사는 About/Hero 마지막 한 줄로

### 쓸 표현
- 검증 가능한 수치 + 검증 방법 ("EXPLAIN으로 type ALL→ref 확인")
- 개선의 한계까지 ("26배 개선했고, OFFSET 10만 구간은 0.244초로 남는다")
- 담당 경계 명시 ("규격은 내가, 구현은 팀원")
- 의사결정 근거와 검토했으나 버린 대안
  ("충돌이 드문 특성상 비관적 락 대비 유리하다 판단")
- 이 선택이 틀리게 되는 조건

---

## 6. 미확인 — 확인 전 기재 금지

- SSAFY 공통 프로젝트 수상 정확한 명칭 및 분모
- YORR 게임별 Redis 스토어 담당자
- YORR WebSocket 세션 관리와 인증 연동 지점 상세
- IBK 슈퍼앱 "디자인 시스템 정의" 여부
  (`src/data/project.js`에 있으나 원본에 근거 없음 → 사용자 확인 필요)
- yorr-arcade 게임 2종의 정확한 명칭
- coturn TURN 서버 연동 담당 범위
  (`docs/portfolio.html`에는 기재돼 있으나 `yorr-contributions.md`에는 없음)
