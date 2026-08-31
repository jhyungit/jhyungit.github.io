// src/sections/About/AboutSection.jsx
import '../../App.css';
import './AboutSection.css';
import mainPhoto from '../../assets/about-photo/about-main.webp';
import baseballPhoto from '../../assets/about-photo/about-baseball.jpg';
import { useInView } from '../../hooks/useInView';

function AboutSection() {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className={`section about fade-up${isVisible ? ' is-visible' : ''}`} id="about">
      {/* 섹션 맨 위 중앙 타이틀 */}
      <div className="about-title-block about-title-block-top">
        <h2 className="title">About Me</h2>
        <div className="title-underline" />
      </div>
      
      <div className="about-inner">
        {/* 왼쪽: 사진 영역 (웹 기준) */}
        <div className="about-left">
          {/* 데코 원들 */}
          <div className="about-circle about-circle--top" />
          <div className="about-circle about-circle--bottom" />

          {/* 사진 영역 */}
          <div className="about-photos-wrap">
            <div className="about-photo-large-wrapper">
              <img src={mainPhoto} className="about-photo-large" alt="이정현 프로필 사진" />
            </div>

            <div className="about-photo-small-wrapper">
              <img
                src={baseballPhoto}
                className="about-photo-small"
                alt="사회인 야구 유니폼을 입고 트로피를 든 사진"
              />
              <div className="about-photo-small-meta">
                <span className="about-photo-small-tag">사회인 야구 2021~</span>
                <p className="about-photo-small-caption">
                  팀업 캠퍼스 일요 루키 리그 우승 · MVP
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 오른쪽: 텍스트 영역 */}
        <div className="about-right">
          <h3 className="about-heading">
            저는 문제가 막히면
            <br />
            실행계획까지 파고듭니다.
          </h3>
          
          <p className="about-identity">
            Spring Boot 기반 API 서버를 설계하고, 쿼리·인덱스로 응답 속도를 개선하는 백엔드 개발자입니다.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">4</span>
              <span className="about-stat-label">Awards</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-value">3</span>
              <span className="about-stat-label">Certs</span>
            </div>
          </div>

          <div className="about-divider" />

          <p className="about-text">
            관리자 회원 조회 API를 서버 사이드 페이징과 복합 인덱스로 개선해
            30만 건 기준 응답을 0.473초에서 0.018초로 단축했습니다.
            EXPLAIN으로 type이 ALL에서 ref로 바뀌고 filesort가 사라진 것을 확인했고,
            개선 이후 남은 OFFSET 구간의 저하까지 실측해 다음 해법을 수치로 확인했습니다.
          </p>

          <p className="about-text">
            6인 팀 PM/팀장으로 실시간 통신 규격을 단독 설계해
            게임 3종이 같은 계약 위에서 동작하도록 만들고,
            최고 동시접속 80명 트래픽 아래에서 2회 배포·운영했습니다.
          </p>

          <p className="about-text">
            Python 기반 데이터 분석에서 출발해 백엔드로 왔습니다.
          </p>

          <p className="about-text">
            2021년부터 사회인 야구를 이어오고 있습니다.
            팀업 캠퍼스 일요 루키 리그에서 우승했고 MVP로 선정됐습니다.
          </p>
          
           {/* ✅ KEYWORDS 추가 */}
          <div className="about-keywords">
            <h4 className="about-keywords-title">KEYWORDS</h4>

            <div className="about-keywords-list">
              <div className="about-keyword">
                <span className="about-keyword-tag">Stability-first</span>
                <p className="about-keyword-desc">SSAFY 15기 반장으로 팀 일정 및 소통 주도</p>
              </div>

              <div className="about-keyword">
                <span className="about-keyword-tag">Ownership</span>
                <p className="about-keyword-desc">IBK 인턴 과제 팀장 · 우수팀 &amp; 우수인턴 수상</p>
              </div>

              <div className="about-keyword">
                <span className="about-keyword-tag">Teamwork</span>
                <p className="about-keyword-desc">달리셔스 기업 연계 프로젝트 우수상 (6팀 중 1위)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
