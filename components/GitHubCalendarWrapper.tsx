"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-48 bg-gray-100 dark:bg-gray-900 rounded" />
    ),
  }
);

export default function GitHubCalendarWrapper({
  username,
}: {
  username: string;
}) {
  return (
    <div className="w-full mb-8 md:mb-12 overflow-x-auto -mx-8 md:mx-0 px-8 md:px-0">
      <div className="inline-block min-w-full">
        <GitHubCalendar username={username} />
      </div>
    </div>
  );
}
