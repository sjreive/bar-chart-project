# bar-chart-project


*********
FUNCTIONS
*********
- onClick function prompts user for input when button is pressed, and transforms that data into an array (will take a max of 10 elements). Passes array to the following functions:

    - createBar takes an array as a parameter and displays an in-line "rectangle" div for each element in the array. Assigns each bar a class & id.

    - barHeight ajusts the height of the bar based on the magnitude of the array element (as a % of the largest element)

    - barWidth adjusts the width of the bars based on the number of inputs and the width of the viewport and adds generic labels

    - generateYAxis generates the vertical line (Y Axis) for the chart
    - generateYScale calculates & generates Y axis labels.
    - generateXLabels(input) generates the horizontall line for the X Axis
  
    - generateXLabels(input) generates HTML label for each element in the array

    - generateDataLabelSpace(input) appends a div to each bar in the chart to provide space for the label
    
    - generateLabels(input) appends text to the label space div which matches the input array.

***********
ISSUES/BUGS
***********
- Y axis labels are rouding incorrectly for small numbers.
- Y axis ticks are very close but don't quite align with actual values.

**********
NEXT STEPS
**********
- Add function that generates Chart Area
- Add function that generates chartspace, y axis space and x axis space
- Add option to position label at center or bottom of the bar
- Create a function that when you click on the label a prompt box allows you to change it

*********
RESOURCES
*********
- Reference for sizing div elements proportionally to the viewport:  https://webplatform.github.io/docs/tutorials/understanding-css-units/

- w3schools introduction to jQuery tutorials: https://www.w3schools.com/jquery/jquery_get_started.asp

- Article on appending div elements using jQuery : 
https://www.geeksforgeeks.org/how-to-create-a-div-element-in-jquery/

- Stack overflow question about generating a vertical line:
https://stackoverflow.com/questions/7512877/how-can-we-draw-a-vertical-line-in-the-webpage/17043906

- w3schools CSS vertical-align Property
https://www.w3schools.com/cssref/pr_pos_vertical-align.asp

- Article on placing a Div inside another Div:
http://www.corelangs.com/css/box/divindiv.html


