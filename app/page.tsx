import Image from "next/image";
import {
  Github,
  Twitch,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  FileText,
} from "lucide-react";
import { socials } from "@/data/data";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  twitch: <Twitch size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  youtube: <Youtube size={18} />,
};

export default function Home() {
  const allowedIcons = ["email", "github", "linkedin", "resume"];
  const filteredSocials = socials.filter((social) =>
    allowedIcons.includes(social.icon.toLowerCase())
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start py-16 px-8 bg-white dark:bg-black">
        {/* Header Section */}
        <div className="w-full mb-12">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-between gap-8 mb-6">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 dark:text-white">
                Ismael Loko
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl">
                I build modern, scalable web applications with a passion for
                clean design, performance, and user experience.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="mailto:lokoismael9@email.com"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors dark:text-white"
                >
                  <Mail size={18} />
                  <span className="text-sm font-medium">EMAIL</span>
                </a>
                {filteredSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors dark:text-white"
                  >
                    {iconMap[social.icon]}
                    <span className="text-sm font-medium">
                      {social.name.toUpperCase()}
                    </span>
                  </a>
                ))}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors dark:text-white"
                >
                  <FileText size={18} />
                  <span className="text-sm font-medium">RÉSUMÉ</span>
                </a>
              </div>
            </div>

            {/* Right Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src="/profile.JPG"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-dashed border-gray-300 dark:border-gray-700 mb-8" />

          {/* About Me Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer science student passionate about software development and
              emerging technologies, with a diploma in IT support and experience
              in technical support. Strong programming and technical
              troubleshooting skills. Curious, self-reliant, and
              solution-oriented, I regularly develop and share web projects on{" "}
              <a
                href="https://github.com/Lil-Code30"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                style={{ textDecoration: "underline wavy" }}
              >
                GitHub
              </a>
              and{" "}
              <a
                href="https://www.youtube.com/@licode30"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                style={{ textDecoration: "underline wavy" }}
              >
                YouTube
              </a>
              .
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
