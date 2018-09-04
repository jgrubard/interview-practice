function addMinutes(time, add) {
  let hour = time.split(':')[0] * 1;
  let mins = time.split(':')[1] * 1;
  let finalMins = (mins + add) % 60
  let finalHours = ((hour + Math.floor((mins + add) / 60)) - 1) % 12 + 1;
  finalMins = finalMins < 10 ? '0' + finalMins : finalMins;
  finalHours = finalHours < 12 ? '0' + finalHours : finalHours;
  return finalHours + ':' + finalMins;
}

// console.log(addMinutes('1:30', 30));     // 2:00
// console.log(addMinutes('12:30', 40));    // 1:10
// console.log(addMinutes('11:59', 1));     // 12:00
// console.log(addMinutes('1:59', 240));    // 5:59
// console.log(addMinutes('1:23', 456789)); // 6:32


/* function addMinutes(time, add) {
  let hour = time.split(':')[0] * 1;
  let mins = time.split(':')[1] * 1;
  let totalMins = mins + add;
  let extraHours = 0;
  while(totalMins >= 60) {
    extraHours++;
    totalMins -= 60;
  }
  let totalHours = extraHours + hour;
  while(totalHours > 12) {
    totalHours -= 12;
  }
  hour = totalHours < 10 ? '0' + totalHours : totalHours;
  mins = totalMins < 10 ? '0' + totalMins : totalMins;
  return hour + ':' + mins;
}

// console.log(addMinutes('1:30', 30));     // 2:00
// console.log(addMinutes('12:30', 40));    // 1:10
// console.log(addMinutes('11:59', 1));     // 12:00
// console.log(addMinutes('1:59', 240));    // 5:59
// console.log(addMinutes('1:23', 456789)); // 6:32 */