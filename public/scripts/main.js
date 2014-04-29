var map;

var chart;
var chartData = {};

chartData.world = [
    { source: "Oil", energy: 3882.1},
    { source: "Natural Gas", energy: 2653.1},
    { source: "Coal", energy: 3278.3},
    { source: "Nuclear", energy: 610.5},
    { source: "Hydro", energy: 740.3}];

chartData.US = [
    { source: "Oil", energy: 842.9},
    { source: "Natural Gas", energy: 588.7},
    { source: "Coal", energy: 498},
    { source: "Nuclear", energy: 190.2},
    { source: "Hydro", energy: 62.2}];

chartData.CN = [
    { source: "Oil", energy: 404.6},
    { source: "Natural Gas", energy: 79.8},
    { source: "Coal", energy: 1537.4},
    { source: "Nuclear", energy: 15.9},
    { source: "Hydro", energy: 139.3}];

chartData.RU = [
    { source: "Oil", energy: 124.9},
    { source: "Natural Gas", energy: 350.7},
    { source: "Coal", energy: 82.9},
    { source: "Nuclear", energy: 37},
    { source: "Hydro", energy: 39.8}];

chartData.IN = [
    { source: "Oil", energy: 148.5},
    { source: "Natural Gas", energy: 46.7},
    { source: "Coal", energy: 245.8},
    { source: "Nuclear", energy: 3.8},
    { source: "Hydro", energy: 24}];

chartData.JP = [
    { source: "Oil", energy: 197.6},
    { source: "Natural Gas", energy: 78.7},
    { source: "Coal", energy: 108.8},
    { source: "Nuclear", energy: 62.1},
    { source: "Hydro", energy: 16.7}];


AmCharts.ready(function() {

        chart = new AmCharts.AmPieChart();

    // title of the chart
    chart.addLabel("0", "!20", "World", "center", 16);

    chart.backgroundAlpha = 0.4;
    chart.backgroundColor = "#000000";
    chart.dataProvider = chartData.world;
    chart.titleField = "source";
    chart.valueField = "energy";
    chart.sequencedAnimation = true;
    chart.startEffect = "elastic";
    chart.labelsEnabled = false;
    chart.labelText = "[[title]]";
    chart.startDuration = 2;
    chart.labelRadius = 10;

    // WRITE                                 
    chart.write("chartdiv");
        // create AmMap object
        var map = new AmCharts.AmMap();
        // set path to images
        map.pathToImages = "ammap/ammap/images/";

        var dataProvider = {
            map: "usaHigh",
            getAreasFromMap:true,

        }; 
        // pass data provider to the map object
        map.dataProvider = dataProvider;

        /* create areas settings
         * autoZoom set to true means that the map will zoom-in when clicked on the area
         * selectedColor indicates color of the clicked area.
         */
        map.areasSettings = {
            autoZoom: true,
            selectedColor: "#BC0130"
        };

        // let's say we want a small map to be displayed, so let's create it
        map.smallMap = new AmCharts.SmallMap();

        // write the map to container div
        map.write("mapdiv");
    });

map.addListener("clickMapObject", function (event) {
 if (event.mapObject.id != undefined && chartData[event.mapObject.id] != undefined) {
   chart.dataProvider = chartData[event.mapObject.id];
   chart.clearLabels();
   chart.addLabel("0", "!20", event.mapObject.title, "center", 16);
   chart.validateData();
 }
});