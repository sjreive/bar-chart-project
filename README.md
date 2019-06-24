# bar-chart-project

*********
FUNCTIONS
*********
    - generateChartSpace creates the divs necessary to create the chart and appends them to the element passed as a parameter

    - formatChart formats the chart adds CSS properties

    - createBar takes an array as a parameter and displays an in-line "rectangle" div for each element in the array. Assigns each bar a class & id.

    - barHeight ajusts the height of the bar based on the magnitude of the array element (as a % of the largest element)

    - barWidth adjusts the width of the bars based on the number of inputs and the width of the viewport and adds generic labels

    - generateYAxis generates the vertical line (Y Axis) for the chart

    - generateYScale calculates & generates Y axis labels.

    - generateXLabels generates the horizontall line for the X Axis
  
    - generateXLabels generates HTML label for each element in the array from the keys in the "data" object 

    - generateDataLabelSpace appends a div to each bar in the chart to provide space for the label
    
    - generateLabels appends text to the label space div which matches the input array. User can specify if labels should be at the top, center, or bottom of the bar.

    - generateTitle allows the user to specify a title, as well as the title font size & colour

***********
ISSUES/BUGS
***********
- Y axis labels round incorrectly for small numbers.
- Y axis ticks are very close but don't quite align with actual values.
- Chart does not scale appropriately when a height larger than 300 is specified.

**********
NEXT STEPS
**********
- Allow createBars function to accept & loop through an array of values for each key passed in the "data" object to create a stacked bar chart

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

- Youtube tutorial series on jQuery:
https://www.youtube.com/watch?v=hMxGhHNOkCU&list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_&index=1


