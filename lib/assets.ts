const assetBaseUrl = process.env.NEXT_PUBLIC_ASSET_BASE_URL?.replace(/\/$/, "");

export function assetPath(path: string) {
  if (!assetBaseUrl) {
    throw new Error("NEXT_PUBLIC_ASSET_BASE_URL is required");
  }

  return `${assetBaseUrl}${path}`;
}
