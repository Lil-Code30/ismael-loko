import { ExternalLink } from "lucide-react";
import { IWorkExperience } from "@/types/types";

interface WorkExperienceCardProps {
  experience: IWorkExperience;
}

export default function WorkExperienceCard({
  experience,
}: WorkExperienceCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {experience.companyLink ? (
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                {experience.company}
                <ExternalLink size={16} />
              </a>
            ) : (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.company}
              </h3>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-amber-500 text-sm font-medium">
              {experience.position}
            </p>
            <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded">
              {experience.type}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {experience.period}
          </p>
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2 mt-4 mb-4">
        {experience.responsibilities.map((responsibility, idx) => (
          <li
            key={idx}
            className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2"
          >
            <span className="text-amber-500 mt-1">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
