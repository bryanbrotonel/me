// Returns seconds until midnight
export function timeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Set to midnight

  return Math.floor((midnight.getTime() - now.getTime()) / 1000);
}
