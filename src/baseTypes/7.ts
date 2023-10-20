/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const weekendDays = [DayOfWeek.Saturday, DayOfWeek.Sunday];

function isWeekend(day: DayOfWeek): boolean {
  return weekendDays.includes(day);
}
