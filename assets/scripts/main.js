$(document).ready(function () {

// function that takes an array, and iterates through to generate a "bar" (div) for each element
  function createBar(array){
    for (let i = 0; i < array.length; i++) {
      $('<div class="bar"></div>').appendTo("#chartspace");
    }
  };

  // Button allows user to input comma-separated data on click. 
  $('#input').click (function() {
    let input = prompt('Please input some data:');
    input= input.split(",", 10); //converts input string to an array
    createBar(input); //calls data createBar function to append a bar for each data element added
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

