/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum daysOfWeek {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

// function isWeekend(day: daysOfWeek): boolean {
//   if (day === daysOfWeek.saturday || day === daysOfWeek.sunday) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isWeekend(day: daysOfWeek): boolean {
  return day === daysOfWeek.saturday || day === daysOfWeek.sunday;
}

isWeekend(daysOfWeek.sunday);
