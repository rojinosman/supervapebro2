// lib/image-utils.ts
export function getImagePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Preferred: injected at build time from next.config.ts
  const envBase = process.env.NEXT_PUBLIC_BASEPATH ?? "";

  // Fallback: infer from URL at runtime (helps if env is missing)
  let inferredBase = "";
  if (!envBase && typeof window !== "undefined") {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    // If hosted at https://<user>.github.io/<repo>/..., first segment is repo
    if (first) inferredBase = `/${first}`;
  }

  const basePath = envBase || inferredBase;
  return `${basePath}${normalizedPath}`;
}
