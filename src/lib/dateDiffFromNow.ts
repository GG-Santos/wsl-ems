export function getTimeFromNow(dateStr: string): string {
  const inputDate = new Date(dateStr);
  const now = new Date();

  const msDiff = now.getTime() - inputDate.getTime();

  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerWeek = msPerDay * 7;
  const msPerMonth = msPerDay * 30.44; // average
  const msPerYear = msPerDay * 365.25;

  if (msDiff >= msPerYear) {
    const years = Math.floor(msDiff / msPerYear);
    return `${years} ${years === 1 ? 'Year' : 'Years'}`;
  } else if (msDiff >= msPerMonth) {
    const months = Math.floor(msDiff / msPerMonth);
    return `${months} ${months === 1 ? 'Month' : 'Months'}`;
  } else if (msDiff >= msPerWeek) {
    const weeks = Math.floor(msDiff / msPerWeek);
    return `${weeks} ${weeks === 1 ? 'Week' : 'Weeks'}`;
  } else {
    const days = Math.floor(msDiff / msPerDay);
    return `${days} ${days === 1 ? 'Day' : 'Days'}`;
  }
}