// Calculate seconds until midnight
export function timeUntilMidnight() {
  const now = new Date();
  const tonight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );
  const secondsUntilMidnight = Math.round(
    (tonight.getTime() - now.getTime()) / 1000,
  );

  return secondsUntilMidnight;
}
