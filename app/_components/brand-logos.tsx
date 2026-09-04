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

function XLogo({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.9 2H22l-6.76 7.72L23.2 22h-6.24l-4.9-7.5L5.5 22H2.4l7.23-8.26L1.8 2H8.2l4.43 6.96L18.9 2Zm-1.1 18h1.73L7.25 3.9H5.4L17.8 20Z" />
    </svg>
  );
}

export const brandLogos = {
  github: GitHubLogo,
  x: XLogo,
};
