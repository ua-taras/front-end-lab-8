var exchange_eurotouah = 33.2324;
var exchange_usdtouah = 27.1240;
var amount_euro = Number(prompt('Input first side of triangle',100));
var amount_usd = Number(prompt('Input second side of triangle',100));

if ((amount_euro <= 0) || (amount_usd <= 0) || isNaN(amount_euro) || isNaN(amount_usd)) {
  console.log('Incorrect data!');
}
else {
  console.log ('for data ' + amount_euro + ', ' + amount_usd + ':\n' +
  amount_euro + ' euros are equal ' + (amount_euro * exchange_eurotouah).toFixed(2) + ' UAH, ' +
  amount_usd + ' dollars are equal ' + (amount_usd * exchange_usdtouah).toFixed(2) + ' UAH, ' +
  'one euro is equal ' + (exchange_eurotouah / exchange_usdtouah).toFixed(2) + ' dollars.');
}
