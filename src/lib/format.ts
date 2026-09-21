export function formatDate(dateStr: string, options?: Intl.DateTimeFormatOptions) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(
    "pt-BR",
    options ?? { day: "2-digit", month: "short", year: "numeric" }
  );
}
