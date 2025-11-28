// src/sections/About/AboutSection.jsx
import '../../App.css';
import './AboutSection.css';
// 이미지 경로
import mainPhoto from '../../assets/about-photo/about-main.jpg';
import baseballPhoto from '../../assets/about-photo/about-baseball.jpg';

function AboutSection() {
  return (
    <section className="about" id="about">
      {/* 🔹 섹션 맨 위 중앙 타이틀 */}
      <div className="about-title-block about-title-block-top">
        <h2 className="about-title">About Me</h2>
        <div className="about-title-underline" />
      </div>
      
      <div className="about-inner">
        {/* 왼쪽: 사진 영역 (웹 기준) */}
        <div className="about-left">
          {/* 데코 원들 - 사진 바깥에! */}
          <div className="about-circle about-circle--top" />
          <div className="about-circle about-circle--bottom" />

          {/* 큰 사진 원 */}
          <div className="about-photo-large-wrapper">
            <img src={mainPhoto} className="about-photo-large" />
          </div>

          {/* 작은 사진 */}
          <div className="about-photo-small-wrapper">
            <img src={baseballPhoto} className="about-photo-small" />
          </div>
        </div>
        
        {/* 오른쪽: 텍스트 영역 */}
        <div className="about-right">
          <h3 className="about-heading">
            저는 긍정적이고 체력을 겸비한
            <br />
            개발자입니다.
          </h3>

          <div className="about-divider" />

          <p className="about-text">
            데이터 수집 · 전처리 · 모델링 역량으로
            <br/>
            팀의 안정적 운영에 기여합니다.
          </p>

          <p className="about-text">
            사회인 야구를 통해 꾸준한 체력 관리와
            <br/>
            팀워크 역량을 실천하며 MVP로 선정되었습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
