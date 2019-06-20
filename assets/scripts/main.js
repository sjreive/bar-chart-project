// drawBarChart(data,options,element)
// data is an array
// options ie width, height, etc.
//element is where chart will get rendered

$(document).ready(function () {

// function that takes an array, and iterates through to generate a "bar" (div) for each element
  function createBar(array){
    for (let i = 0; i < array.length; i++) {
      $("<div/>", {"class": "bar", id: "bar"+(i+1)}).appendTo("#chartspace");
    }
  }

  function barHeight(array){
    let maxVal = Math.max(...array);
    let multiplier;
    for (let i = 0; i < array.length; i++) {
      multiplier = (array[i]/maxVal)*300;
      document.getElementById("bar"+(i+1)).style.height = multiplier+"px"; //assigns height of bar based on chartValues value
    }
  }

  function generateXLabels(array){
    for (let i=1; i <= array.length; i++) {
      $("<div/>",{"class": "xlabel", id:"xlabel"+i}).appendTo("#xlabelspace");
    }
  }

  function barWidth(chartValues, valueLabels){
    let length= chartValues.length;
    setBarWidth = 100/(length*1.5);
    setMarginWidth = setBarWidth / 4;
    for (let i = 1; i <= chartValues.length; i++) {
     document.getElementById("bar" + i).style.width = setBarWidth+"%"; //sets width of bars based on number of chartValues values
     document.getElementById("bar" + i).style.marginLeft = setMarginWidth+"%"; //sets the width of the margins on either side of the bars
     document.getElementById("bar" + i).style.marginRight = setMarginWidth+"%";
    // NTS figure out if there is a way to make this more efficient..
     document.getElementById("xlabel" + i).style.width = setBarWidth+"%";
     document.getElementById("xlabel" + i).style.marginLeft = setMarginWidth+"%"; //sets the width of the margins on either side of the bars
     document.getElementById("xlabel" + i).style.marginRight = setMarginWidth+"%";
     document.getElementById("xlabel" + i).innerHTML = valueLabels[i-1];
    }
  }

  function generateXAxis(){
    $("<hr/>",{"class": "axis"}).appendTo("#xaxis");
  }

  function generateYAxis(){
    $("<div/>", {id: "yaxis","class": "axis"}).appendTo("#ylabelspace");
  }

  function generateDataLabelSpace(array){
    for (let i = 1; i <= array.length; i++){
    $("<div/>", {"class": "label", id: "datalabel" + i}).appendTo("#bar" + i);
    }
  }
  function generateLabels(array){
  for (let i = 1; i <= array.length; i++){
    document.getElementById("datalabel" + i).innerHTML = array[i-1];
    }
  }
  function generateYScale(array){
    let yInterval = 0; // determined by max val, will be customizeable
    let chartHeight = 300; //will be customizeable
    let numOfYVals = 7; // will be customizeable
    let height = chartHeight/numOfYVals;
    yInterval = Math.max(...array)/numOfYVals;
    $("<div/>",{id: "yscale"}).appendTo("#ylabelspace");
    let ylabel = "label";
    for (i = 1; i <= numOfYVals; i++) {
      ylabel= (Math.max(...array)-yInterval * (i-1)).toFixed(0); //NOTE: causes issues with small numbers if numOfIntervals > MaxValue;
      $("<div/>", {id:"ylabel"+i, "class" : "ylabel"}).appendTo("#yscale");
      $("<p/>", {"class": "ylabel"}).appendTo("#ylabel"+i);
      document.getElementById("ylabel"+i).style.height = height+"px";
      document.getElementById("ylabel"+i).innerHTML = ylabel+" -";
    }
  }

  function generateXAxisTitle(){
    $("<div/>",{id: "xaxistitle"}).appendTo("#xlabelspace");
    document.getElementById("xaxistitle").innerHTML = "X AXIS TITLE";
  }

  function generateYAxisTitle(){
    $("<div/>",{id:"yaxistitle"}).appendTo("#ylabelspace");
    document.getElementById("yaxistitle").innerHTML = "Y AXIS TITLE";
  }

  function generateChartSpace(){
    $("<div/>",{id:"ylabelspace"}).appendTo("#chart");
    $("<div/>",{id:"chartspace"}).appendTo("#chart");
    $("<div/>",{id:"xlabelspace"}).appendTo("#chart");
    $("<div/>",{id:"xaxis"}).appendTo("#xlabelspace");
  }

  // Button allows user to chartValues comma-separated data on click.
  //$('#chartValues').click (function()
  //let chartValues = prompt('Please chartValues some data:');

  function drawBarChart(data){
    let chartValues = Object.values(data); // array containing values
    let valueLabels = Object.keys(data);
    generateChartSpace();
    generateYAxis();
    generateYScale(chartValues);
    generateYAxisTitle();
    generateXAxis();
    generateXLabels(chartValues);
    generateXAxisTitle();
    createBar(chartValues); //calls createBar function to append a bar for each data element added
    barHeight(chartValues); // calls barHeight function
    barWidth(chartValues, valueLabels); // calls barWidth function
    generateDataLabelSpace(chartValues);
    generateLabels(chartValues);
  }
let object= {
  apple: 28,
  orange: 17,
  pear: 54,
}
drawBarChart(object);
});
