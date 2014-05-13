var map;

var chart;
var chartData = {};

chartData.usaHigh = [
    { source: "Murder", energy: 13882},
    { source: "Rape", energy: 12653},
    { source: "Grand Theft Auto", energy: 13278},
    { source: "Robbery", energy: 1610},
    { source: "Manslaughter", energy: 1740}];

chartData["US-NJ"] = [
    { source: "Murder", energy: 3882},
    { source: "Rape", energy: 153},
    { source: "Grand Theft Auto", energy: 278},
    { source: "Robbery", energy: 610},
    { source: "Manslaughter", energy: 740}];



AmCharts.ready(function() {

    chart = new AmCharts.AmPieChart();

    // title of the chart
    chart.addLabel("0", "!20", "Crime Break Down", "center", 16);

    chart.backgroundAlpha = 0.4;
    chart.backgroundColor = "#000000";
    chart.dataProvider = chartData.usaHigh;
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
            mapVar: AmCharts.maps.uasHigh,
            getAreasFromMap:true,
            areas: [{
            id: "US-AL",
            value: 4447100
        }, {
            id: "US-AK",
            value: 626932
        }, {
            id: "US-AZ",
            value: 5130632
        }, {
            id: "US-AR",
            name: "Arizona",
            value: 2673400
        }, {
            id: "US-CA",
            value: 33871648
        }, {
            id: "US-CO",
            value: 4301261
        }, {
            id: "US-CT",
            value: 3405565
        }, {
            id: "US-DE",
            value: 783600
        }, {
            id: "US-FL",
            value: 15982378
        }, {
            id: "US-GA",
            value: 8186453
        }, {
            id: "US-HI",
            value: 1211537
        }, {
            id: "US-ID",
            value: 1293953
        }, {
            id: "US-IL",
            value: 12419293
        }, {
            id: "US-IN",
            value: 6080485
        }, {
            id: "US-IA",
            value: 2926324
        }, {
            id: "US-KS",
            value: 2688418
        }, {
            id: "US-KY",
            value: 4041769
        }, {
            id: "US-LA",
            value: 4468976
        }, {
            id: "US-ME",
            value: 1274923
        }, {
            id: "US-MD",
            value: 5296486
        }, {
            id: "US-MA",
            value: 6349097
        }, {
            id: "US-MI",
            value: 9938444
        }, {
            id: "US-MN",
            value: 4919479
        }, {
            id: "US-MS",
            value: 2844658
        }, {
            id: "US-MO",
            value: 5595211
        }, {
            id: "US-MT",
            value: 902195
        }, {
            id: "US-NE",
            value: 1711263
        }, {
            id: "US-NV",
            value: 1998257
        }, {
            id: "US-NH",
            value: 1235786
        }, {
            id: "US-NJ",
            value: 8414350
        }, {
            id: "US-NM",
            value: 1819046
        }, {
            id: "US-NY",
            value: 18976457
        }, {
            id: "US-NC",
            value: 8049313
        }, {
            id: "US-ND",
            value: 642200
        }, {
            id: "US-OH",
            value: 11353140
        }, {
            id: "US-OK",
            value: 3450654
        }, {
            id: "US-OR",
            value: 3421399
        }, {
            id: "US-PA",
            value: 12281054
        }, {
            id: "US-RI",
            value: 1048319
        }, {
            id: "US-SC",
            value: 4012012
        }, {
            id: "US-SD",
            value: 754844
        }, {
            id: "US-TN",
            value: 5689283
        }, {
            id: "US-TX",
            value: 20851820
        }, {
            id: "US-UT",
            value: 2233169
        }, {
            id: "US-VT",
            value: 608827
        }, {
            id: "US-VA",
            value: 7078515
        }, {
            id: "US-WA",
            value: 5894121
        }, {
            id: "US-WV",
            value: 1808344
        }, {
            id: "US-WI",
            value: 5363675
        }, {
            id: "US-WY",
            value: 493782
        }]


        }; 
        // pass data provider to the map object
        dataProvider.areas = [
            { title: "New Jersey", id: "US-NJ", selectable: true }
        ];
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

        map.addListener("clickMapObject", function (event) {
        
           chart.dataProvider = chartData[event.mapObject.id];
           chart.clearLabels();
           chart.addLabel("0", "!20", event.mapObject.title + " Crime Stats", "center", 16);
           chart.validateData();
         
       
        });
    });

