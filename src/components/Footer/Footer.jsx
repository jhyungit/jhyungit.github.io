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
            <p className="footer-insite-desc">Backend Developer</p>
          </div>

          {/* Right */}
          <div className="footer-col footer-right">
            <h4 className="footer-heading">Social</h4>
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
                  <img className="footer-icon-img" src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-row">
            <p className="footer-copy">© 2026 Jeonghyun Lee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
