/** Bengali localization helpers for dates and numbers. */

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const BENGALI_MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

/** Convert ASCII digits within a string to Bengali numerals. */
export function toBengaliDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => BENGALI_DIGITS[Number(d)]);
}

/**
 * Format an ISO timestamp as a Bengali date + time, e.g.
 * `২৯ জুন, ২০২৬ | ১১:২০`.
 */
export function formatBengaliDateTime(iso: string): string {
  const date = new Date(iso);
  const day = toBengaliDigits(date.getUTCDate());
  const month = BENGALI_MONTHS[date.getUTCMonth()];
  const year = toBengaliDigits(date.getUTCFullYear());
  const hours = toBengaliDigits(String(date.getUTCHours()).padStart(2, "0"));
  const minutes = toBengaliDigits(
    String(date.getUTCMinutes()).padStart(2, "0"),
  );
  return `${day} ${month}, ${year} | ${hours}:${minutes}`;
}
