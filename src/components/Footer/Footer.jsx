// src/components/Footer/Footer.jsx
import "./Footer.css";
import { footerContacts, footerLinks, footerStats } from "../../data/footer";
import resumePdf from "../../data/이정현_CV.pdf";

export default function Footer() {
  const resolveLink = (link) => {
    if (link.kind === "resume") {
      return { href: resumePdf, target: "_blank", rel: "noreferrer" };
    }
    if (link.kind === "external") {
      return { href: link.href, target: "_blank", rel: "noreferrer" };
    }
    return { href: link.href };
  };

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
            <h4 className="footer-heading">Jeonghyun Lee</h4>
            <p className="footer-insite-desc">Python Automation Developer</p>
            <div className="footer-mini-grid">
              {footerStats.map((item) => (
                <div key={item.id} className="footer-mini-item">
                  <span className="footer-mini-label">{item.label}</span>
                  <span className="footer-mini-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center */}
          <div className="footer-col footer-center">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => {
                const props = resolveLink(link);
                return (
                  <li key={link.id}>
                    <a className="footer-link" {...props}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right */}
          <div className="footer-col footer-right">
            <h4 className="footer-heading">Contact</h4>
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