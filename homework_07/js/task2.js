
if (confirm('Do you want to play a game?')) {

  var game_begin = true;
  var game_continue = true;
  var attempt_total = 3;
  var range_end = 5;
  var win_rate = 1;
  var prize_total = 0;
  var prize_max = 10;
  var prize_current = 0;

  while (game_begin) {
    for (var attempt = 0; attempt < attempt_total; attempt++) {
      game_begin = false;

      if (attempt == 0) {
        prize_current = prize_max * win_rate;
      }
      else {
        prize_current = parseInt(prize_current / 2);
      }

      var number_user = prompt(`Enter a number from 0 to: ${ range_end }
Attempts left: ${ attempt_total - attempt }
Total prize: ${ prize_total }
Possible prize on current attempt: ${ prize_current }`);

      if (typeof(number_user) != 'object') {
        var number_random = Math.floor(Math.random() * (range_end + 1));
        console.log(number_random);

        if ((number_random == number_user) && (!isNaN(parseFloat(number_user)))) {
          prize_total += prize_current;
          if (confirm('Do you want to continue a game?')) {
            range_end *= 2;
            win_rate *= 3;
            game_begin = true;
            break;
          }
          else {
            game_continue = false;
          }
        }
      }

      if ((!game_continue) || (attempt == (attempt_total - 1)) || (typeof(number_user) == 'object')) {
        console.log(`Thank you for a game. Your prize is: ${ prize_total }`);
        if (confirm('Do you want to play again?')) {
          win_rate = 1;
          range_end = 5;
          prize_total = 0;
          game_begin = true;
          game_continue = true;
          break;
        }
        else {
          break;
        }
      }

    }
  }
}
else {
  console.log('You did not become a millionaire');
}
