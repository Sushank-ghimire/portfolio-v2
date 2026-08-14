import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sushank-ghimire",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sushank-ghimire",
    icon: FaLinkedin,
  },
  {
    label: "Mail",
    href: "mailto:contact@ghimiresushank.com.np",
    icon: FiMail,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/sushank.ghimire.np",
    icon: FaFacebook,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5 sm:pt-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            aria-label={social.label}
            className="
              text-muted
              transition
              duration-200
              hover:-translate-y-0.5
            "
          >
            <Icon className="h-5 w-5 hover:text-accent" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
