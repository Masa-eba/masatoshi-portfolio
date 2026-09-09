type BrandIconProps = {
  className?: string;
};

function GitHubLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.37-1.33-1.73-1.33-1.73-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.54.12-3.2 0 0 1.01-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.65 1.66.24 2.9.12 3.2.77.84 1.23 1.9 1.23 3.2 0 4.6-2.81 5.6-5.5 5.9.43.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.01 2.5 2.5 0 0 0 0-5.01ZM3 9.75h3.96V21H3V9.75Zm6.2 0h3.8v1.54h.05c.53-.95 1.82-1.95 3.74-1.95 4 0 4.74 2.63 4.74 6.05V21h-3.96v-4.97c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21H9.2V9.75Z" />
    </svg>
  );
}

export const brandLogos = {
  github: GitHubLogo,
  linkedin: LinkedInLogo,
};
