"use client";

import { FiDownload } from "react-icons/fi";
import { useLatestRelease } from "@/hooks/useLatestRelease";
import Button from "./Button";

export default function DynamicDownload({ project, isButton = false, className }) {
  // Extract repo name if applicable (e.g., symonxdd/avd-launcher)
  const repoMatch = project.repoUrl?.match(/github\.com\/([^/]+\/[^/]+)/);
  const repoName = repoMatch ? repoMatch[1] : null;

  const { downloadUrl } = useLatestRelease(repoName, project.downloadUrl);

  const url = downloadUrl || project.downloadUrl;

  if (isButton) {
    return (
      <Button href={url}>
        <FiDownload size={16} /> {project.downloadLabel}
      </Button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${project.title} ${project.downloadLabel}`}
    >
      <FiDownload size={16} />
      <span>{project.downloadLabel}</span>
    </a>
  );
}
