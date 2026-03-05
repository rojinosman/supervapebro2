// lib/image-utils.ts
export function getImagePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Use build-time base path only (avoids hydration mismatch from pathname inference)
  const basePath = process.env.NEXT_PUBLIC_BASEPATH ?? "";
  return `${basePath}${normalizedPath}`;
}
