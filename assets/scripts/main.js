$(document).ready(function () {

  function createBar(chartValues, options){
    for (let i = 0; i < chartValues.length; i++) {
      $("<div/>", {"class": "bar", id: "bar"+(i+1)}).appendTo("#chartspace");
    }
    let colour = options.barColour;
    $(".bar").css({"background-color":colour});
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

  function barWidth(chartValues, valueLabels, options){
    let margin = 4; //default bar spacing is "large"
    if (options.barSpacing === "small") {
      margin = 8;
    } else if (options.barSpacing === "medium") {
      margin = 6;
    }
    let setMarginWidth = 100 / chartValues.length / margin; // calculates width of the margin on each side of the bar
    let setBarWidth = 100 / chartValues.length - setMarginWidth * 2; // calcultates with of the bar
     // width of margin on each side of bar
    for (let i = 1; i <= chartValues.length; i++) {
     document.getElementById("bar" + i).style.width = setBarWidth + "%"; //sets width of bars based on number of chartValues values
     document.getElementById("bar" + i).style.marginLeft = setMarginWidth + "%"; //sets the width of the margins on either side of the bars
     document.getElementById("bar" + i).style.marginRight = setMarginWidth + "%";
     document.getElementById("xlabel" + i).style.width = setBarWidth + "%";
     document.getElementById("xlabel" + i).style.marginLeft = setMarginWidth + "%"; //sets the width of the margins on either side of the bars
     document.getElementById("xlabel" + i).style.marginRight = setMarginWidth + "%";
     document.getElementById("xlabel" + i).innerHTML = valueLabels[i-1];
    }
  }

  function generateXAxis(){
    $("<hr/>",{"class": "axis", "align":"left",}).appendTo("#xaxis");
  }

  function generateYAxis(){
    $("<div/>", {id: "yaxis","class": "axis"}).appendTo("#ylabelspace");
  }

  function generateDataLabelSpace(data){
    for (let i = 1; i <= data.length; i++){
    $("<div/>", {"class": "label", id: "datalabel" + i, "height": "25px", "text-align": "center", "position": "absolute", "width": "100%",}).appendTo("#bar" + i);
    }
  }

  function generateLabels(chartValues, options){
  for (let i = 1; i <= chartValues.length; i++){
    document.getElementById("datalabel" + i).innerHTML = chartValues[i-1]; //create the label
  }
  if (options.labelPosition === "centre") {
      $(".label").css({"top":"50%"});
    } else if (options.labelPosition === "bottom") {
      $(".label").css({"bottom":0});
    }
    $(".label").css({"text-align": "center", "position": "absolute","color": options.labelColour});
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

  function generateXAxisTitle(options){
    $("<div/>",{id: "xaxistitle"}).appendTo("#xlabelspace");
    document.getElementById("xaxistitle").innerHTML = options.xAxisTitle;
  }

  function generateYAxisTitle(options){
    $("<div/>",{id:"yaxistitle"}).appendTo("#ylabelspace");
    document.getElementById("yaxistitle").innerHTML = options.yAxisTitle;
  }

  function generateChartSpace(element){
    $("<div/>", {id:"titlespace", "height":"30px","margin-left":"19%"}).appendTo("#"+element);
    $("<div/>",{id:"ylabelspace"}).appendTo("#"+element);
    $("<div/>",{id:"chartspace"}).appendTo("#"+element);
    $("<div/>",{id:"xlabelspace"}).appendTo("#"+element);
    $("<div/>",{id:"xaxis"}).appendTo("#xlabelspace");
  }

  function generateTitle(options){
    document.getElementById("titlespace").innerHTML = options.chartTitle;
    $("#titlespace").css({"margin-left": "19%","margin-bottom":"30px", "text-align":"center", "color":options.titleFontColour, "font-size":options.titleFontSize})
  }

  function drawBarChart(data, options, element){
    let chartValues = Object.values(data); // array containing values of bar chart options
    let valueLabels = Object.keys(data); // array containing keys, or names of bar chart options
    generateChartSpace(element);
    generateYAxis();
    generateYScale(chartValues);
    generateYAxisTitle(options);
    generateXAxis();
    generateXLabels(chartValues);
    generateXAxisTitle(options);
    createBar(chartValues, options); //calls createBar function to append a bar for each data element added
    barHeight(chartValues); // calls barHeight function
    barWidth(chartValues, valueLabels, options); // calls barWidth function
    generateDataLabelSpace(chartValues);
    generateLabels(chartValues, options);
    generateTitle(options);
  }

// Actual input for chart
  let data = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  let options = {
    labelPosition: "centre", //options: top, bottom, or center;
    barColour: "purple",
    labelColour: "limegreen",
    xAxisTitle: "Type of Fruit",
    yAxisTitle: "Number of Fruits",
    chartTitle: "Fruits I've Eaten This Year",
    titleFontColour: "blue",
    titleFontSize: "30px",
    barSpacing: "large", //can be small , medium , or large;
    chartWidth: "80%" //as a percent of the viewport
  }

  let element = "chart"; // name of div ID to append chart to.


  drawBarChart(data, options, element);

});
