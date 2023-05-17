$(document).ready(function() {
    var counter = 0;

    //  for the counter button
    $('#clickBtn').click(function() {
      counter++;
      $('#counter').text(counter);
    });

    // for the reset button
    $('#resetBtn').click(function() {
      counter = 0;
      $('#counter').text(counter);
    });
  });