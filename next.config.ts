import type { NextConfig } from "next";

function remoteImagePatterns() {
  const assetBaseUrl = process.env.NEXT_PUBLIC_ASSET_BASE_URL;

  if (!assetBaseUrl) {
    throw new Error("NEXT_PUBLIC_ASSET_BASE_URL is required");
  }

  let url: URL;

  try {
    url = new URL(assetBaseUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_ASSET_BASE_URL must be a valid URL");
  }

  if (url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_ASSET_BASE_URL must use https");
  }

  return [
    {
      protocol: "https" as const,
      hostname: url.hostname,
      port: "",
      pathname: "/images/**",
      search: "",
    },
  ];
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImagePatterns(),
  },
};

export default nextConfig;
