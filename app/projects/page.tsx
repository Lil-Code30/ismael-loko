import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
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

        {/* Header */}
        <div className="w-full mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            All Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            A collection of projects I&apos;ve built and contributed to over the
            years.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
