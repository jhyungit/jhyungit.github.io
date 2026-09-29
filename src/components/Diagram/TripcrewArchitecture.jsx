// src/components/Diagram/TripcrewArchitecture.jsx
// 원본: TripCrew 레포 docs/tripcrew-architecture-facts.md (PROFILE.md §2 TripCrew 「운영 구성」).
// 담당은 git blame 기준. 박스 모양으로 구분한다 — 본인: 파란 테두리, 팀원: 회색 면, 공동: 기본 박스.
// 색은 리터럴 없이 .d-box* / .d-ink* 클래스(토큰 파생)로만 칠한다.
// 담당 박스 안 글자는 d-ink(가장 진한 글자). 팀원 회색 면 위에서 d-muted·d-ink-2는 AA 미달(4.17~4.34:1)
import "./Diagram.css";

// 서버 안쪽 담당 행
const serverRows = [
  { y: 228, text: "REST API · MyBatis", owner: "shared" },
  { y: 264, text: "STOMP 공동 편집 · SimpleBroker", owner: "mine" },
  { y: 300, text: "Security · JWT · OAuth2", owner: "mine" },
  { y: 336, text: "AI 챗봇 · 경로 탐색", owner: "team" },
];

const externals = [
  { y: 224, title: "소셜 로그인", sub: "Kakao · Naver", owner: "mine" },
  { y: 282, title: "AI 챗봇", sub: "Gemini", owner: "team" },
  { y: 340, title: "경로 탐색", sub: "Naver Directions", owner: "team" },
];

const boxClass = { mine: "d-box-mine", team: "d-box-team", shared: "d-box" };

export default function TripcrewArchitecture() {
  return (
    <figure className="diagram">
      <div className="diagram-scroll">
        <svg
          className="dgm"
          viewBox="0 0 880 600"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="tcArchTitle tcArchDesc"
        >
          <title id="tcArchTitle">TripCrew 운영 구성</title>
          <desc id="tcArchDesc">
            브라우저의 Vue 3 SPA가 HTTPS로 Caddy에 접속한다. AWS EC2의 Docker Compose 안에서 Caddy는
            Vue 정적 파일을 서빙하고 /api, /ws, /oauth2 요청을 Spring Boot로 넘긴다. Spring Boot는 MySQL과
            Redis, 외부 API를 호출한다. 본인 담당: Caddy, STOMP 공동 편집과 SimpleBroker, Security·JWT·OAuth2,
            Redis의 OAuth 일회용 코드, Kakao·Naver 소셜 로그인. 팀원 담당: AI 챗봇과 경로 탐색, Redis의 관광지
            랭킹 ZSet, Gemini, Naver Directions. 공동: REST API·MyBatis, MySQL과 Flyway.
          </desc>

          <defs>
            <marker id="tcArF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="d-fill-flow" />
            </marker>
          </defs>

          {/* 브라우저 */}
          <rect x="20" y="80" width="120" height="60" rx="10" className="d-box" />
          <text className="t-strong d-ink" x="80" y="106" textAnchor="middle">브라우저</text>
          <text className="t-small d-muted" x="80" y="126" textAnchor="middle">Vue 3 SPA</text>

          <path d="M140,110 L200,110" fill="none" className="d-line-flow" strokeWidth="2" markerEnd="url(#tcArF)" />
          <text className="t-small d-muted" x="156" y="102" textAnchor="middle">HTTPS</text>

          {/* AWS EC2 · Docker Compose */}
          <rect x="180" y="40" width="430" height="500" rx="12" className="d-group" />
          <text className="t-small d-muted" x="196" y="62">AWS EC2 · Docker Compose</text>

          <rect x="200" y="80" width="380" height="60" rx="10" className="d-box-mine" />
          <text className="t-strong d-ink" x="220" y="106">Caddy</text>
          <text className="t-small d-muted" x="220" y="126">HTTPS · Vue 정적 서빙</text>

          <path d="M390,140 L390,190" fill="none" className="d-line-flow" strokeWidth="2" markerEnd="url(#tcArF)" />
          <text className="t-mono d-ink-2" x="402" y="170">/api · /ws · /oauth2</text>

          {/* Spring Boot */}
          <rect x="200" y="190" width="380" height="190" rx="12" className="d-box" />
          <text className="t-strong d-ink" x="220" y="214">Spring Boot 3 · Java 17</text>
          {serverRows.map((r) => (
            <g key={r.text}>
              <rect x="216" y={r.y} width="348" height="30" rx="6" className={boxClass[r.owner]} />
              <text className="t-body d-ink" x="230" y={r.y + 20}>{r.text}</text>
            </g>
          ))}

          <path d="M290,380 L290,410" fill="none" className="d-line-flow" strokeWidth="2" markerEnd="url(#tcArF)" />
          <path d="M490,380 L490,410" fill="none" className="d-line-flow" strokeWidth="2" markerEnd="url(#tcArF)" />

          {/* MySQL — 공동 */}
          <rect x="200" y="410" width="180" height="110" rx="10" className="d-box" />
          <text className="t-strong d-ink" x="216" y="436">MySQL 8.4</text>
          <text className="t-mono d-ink-2" x="216" y="458">Flyway V1–V17</text>

          {/* Redis — 사용처별 담당 */}
          <rect x="400" y="410" width="180" height="110" rx="10" className="d-box" />
          <text className="t-strong d-ink" x="416" y="436">Redis 7</text>
          <rect x="412" y="448" width="156" height="28" rx="6" className="d-box-mine" />
          <text className="t-small d-ink" x="424" y="466">OAuth 일회용 코드</text>
          <rect x="412" y="482" width="156" height="28" rx="6" className="d-box-team" />
          <text className="t-small d-ink" x="424" y="500">관광지 랭킹 ZSet</text>

          {/* 외부 API */}
          <path d="M580,300 L638,300" fill="none" className="d-line-flow" strokeWidth="2" markerEnd="url(#tcArF)" />
          <rect x="640" y="190" width="220" height="216" rx="12" className="d-group" />
          <text className="t-small d-muted" x="656" y="212">외부 API</text>
          {externals.map((e) => (
            <g key={e.title}>
              <rect x="656" y={e.y} width="188" height="50" rx="8" className={boxClass[e.owner]} />
              <text className="t-body d-ink" x="672" y={e.y + 21}>{e.title}</text>
              <text className="t-small d-ink" x="672" y={e.y + 39}>{e.sub}</text>
            </g>
          ))}

          {/* 범례 */}
          <rect x="200" y="562" width="28" height="16" rx="4" className="d-box-mine" />
          <text className="t-body d-ink-2" x="238" y="575">본인 담당</text>
          <rect x="360" y="562" width="28" height="16" rx="4" className="d-box-team" />
          <text className="t-body d-ink-2" x="398" y="575">팀원 담당</text>
          <rect x="520" y="562" width="28" height="16" rx="4" className="d-box" />
          <text className="t-body d-ink-2" x="558" y="575">공동</text>
        </svg>
      </div>
      <figcaption className="diagram-caption">
        TripCrew 운영 구성 · 색으로 담당 구분. CI/CD 없이 docker compose로 수동 배포.
      </figcaption>
    </figure>
  );
}
