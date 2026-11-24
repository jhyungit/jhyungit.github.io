// src/components/Diagram/YorrArchitecture.jsx
// 원본: docs/yorr-architecture.svg — 본인 담당 경로만 재작도한 도면.
// <img>가 아니라 인라인 SVG인 이유: 다크모드에서 .d-* 클래스를 재정의해야 한다.
import "./Diagram.css";

export default function YorrArchitecture() {
  return (
    <figure className="diagram">
      <div className="diagram-scroll">
        <svg
          className="dgm"
          viewBox="0 0 880 564"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="yorrArchTitle yorrArchDesc"
        >
          <title id="yorrArchTitle">YORR 실시간 통신 구조</title>
          <desc id="yorrArchDesc">
            게임 상태와 시그널링은 raw WebSocket으로 서버를 경유하고, 음성은 WebRTC P2P로
            클라이언트 간 직접 연결된다. P2P 직결이 실패하면 coturn이 TURN으로 중계한다.
          </desc>

          <defs>
            <marker id="yorrArF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="d-fill-flow" />
            </marker>
            <marker id="yorrArP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="d-fill-p2p" />
            </marker>
            <marker id="yorrArG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="d-fill-signal" />
            </marker>
          </defs>

          {/* 클라이언트 영역 */}
          <rect x="40" y="44" width="560" height="176" rx="12" fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="5 4" className="d-border" />

          {/* 음성: P2P 풀메시 */}
          <path d="M124,88 C124,26 516,26 516,88" fill="none" className="d-line-p2p" strokeWidth="2.2" markerStart="url(#yorrArP)" markerEnd="url(#yorrArP)" />
          <text className="t-strong d-fill-p2p" x="320" y="20" textAnchor="middle">WebRTC P2P · 음성</text>

          <rect x="80" y="88" width="88" height="86" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="94" y="100" width="60" height="46" rx="4" fill="#f1f5f9" className="d-sunken" />
          <text className="t-body d-text" x="124" y="166" textAnchor="middle" fill="#475569">폰 A</text>

          <rect x="276" y="88" width="88" height="86" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="290" y="100" width="60" height="46" rx="4" fill="#f1f5f9" className="d-sunken" />
          <text className="t-body d-text" x="320" y="166" textAnchor="middle" fill="#475569">폰 B</text>

          <rect x="472" y="88" width="88" height="86" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="486" y="100" width="60" height="46" rx="4" fill="#f1f5f9" className="d-sunken" />
          <text className="t-body d-text" x="516" y="166" textAnchor="middle" fill="#475569">폰 C</text>

          <path d="M168,124 L276,124" fill="none" className="d-line-p2p" strokeWidth="2.2" markerStart="url(#yorrArP)" markerEnd="url(#yorrArP)" />
          <path d="M364,124 L472,124" fill="none" className="d-line-p2p" strokeWidth="2.2" markerStart="url(#yorrArP)" markerEnd="url(#yorrArP)" />

          {/* 게임 상태·시그널링: 서버 경유 (양방향) */}
          <path d="M124,174 L124,320" fill="none" className="d-line-flow" strokeWidth="2" markerStart="url(#yorrArF)" markerEnd="url(#yorrArF)" />
          <path d="M320,174 L320,320" fill="none" className="d-line-flow" strokeWidth="2" markerStart="url(#yorrArF)" markerEnd="url(#yorrArF)" />
          <path d="M516,174 L516,320" fill="none" className="d-line-flow" strokeWidth="2" markerStart="url(#yorrArF)" markerEnd="url(#yorrArF)" />

          <rect x="196" y="238" width="248" height="44" rx="8" fill="#ffffff" className="d-surface" />
          <text className="t-strong d-fill-flow" x="320" y="258" textAnchor="middle">raw WebSocket</text>
          <text className="t-small d-muted" x="320" y="275" textAnchor="middle" fill="#94a3b8">게임 상태 · 시그널링</text>

          {/* 클라이언트 영역 하단 띠 — 그룹 라벨(좌)과 판정 위치(우).
              폰↔서버 화살표가 이 띠를 지나가므로 화살표보다 뒤에 그리고, 배경색 halo로 선을 가린다.
              SVG는 나중에 그린 것이 위에 오므로 이 위치를 화살표 앞으로 옮기면 halo가 무효가 된다 */}
          <text className="t-small d-muted d-halo" x="56" y="210" fill="#94a3b8">클라이언트 · 브라우저 (스마트폰)</text>
          <text className="t-small d-muted d-halo" x="584" y="210" textAnchor="end">동작 판정은 각 폰에서 처리, 결과만 전송</text>

          {/* 서버 */}
          <rect x="40" y="320" width="560" height="128" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <text className="t-strong d-strong" x="64" y="350" fill="#1e293b">Spring Boot · GameWebSocketHandler</text>
          <text className="t-mono d-text" x="64" y="376" fill="#475569">{"WsEnvelope<P>  ·  이벤트 스키마 28종"}</text>
          <text className="t-body d-text" x="64" y="400" fill="#475569">상태·순서·점수 갱신은 서버만 가능</text>
          <text className="t-small d-muted" x="64" y="428" fill="#94a3b8">음성은 게임 서버를 거치지 않고, 시그널링만 중계</text>

          {/* coturn — P2P 직결 실패 시 클라이언트 그룹 전체를 중계 */}
          <rect x="700" y="346" width="132" height="76" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <text className="t-strong d-strong" x="766" y="378" textAnchor="middle" fill="#1e293b">coturn</text>
          <text className="t-small d-muted" x="766" y="398" textAnchor="middle" fill="#94a3b8">TURN 서버</text>

          <path d="M766,346 C766,200 690,132 604,132" fill="none" className="d-line-signal" strokeWidth="1.3" strokeDasharray="4 4" markerEnd="url(#yorrArG)" />
          <text className="t-small d-muted" x="748" y="272" textAnchor="end" fill="#94a3b8">P2P 직결 실패 시 TURN 중계</text>

          {/* 범례 */}
          <line x1="64" y1="490" x2="104" y2="490" className="d-line-flow" strokeWidth="2" />
          <text className="t-body d-text" x="114" y="495" fill="#475569">게임 상태 — 서버 경유</text>

          <line x1="290" y1="490" x2="330" y2="490" className="d-line-p2p" strokeWidth="2.2" />
          <text className="t-body d-text" x="340" y="495" fill="#475569">음성 — P2P 직결</text>

          <line x1="490" y1="490" x2="530" y2="490" className="d-line-signal" strokeWidth="1.3" strokeDasharray="4 4" />
          <text className="t-body d-text" x="540" y="495" fill="#475569">TURN 중계 (직결 실패 시)</text>

          <text className="t-small d-muted" x="64" y="530">
            담당: WebSocket 통신 계약 설계(이벤트 스키마 28종) · WebRTC 풀메시 음성 채팅 BE·FE 전 구간
          </text>
        </svg>
      </div>
      <figcaption className="diagram-caption">
        YORR 실시간 통신 구조 — 본인 담당 경로만 표기. 인프라·모니터링 구성은 팀원 담당이므로 제외했다.
      </figcaption>
    </figure>
  );
}
