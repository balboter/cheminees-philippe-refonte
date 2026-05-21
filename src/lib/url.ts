const BASE = import.meta.env.BASE_URL;

/** Préfixe un chemin interne avec le base path GitHub Pages.
 *  Laisse intacts : URLs externes, ancres, tel:, mailto:, data:. */
export function url(path: string): string {
  if (
    !path ||
    path.startsWith("http") ||
    path.startsWith("#") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  return BASE.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
