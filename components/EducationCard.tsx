import { ExternalLink } from "lucide-react";
import { IEducation } from "@/types/types";

interface EducationCardProps {
  education: IEducation;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {education.schoolLink ? (
              <a
                href={education.schoolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                {education.school}
                <ExternalLink size={16} />
              </a>
            ) : (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {education.school}
              </h3>
            )}
          </div>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
            {education.degree}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {education.location}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {education.period}
          </p>
        </div>
      </div>

      {/* Description */}
      {education.description && (
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 leading-relaxed">
          {education.description}
        </p>
      )}
    </div>
  );
}
