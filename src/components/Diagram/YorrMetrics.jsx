// src/components/Diagram/YorrMetrics.jsx
// 원본: docs/yorr-metrics.svg — 운영 결과 실측치.
// 수치는 PROFILE.md §2 확정값이다. 반올림·추정 금지.
import "./Diagram.css";

export default function YorrMetrics() {
  return (
    <figure className="diagram">
      <div className="diagram-scroll">
        <svg
          className="dgm"
          viewBox="0 0 880 232"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="yorrMetricsTitle"
        >
          <title id="yorrMetricsTitle">
            YORR 운영 결과 — 최고 동시접속 80명, 누적 참여 635건, 누적 플레이 487판,
            만족도 4점 이상 94.1%
          </title>

          <rect x="20" y="16" width="196" height="126" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="20" y="16" width="196" height="4" rx="2" fill="#4f8cff" />
          <text className="m-num d-strong" x="118" y="80" textAnchor="middle" fill="#1e293b">
            80<tspan className="m-unit">명</tspan>
          </text>
          <text className="m-cap d-muted" x="118" y="106" textAnchor="middle" fill="#94a3b8">최고 동시접속</text>
          <text className="m-foot d-muted" x="118" y="126" textAnchor="middle" fill="#94a3b8">실사용자 트래픽</text>

          <rect x="236" y="16" width="196" height="126" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="236" y="16" width="196" height="4" rx="2" fill="#4f8cff" />
          <text className="m-num d-strong" x="334" y="80" textAnchor="middle" fill="#1e293b">
            635<tspan className="m-unit">건</tspan>
          </text>
          <text className="m-cap d-muted" x="334" y="106" textAnchor="middle" fill="#94a3b8">누적 게임 참여</text>
          <text className="m-foot d-muted" x="334" y="126" textAnchor="middle" fill="#94a3b8">2026.07.30 – 08 운영</text>

          <rect x="452" y="16" width="196" height="126" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="452" y="16" width="196" height="4" rx="2" fill="#4f8cff" />
          <text className="m-num d-strong" x="550" y="80" textAnchor="middle" fill="#1e293b">
            487<tspan className="m-unit">판</tspan>
          </text>
          <text className="m-cap d-muted" x="550" y="106" textAnchor="middle" fill="#94a3b8">누적 플레이</text>
          <text className="m-foot d-muted" x="550" y="126" textAnchor="middle" fill="#94a3b8">게임 3종 합산</text>

          <rect x="668" y="16" width="196" height="126" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="d-surface d-border" />
          <rect x="668" y="16" width="196" height="4" rx="2" fill="#7c3aed" />
          <text className="m-num d-strong" x="766" y="80" textAnchor="middle" fill="#1e293b">
            94.1<tspan className="m-unit">%</tspan>
          </text>
          <text className="m-cap d-muted" x="766" y="106" textAnchor="middle" fill="#94a3b8">만족도 4점 이상</text>
          <text className="m-foot d-muted" x="766" y="126" textAnchor="middle" fill="#94a3b8">설문 n=17 · 5점 58.8%</text>

          <text className="m-foot d-muted" x="20" y="176" fill="#94a3b8">
            배포 2회 — 1차 2026.07.30 · 2차 2026.08.05. 2차 배포에 1차 사용자 피드백(튜토리얼·툴팁, 센서 보정, 버튼 조작 지원)을 반영했다.
          </text>
          <text className="m-foot d-muted" x="20" y="198" fill="#94a3b8">
            SSAFY 공통 프로젝트 우수상 · 반 1등 · 6인 팀 PM/팀장 · yorr.site
          </text>
        </svg>
      </div>
    </figure>
  );
}
