// src/sections/About/AboutSection.jsx
import '../../App.css';
import './AboutSection.css';
import mainPhoto from '../../assets/about-photo/about-main.jpg';
import baseballPhoto from '../../assets/about-photo/about-baseball.jpg';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

function AboutSection() {
  const [ref, isVisible] = useInView();
  const awards = useCountUp(4, { duration: 700, start: isVisible });
  const certs  = useCountUp(3, { duration: 900, start: isVisible });
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
                alt="사회인 야구 활동 사진"
              />
              <div className="about-photo-small-meta">
                <span className="about-photo-small-tag">Teamwork & Fitness</span>
                <p className="about-photo-small-caption">
                  꾸준한 체력 관리와 팀워크 경험
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 오른쪽: 텍스트 영역 */}
        <div className="about-right">
          <h3 className="about-heading">
            저는 긍정적이고 체력을 겸비한
            <br />
            개발자입니다.
          </h3>
          
          <p className="about-identity">
            Spring Boot 기반 API 서버를 설계하고, 쿼리·인덱스로 응답 속도를 개선하는 백엔드 개발자입니다.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">{awards}</span>
              <span className="about-stat-label">Awards</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-value">{certs}</span>
              <span className="about-stat-label">Certs</span>
            </div>
          </div>

          <div className="about-divider" />

          <p className="about-text">
            관리자 회원 조회 API를 서버 사이드 페이징과 복합 인덱스로 개선해
            30만 건 기준 응답을 0.473초에서 0.018초로 단축했고,
            개선 이후 남은 OFFSET 구간의 저하까지 실측해 다음 해법을 수치로 확인했습니다.
          </p>

          <p className="about-text">
            6인 팀 PM/팀장으로 실시간 통신 규격을 단독 설계해
            게임 3종이 같은 계약 위에서 동작하도록 만들고,
            최고 동시접속 80명 트래픽 아래에서 2회 배포·운영했습니다.
          </p>

          <p className="about-text">
            사회인 야구를 통해 체력과 팀워크를 꾸준히 관리하며,
            책임감 있는 역할 수행으로 MVP로 선정되었습니다.
          </p>

          <p className="about-text">
            Python 기반 데이터 분석에서 출발해 백엔드로 왔습니다.
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
                <p className="about-keyword-desc">달리셔스 기업 프로젝트 우수상 · 야구팀 MVP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
