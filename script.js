let today = new Date();
// console.log('today: ' + today);
let day = today.getDate();
// console.log('day: ' + day);

let dayFormatted;
if (day < 10) {
    dayFormatted = '0' + day;
} else {
    dayFormatted = day;
}
// console.log('dayFormatted: ' + dayFormatted);

let month = today.getMonth();
// console.log('month: ' + month);
let monthFormatted;
if (month + 1 < 10) {
    monthFormatted = '0' + (month + 1);
} else {
    monthFormatted = month + 1;
}
// console.log('monthFormatted: ' + monthFormatted);

let year = today.getFullYear();
// console.log('year: ' + year)
let dateFormatted = dayFormatted + '.' + monthFormatted + '.' + year;
// console.log('dateFormatted: ' + dateFormatted);

document.getElementById("fullDate1").textContent = dateFormatted;
document.getElementById("fullDate2").textContent = dateFormatted;

let weekdayIndex = today.getDay();
console.log('weekdayIndex: ' + weekdayIndex);

let weekday;
if (weekdayIndex === 0) {
    weekday = 'Sonntag';
} else if (weekdayIndex === 1) {
    weekday = 'Montag';
} else if (weekdayIndex === 2) {
    weekday = 'Dienstag';
} else if (weekdayIndex === 3) {
    weekday = 'Mittwoch';
} else if (weekdayIndex === 4) {
    weekday = 'Donnerstag';
} else if (weekdayIndex === 5) {
    weekday = 'Freitag';
} else {
    weekday = 'Samstag';
}

console.log('weekday: ' + weekday);
document.getElementById('fullWeekday1').textContent = weekday;
document.getElementById('fullWeekday2').textContent = weekday;

let monthGerman;
if (month === 0) {
    monthGerman = 'Januar';
} else if (month === 1) {
    monthGerman = 'Februar';
} else if (month === 2) {
    monthGerman = 'März';
} else if (month === 3) {
    monthGerman = 'April';
} else if (month === 4) {
    monthGerman = 'Mai';
} else if (month === 5) {
    monthGerman = 'Juni';
} else if (month === 6) {
    monthGerman = 'Juli';
} else if (month === 7) {
    monthGerman = 'August';
} else if (month === 8) {
    monthGerman = 'September';
} else if (month === 9) {
    monthGerman = 'Oktober';
} else if (month === 10) {
    monthGerman = 'November';
} else {
    monthGerman = 'Dezember';
}

console.log('monthGerman: ' + monthGerman);
document.getElementById('fullMonth').textContent = monthGerman;





const monthNames = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    function getDaysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    }

    let daysInMonth = getDaysInMonth(year, month);
    document.getElementById('daysInMonth').textContent = daysInMonth;
    

    console.log('Jahr:', year);
    console.log('Monat:', month);
    console.log('Tage im Monat:', daysInMonth);
    











