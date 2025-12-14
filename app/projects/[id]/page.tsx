import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink, Github, ArrowLeft, Home } from "lucide-react";
import { projects } from "@/data/projectsData";
import { icons } from "@/data/icons";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Ismael Loko",
      description: "The project you're looking for could not be found.",
    };
  }

  return {
    title: `${project.title} | Ismael Loko`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      url: `https://ismael-loko.com/projects/${project.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
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
        <div className="w-full mb-8 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors"
            title="Go to Home"
          >
            <Home size={20} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors"
            title="Back to All Projects"
          >
            <ArrowLeft size={20} />
          </Link>
        </div>

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
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 dark:bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 dark:hover:bg-amber-700 transition-colors"
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
          <div className="relative w-full h-48 md:h-96">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
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
            {project.stacks.map((stack, idx) => {
              const iconSvg =
                icons[
                  stack.name
                    .toLowerCase()
                    .replace(/[.\s/]/g, "") as keyof typeof icons
                ];

              return (
                <a
                  key={idx}
                  href={stack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 rounded-md hover:bg-amber-200 dark:hover:bg-amber-900/30 transition-colors"
                  title={`Learn more about ${stack.name}`}
                >
                  {iconSvg && (
                    <div
                      className="w-6 h-6 flex-shrink-0"
                      dangerouslySetInnerHTML={{
                        __html: iconSvg.replace(
                          /viewBox="0 0 24 24"/,
                          `viewBox="0 0 24 24" style="fill: ${stack.color}"`
                        ),
                      }}
                    />
                  )}
                  <span className="text-sm font-medium">{stack.name}</span>
                </a>
              );
            })}
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
                <span className="mt-1 inline-block w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <ImageGallery images={project.images} projectTitle={project.title} />
        )}

        <Footer />
      </main>
    </div>
  );
}
