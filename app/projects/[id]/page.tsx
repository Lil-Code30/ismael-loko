import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projectsData";
import Footer from "@/components/Footer";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start py-16 px-8 bg-white dark:bg-black">
          <div className="text-center w-full">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">
              Project not found
            </h1>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start py-16 px-8 bg-white dark:bg-black">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Project Header */}
        <div className="w-full mb-8">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 dark:bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 dark:hover:bg-pink-700 transition-colors"
              >
                <ExternalLink size={18} />
                Visit Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <Github size={18} />
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full mb-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="relative w-full h-96 flex items-center justify-center">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.stacks.map((stack, idx) => (
              <a
                key={idx}
                href={stack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title={`Learn more about ${stack.name}`}
              >
                <span className="text-sm font-medium">{stack.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="mt-1 inline-block w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </main>
    </div>
  );
}
