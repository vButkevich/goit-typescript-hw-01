// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

console.log("basic:5.ts :>>---------------------------------------- ");

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log("DayOfWeek.Monday   :isWeekend", isWeekend(DayOfWeek.Monday));
console.log("DayOfWeek.Tuesday  :isWeekend", isWeekend(DayOfWeek.Tuesday));
console.log("DayOfWeek.Wednesday:isWeekend", isWeekend(DayOfWeek.Wednesday));
console.log("DayOfWeek.Thursday :isWeekend", isWeekend(DayOfWeek.Thursday));
console.log("DayOfWeek.Friday   :isWeekend", isWeekend(DayOfWeek.Friday));
console.log("DayOfWeek.Saturday :isWeekend", isWeekend(DayOfWeek.Saturday));
console.log("DayOfWeek.Sunday   :isWeekend", isWeekend(DayOfWeek.Sunday));
