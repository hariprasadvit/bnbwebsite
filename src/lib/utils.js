export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? "http://localhost:1337";
}
export function extractListItems(text) {
  const listRegex = /(?:^|\n)(?:[-•]|\d+\.)\s+(.*?)(?=\n|$)/g;
  let matches = [];
  let match;

  while ((match = listRegex.exec(text)) !== null) {
    matches.push(match[1].trim());
  }

  return matches;
}
