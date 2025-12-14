import React from "react";
import { socials } from "@/data/data";
import { Github, Twitch, Linkedin, Twitter, Youtube } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  twitch: <Twitch size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  youtube: <Youtube size={18} />,
};

export default function Footer() {
  const allowedIcons = ["email", "github", "linkedin", "twitter", "resume"];
  const filteredSocials = socials.filter((social) =>
    allowedIcons.includes(social.icon.toLowerCase())
  );
  return (
    <>
      <div className="w-full mt-auto pt-6 border-t border-gray-300 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between py-3">
          <p className="text-md mb-2 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}, Ismael Loko. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="mailto:lokoismael9@email.com"
              className="text-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              lokoismael9@email.com
            </a>
            <div className="flex gap-3">
              {filteredSocials.map((social) => (
                <a
                  key={`footer-${social.name}`}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
