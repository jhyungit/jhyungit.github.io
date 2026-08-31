// src/sections/About/AboutSection.jsx
import { Fragment } from 'react';
import '../../App.css';
import './AboutSection.css';
import { useInView } from '../../hooks/useInView';
import {
  aboutTitle,
  aboutPhotos,
  aboutHeadingLines,
  aboutIdentity,
  aboutStats,
  aboutTexts,
  aboutKeywordsTitle,
  aboutKeywords,
} from '../../data/about';

function AboutSection() {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className={`section about fade-up${isVisible ? ' is-visible' : ''}`} id="about">
      {/* 섹션 맨 위 중앙 타이틀 */}
      <div className="about-title-block about-title-block-top">
        <h2 className="title">{aboutTitle}</h2>
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
              <img src={aboutPhotos.main.imageUrl} className="about-photo-large" alt={aboutPhotos.main.imageAlt} />
            </div>

            <div className="about-photo-small-wrapper">
              <img
                src={aboutPhotos.baseball.imageUrl}
                className="about-photo-small"
                alt={aboutPhotos.baseball.imageAlt}
              />
              <div className="about-photo-small-meta">
                <span className="about-photo-small-tag">{aboutPhotos.baseball.tag}</span>
                <p className="about-photo-small-caption">
                  {aboutPhotos.baseball.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 텍스트 영역 */}
        <div className="about-right">
          <h3 className="about-heading">
            {aboutHeadingLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h3>

          <p className="about-identity">
            {aboutIdentity}
          </p>

          <div className="about-stats">
            {aboutStats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="about-stat-divider" />}
                <div className="about-stat">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="about-divider" />

          {aboutTexts.map((text) => (
            <p className="about-text" key={text}>
              {text}
            </p>
          ))}

           {/* ✅ KEYWORDS 추가 */}
          <div className="about-keywords">
            <h4 className="about-keywords-title">{aboutKeywordsTitle}</h4>

            <div className="about-keywords-list">
              {aboutKeywords.map((keyword) => (
                <div className="about-keyword" key={keyword.tag}>
                  <span className="about-keyword-tag">{keyword.tag}</span>
                  <p className="about-keyword-desc">{keyword.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
