// Deterministic nb-NO date formatting.
// Using Intl/toLocaleDateString directly causes SSR/client hydration mismatches
// (React error #418) because the server runtime and the browser can resolve
// the "nb-NO" locale data differently.

const MONTHS_NB = [
  "januar",
  "februar",
  "mars",
  "april",
  "mai",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "desember",
];

const parts = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.getUTCDate(),
    month: date.getUTCMonth(),
    year: date.getUTCFullYear(),
  };
};

/** 09.06.2026 */
export const formatDateNumeric = (dateString: string): string => {
  const { day, month, year } = parts(dateString);
  return `${String(day).padStart(2, "0")}.${String(month + 1).padStart(2, "0")}.${year}`;
};

/** 9. juni 2026 */
export const formatDateLong = (dateString: string): string => {
  const { day, month, year } = parts(dateString);
  return `${day}. ${MONTHS_NB[month]} ${year}`;
};
