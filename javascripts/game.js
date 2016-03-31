function newAnswer() {
  return ~~(Math.random() * 100) + 1;
}

$(function() {
  var answer = newAnswer(),
      num_guesses = 0;

  $("form").submit(function(e) {
    e.preventDefault();
    var response,
        guess = +$("input#guess").val();

    num_guesses++;

    if (guess > answer) {
      response = "My number is lower than " + guess + ".";
    } else if (guess < answer) {
      response = "My number is higher than " + guess + ".";
    } else {
      response = "You've won! It only took you " + num_guesses + " guesses.";
    }

    $("h1 + p").text(response);
    $("input#guess").val("");
  });

  $("a").click(function(e) {
    e.preventDefault();

    answer = newAnswer();
    num_guesses = 0;
    $("p").text("Guess a number from 1 to 100");
  });
});
