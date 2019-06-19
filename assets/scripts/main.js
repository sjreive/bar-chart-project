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
      document.getElementById("bar"+(i+1)).style.height = multiplier+"px"; //assigns height of bar based on input value
    }
  }

  function generateXLabels(array){
    for (let i=1; i <= array.length; i++) {
      $("<div/>",{"class": "xlabel", id:"xlabel"+i}).appendTo("#xlabelspace");
    }
  }

  function barWidth(array){
    let length= array.length;
    setBarWidth = 100/(length*1.5);
    setMarginWidth = setBarWidth / 4;
    for (let i = 1; i <= array.length; i++) {
     document.getElementById("bar" + i).style.width = setBarWidth+"%"; //sets width of bars based on number of input values
     document.getElementById("bar" + i).style.marginLeft = setMarginWidth+"%"; //sets the width of the margins on either side of the bars
     document.getElementById("bar" + i).style.marginRight = setMarginWidth+"%";
    // NTS figure out if there is a way to make this more efficient..
     document.getElementById("xlabel" + i).style.width = setBarWidth+"%";
     document.getElementById("xlabel" + i).style.marginLeft = setMarginWidth+"%"; //sets the width of the margins on either side of the bars
     document.getElementById("xlabel" + i).style.marginRight = setMarginWidth+"%";
     document.getElementById("xlabel" + i).innerHTML = "LABEL";
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

  // Button allows user to input comma-separated data on click.
  //$('#input').click (function()
  //let input = prompt('Please input some data:');

  function drawBarChart(input){
    input= input.split(",",10); //converts input string to an array
    generateChartSpace();
    generateYAxis();
    generateYScale(input);
    generateYAxisTitle();
    generateXAxis();
    generateXLabels(input);
    generateXAxisTitle();
    createBar(input); //calls createBar function to append a bar for each data element added
    barHeight(input); // calls barHeight function
    barWidth(input); // calls barWidth function
    generateDataLabelSpace(input);
    generateLabels(input);
  }
drawBarChart("10,20,30,40");
});
