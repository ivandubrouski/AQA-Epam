//task 1
const str = 'ahb acb aeb aeeb adcb axeb';
const res = str.match(/a\w+b/g);
console.log(res); // ['ahb', 'acb', 'aeb', 'aeeb', 'adcb', 'axeb']


//task 2
const str2 = '2 + 3 223 2223';
const res2 = /\d\s\S\s\d/;
console.log(res2.test(str2)); // true

//task 3
const date = new Date();
console.log('Year', date.getFullYear());
console.log('Month', date.getMonth());
console.log('Day of the week', date.getDate());
console.log('Hours',date.getHours());
console.log('Minutes',date.getMinutes());
console.log('Secondss',date.getSeconds());
console.log('Milliseconds',date. getMilliseconds());
