# bar-chart-project


*********
FUNCTIONS
*********
- onClick function prompts user for input when button is pressed, and transforms that data into an array (will take a max of 10 elements). Passes array to the following functions:

    - createBar takes an array as a parameter and displays an in-line "rectangle" div for each element in the array. Assigns each bar a class & id.

    - barHeight ajusts the height of the bar based on the magnitude of the array element (as a % of the largest element)

    - barWidth adjusts the width of the bars based on the number of inputs and the width of the viewport


**********
NEXT STEPS
**********
- Update the onClick function prompt to take labels as well as numbers (objects rather than 1D array)
- Create a function that will display x & y axes

*********
RESOURCES
*********
- Reference for sizing div elements proportionally to the viewport:  https://webplatform.github.io/docs/tutorials/understanding-css-units/

- w3schools introduction to jQuery tutorials: https://www.w3schools.com/jquery/jquery_get_started.asp

- Article on appending div elements using jQuery : 
https://www.geeksforgeeks.org/how-to-create-a-div-element-in-jquery/
