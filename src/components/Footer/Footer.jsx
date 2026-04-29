// src/components/Footer/Footer.jsx
import "./Footer.css";
import { footerContacts } from "../../data/footer";

export default function Footer() {
  const resolveContactTarget = (href) => {
    if (href.startsWith("http")) return { target: "_blank", rel: "noreferrer" };
    return {};
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Left */}
          <div className="footer-col footer-left">
            <h4 className="footer-heading">j_hyun's</h4>
            <p className="footer-insite-desc">Python Automation Developer</p>
          </div>

          {/* Right */}
          <div className="footer-col footer-right">
            <h4 className="footer-heading">Social</h4>
            <p className="footer-subtext">언제나 새로운 제안에 열려있습니다.</p>

            <div className="footer-icons">
              {footerContacts.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="footer-icon"
                  aria-label={item.label}
                  title={item.label}
                  {...resolveContactTarget(item.href)}
                >
                  {/* SVG 경로 */}
                  <img className="footer-icon-img" src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <p className="footer-copy">© 2026 Jeonghyun Lee. All rights reserved.</p>
          <p className="footer-credit">Built with React · Vite</p>
        </div>
      </div>
    </footer>
  );
}