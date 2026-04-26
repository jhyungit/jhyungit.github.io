// src/data/footer.js
import gitIcon from "../assets/foot-icons/icon_git.svg";
import wantedIcon from "../assets/foot-icons/icon-wanted.svg";
import instaIcon from "../assets/foot-icons/icon-insta.svg";
import mailIcon from "../assets/foot-icons/icon-mail.svg";

export const footerStats = [
  { id: "award", label: "award", value: 2 },
  { id: "certificate", label: "certificate", value: 3 },
];

export const footerLinks = [
  { id: "home", label: "Home", href: "#home", kind: "anchor" },
  { id: "project", label: "Projects", href: "#project", kind: "anchor" },
  { id: "resume", label: "Resume", kind: "resume" },
  { id: "github", label: "GitHub", href: "https://github.com/jhyungit", kind: "external" },
];

export const footerContacts = [
  { id: "github", label: "GitHub", icon: gitIcon, href: "https://github.com/jhyungit" },
  {
    id: "wanted",
    label: "Wanted",
    icon: wantedIcon,
    href: "https://social.wanted.co.kr/community/profile/fUtHNjKDqFVeNmuVdn2xJD?utm_source=wanted&utm_medium=share",
  },
  { id: "instagram", label: "Instagram", icon: instaIcon, href: "https://www.instagram.com/j_hyungram/" },
  { id: "email", label: "Email", icon: mailIcon, href: "mailto:kyn05165@naver.com" },
];