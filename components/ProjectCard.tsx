import Image from "next/image";
import Link from "next/link";
import { IProjects } from "@/types/types";

interface ProjectCardProps {
  project: IProjects;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-amber-300 dark:border-amber-600 overflow-hidden">
      {/* Project Image */}
      <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-800">
        <div className="relative w-full h-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="mb-4">
          <Link href={`/projects/${project.id}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer">
              {project.title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Stacks */}
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack, idx) => (
            <a
              key={idx}
              href={stack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-xs font-medium rounded hover:bg-amber-200 dark:hover:bg-amber-900/30 transition-colors"
              title={`Visit ${stack.name}`}
            >
              {stack.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
