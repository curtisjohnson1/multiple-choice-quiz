// declare a total variable and input it into the DOM
var total = 0;

document.getElementById("score").innerHTML = total;

$(document).ready(function()  {
// THIS IS CORRECT below
  $('.correct').click(function(){

    $(this).removeClass("answer correct");
    $(this).addClass('question-correct')

    $(this).unbind();

    total += 1;

    document.getElementById('score').innerHTML = total;

  });

  $('.incorrect').click(function(){
    $(this).removeClass("answer incorrect");
    $(this).addClass('question-incorrect')

    $(this).unbind();
  });


});
