// src/components/Diagram/YorrCardGraphic.jsx
// 카드 썸네일. YORR 스크린샷이 제공 자료에 없어 확정 수치만으로 구성한 그래픽이다.
// 실제 게임 화면 캡처가 준비되면 이 컴포넌트를 <img>로 교체하면 된다.
import "./Diagram.css";

export default function YorrCardGraphic() {
  return (
    <svg
      className="project-card-image project-card-graphic dgm"
      viewBox="0 0 380 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="yorrCardTitle"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="yorrCardTitle">
        YORR — 실시간 웹 파티게임. raw WebSocket 이벤트 스키마 28종, 최고 동시접속 80명.
      </title>

      <text className="c-title d-strong" x="28" y="52" fill="#1e293b">
        YORR
      </text>
      <text className="t-small d-muted" x="28" y="74" fill="#94a3b8">실시간 웹 파티게임 · SSAFY 공통 프로젝트 1위</text>

      <line x1="28" y1="90" x2="352" y2="90" stroke="#cbd5e1" strokeWidth="1" className="d-border" />

      <text className="t-mono" x="28" y="118" fill="#4f8cff">raw WebSocket</text>
      <text className="t-small d-text" x="28" y="136" fill="#475569">상태 · 순서 · 점수 갱신 권한을 서버가 단독 보유</text>

      <text className="t-mono" x="28" y="164" fill="#7c3aed">WebRTC P2P</text>
      <text className="t-small d-text" x="28" y="182" fill="#475569">음성은 서버를 경유하지 않는다</text>

      <text className="c-num d-strong" x="352" y="122" textAnchor="end" fill="#1e293b">
        28종
      </text>
      <text className="t-small d-muted" x="352" y="138" textAnchor="end" fill="#94a3b8">이벤트 스키마</text>

      <text className="c-num d-strong" x="352" y="168" textAnchor="end" fill="#1e293b">
        80명
      </text>
      <text className="t-small d-muted" x="352" y="184" textAnchor="end" fill="#94a3b8">최고 동시접속</text>
    </svg>
  );
}
