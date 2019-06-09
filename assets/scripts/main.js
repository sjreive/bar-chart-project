$(document).ready(function () {

// function that takes an array, and iterates through to generate a "bar" (div) for each element
  function createBar(array){
    for (let i = 0; i < array.length; i++) {
      $('<div/>', {'class': 'bar', id: "bar"+(i+1)}).appendTo("#chartspace");
    }
  };

  function barHeight(array){
    let maxVal = Math.max(...array);
    let multiplier;
    for (let i = 0; i < array.length; i++) {
      multiplier = (array[i]/maxVal)*300;
      document.getElementById("bar"+(i+1)).style.height = multiplier+"px"; //assigns height of bar based on input value
    }
  }

  function barWidth(array){
    let length= array.length;
    setBarWidth = 90/(length*2-1);
    setMarginWidth = setBarWidth/4;
    for (let i= 1; i <= array.length; i++) {
     document.getElementById("bar"+ i).style.width = setBarWidth+"vw" //sets width of bars based on number of input values
     document.getElementById("bar"+ i).style.marginLeft = setMarginWidth+"vw"; //sets the width of the margins on either side of the bars
     document.getElementById("bar"+ i).style.marginRight = setMarginWidth+"vw";
    }
  }
  // Button allows user to input comma-separated data on click.
  $('#input').click (function() {
    let input = prompt('Please input some data:');
    input= input.split(",", 15); //converts input string to an array
    createBar(input); //calls createBar function to append a bar for each data element added
    barHeight(input); // calls barHeight function
    barWidth(input); // calls barWidth function
  });




});
  /* jQuery Action:
   $('#selector').method1().method2().methodn();

   Change CSS (Javascript Object):
   $('#selector').css({key:value, fontWeight: 'bold'});

   Change HTML:
   $('#selector').html('change');

   Event Listening:
   $('#selector').on('event', function() {
     Stuff that will happen when the user clicks
     $('#selector').method()
   })

  //Searching by Attribute
  $ ('.attribute').on('event', function() {
    let variable = $(this).attr('attribute name');
    $('#'+variable).method();
  })

*/

