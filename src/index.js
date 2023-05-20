




import { makeGraphic, makePie, getXMLinfo, updateLayers, stepForward, stepBackward, retrieveData, retrieveAdvData, windGraphic, selectFullPeriod, yearSelection, getVerif, statVerif } from "./stats.js";





let map, infoWindow;
initMap();

// Initialize Google Map.
function initMap() {
    // Map settings.
    let mapProp = {
        zoom: 7,
        center: { lat: 45.47, lng: -73.74 },
        mapTypeId: "terrain",
        disableDefaultUI: true,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 2.5
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffeb3b"
                },
                {
                  "weight": 4.5
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 2
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffeb3b"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "weight": 2
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#c8dfc9"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#967c73"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#989290"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#967c73"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#afb1cf"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    };
    map = new google.maps.Map(document.getElementById("map"), mapProp);
    infoWindow = new google.maps.InfoWindow();
   
    // Load GeoJson data.
    let regionLayer = new google.maps.Data({ map: map });
    //regionLayer.loadGeoJson("data/QC_nord_A.json");
    //regionLayer.loadGeoJson("data/QC_nord_B.json");
    //regionLayer.loadGeoJson("data/QC_est.json");
    //regionLayer.loadGeoJson("data/QC_ouest.json");

    let regionLayer2 = new google.maps.Data({ map: map });
    regionLayer2.loadGeoJson("data/public_zones.json");

    let markerLayer = new google.maps.Data({ map: map });
    markerLayer.loadGeoJson("data/stations2.json");
    

    const elevator = new google.maps.ElevationService();

    // Style GeoJson data.

    // Set style for colored municipality polygons and points.
    regionLayer.setStyle(function(feature) {
        let munName = feature.getProperty('munName')
        let munType = feature.getProperty('munType')
        let pop     = feature.getProperty('pop')

        let scale, fillColor, fillOpacity, strokeWeight, symbol
        if (munType == "G" || munType == "GR" || munType == "NO" || munType == "VC" || munType == "TK" || munType == "TI") {
            fillOpacity = 0.33,
            strokeWeight = 0.5
        } else {
            fillOpacity = 0.67,
            strokeWeight = 1
        }
        if (pop >= 1000000) {
            scale = 8,
            fillColor = "#800000"
        } else if (pop >= 500000) {
            scale = 7.5,
            fillColor = "#921f00"
        } else if (pop >= 200000) {
            scale = 7,
            fillColor = "#a33500"
        } else if (pop >= 100000) {
            scale = 6.5,
            fillColor = "#b44a00"
        } else if (pop >= 50000) {
            scale = 6,
            fillColor = "#c35f00"
        } else if (pop >= 20000) {
            scale = 5.5,
            fillColor = "#d07500"
        } else if (pop >= 10000) {
            scale = 5,
            fillColor = "#dc8b00"
        } else if (pop >= 5000) {
            scale = 4.5,
            fillColor = "#e7a100"
        } else if (pop >= 2000) {
            scale = 4,
            fillColor = "#f0b800"
        } else if (pop >= 1000) {
            scale = 3.5,
            fillColor = "#f7cf00"
        } else if (pop >= 500) {
            scale = 3,
            fillColor = "#fce700"
        } else if (pop >= 200) {
            scale = 2.5,
            fillColor = "#ffff00"
        } else {
            scale = 0,
            fillColor = "yellow"
        }
        symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "black",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
        }
        return {
            fillColor: fillColor,
            fillOpacity: 0,
            strokeColor: fillColor,
            strokeOpacity: 0,
            strokeWeight: 1,
            icon: symbol,
            title: munName
        }  
    });

    // Set style for ECCC regions.
    regionLayer2.setStyle(function(feature) {
        return {
            fillColor: "white",
            fillOpacity: 0,
            strokeColor: "black",
            strokeOpacity: 1,
            strokeWeight: 2
        }
    })



    markerLayer.setStyle(function(feature) {
     
        let stName     = feature.getProperty('name')
        let stProvider = feature.getProperty('provider')
        let stActive   = feature.getProperty('active')
        
        let scale, fillColor, symbol
        if (stActive == 0) {
            scale = 1,
            fillColor = "red"
        } else {
            scale = 3
            if (stProvider == "SMC / MSC") {
                fillColor = "brown"
            } else if (stProvider == "MDN / DND") {
                fillColor = "red"
            } else if (stProvider == "NAV Canada") {
                fillColor = "yellow"
            } else if (stProvider == "MELCC") {
                fillColor = "blue"
            } else if (stProvider == "ALCAN") {
                fillColor = "orange"
            } else if (stProvider == "DCF") {
                fillColor = "green"
            } else if (stProvider == "HYDRO") {
                fillColor = "purple"
            } else if (stProvider == "SOPFEU") {
                fillColor = "cyan"
            } else if (stProvider == "FADQ") {
                fillColor = "beige"
            }
        } 
        if (stName == "✈ Montréal - P.-E.-Trudeau") {
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "red",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
          }
        } else if (feature.getProperty('selected')) {
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "red",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
          }

        } else {
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "black",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
        }
        }
        return {
            icon: symbol,
            title: stName
        }
        
    });

    fetch("data/stations2.json")
       .then(response => response.json())
       .then(data => {

       var way = data.features
   
       var allVariables = []
       var stNames = []
       var stActivity = []

    


       for (var i = 0; i < way.length; i++ ) {
        allVariables.push([way[i].properties.name, way[i].properties.provider, way[i].geometry.coordinates[0], way[i].geometry.coordinates[1], way[i].properties.code.TC, way[i].properties.firstyearofactivity, way[i].properties.lastyearofactivity])
        stNames.push(way[i].properties.name)

        stActivity.push(way[i].properties.active)
       }

      
/*     ////// pour un tableau 1D //////
       function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
      }

*/  

      ////// pour un tableau mulit-D //////
      const res = allVariables.reduce((a, c) => {
        if (!a.find(v => v[0] === c[0])) {
          a.push(c);
        }
        return a;
      }, []);


      //var resr = allVariables.filter(onlyUnique);
      //var oneStNames = stNames.filter(onlyUnique);
  
      

      
     
    
      var airportStNames = []
      var nonairportStNames = []

      for (let i=0; i<res.length; i++) {
        if (res[i][0][0] == "✈") {
          airportStNames.push([res[i][0].slice(2) + " ✈", res[i][1], res[i][2], res[i][3], res[i][4], res[i][5], res[i][6]])
        } else {
          nonairportStNames.push([res[i][0],res[i][1],res[i][2],res[i][3], res[i][4], res[i][5], res[i][6]])
        }
        
      }
      //airportStNames = airportStNames.split(",")
      //nonairportStNames = nonairportStNames.split(",")

      //airportStNames = airportStNames.splice(0, airportStNames.length-1);
      //nonairportStNames = nonairportStNames.splice(0, nonairportStNames.length-1);



      


      var uniqueStNames = airportStNames.concat(nonairportStNames);

      

      function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
      }


      uniqueStNames.sort(sortFunction)

      //uniqueStNames = uniqueStNames.sort();

     

      
      
    
      var stNamesOptions = ""

      for (let x of uniqueStNames) {
        if (x[0] == "Montréal - P.-E.-Trudeau ✈") {
          stNamesOptions += "<option selected=\"selected\"> " + x[0] + " </option>" + ","
        } else {
          stNamesOptions += "<option> " + x[0] + " </option>" + ","
        }
      }




      stNamesOptions = stNamesOptions.split(",")
      stNamesOptions = stNamesOptions.splice(0, stNamesOptions.length-1);


      document.getElementById("selectSt").innerHTML = stNamesOptions;




              /* 
        ************
        1. POUR L'OUVERTURE DE PAGE,
        ALLEZ CHERCHER DANS LE FICHIER LES INFOS SUR CYUL (BELLE MANIERE)
        MAIS ÇA DEMANDE D'OUVRIR LES FICHIERS DONC CERTAINEMENT PLUS DE CHARGEMENT
        ************

          fetch("data/stations2.json")
            .then(response => response.json())
            .then(data => {
            console.log(data)
            var way = data.features
            console.log(way.length)
            var cyulInfo = []
            for (var i = 0; i < way.length; i++ ) {
              if (way[i].properties.code.TC == "CYUL") {
              cyulInfo.push(way[i])
              } 
              
            } 
            
            console.log(cyulInfo)
            var cyulCoordinate = cyulInfo[1].geometry.coordinates;
            var cyullat = cyulCoordinate[0];
            var cyullon = cyulCoordinate[1];
            var cyulCode = cyulInfo[1].properties.code.TC
            var cyulProvider = cyulInfo[1].properties.provider

            });
      */

      // SI JE MET LA LIGNE stValue=...ici, et que je met stValue en variable pour la fonction, l'action 'change' ne fonctionne plus. Voir sur Internet pourquoi par curiosité
      function newInfo() {
        var stValue = document.getElementById("selectSt").value
        console.log('ETDE0')
        console.log(stValue)

    
        var newNetwork = []
        var newLng = []
        var newLat = []
        var newCode = []

        for (let i = 0; i < uniqueStNames.length; i++) {
          if (stValue == uniqueStNames[i][0]) {
            var newNetwork = uniqueStNames[i][1]
            var newLng = uniqueStNames[i][2]
            var newLat = uniqueStNames[i][3]
            var newCode = uniqueStNames[i][4]
          }
        }

        map.setCenter( { lat: newLat, lng: newLng } )


        document.getElementById("lat").innerHTML = newLat
        document.getElementById("lng").innerHTML = newLng
        document.getElementById("ntw").innerHTML = newNetwork
        if (newCode == '') {
        document.getElementById("code").innerHTML = '/'
        } else {
        document.getElementById("code").innerHTML = newCode
        }


        makeWindGraph(stValue);


        return newLat, newLng, newNetwork, newCode
      }

      


    

        
/*
        markerLayer.setStyle(function(feature) {
     
          let stName     = feature.getProperty('name')
          let stProvider = feature.getProperty('provider')
          let stActive   = feature.getProperty('active')
          
          let scale, fillColor, symbol
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 3,
            strokeColor: "red",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
          }
          return {
            icon: symbol,
            title: stName
        }

          })

*/


      

    var filter = document.getElementById("selectSt")
    filter.addEventListener("change", newInfo)
  


    


    
    
    
    var graph = document.getElementById("toggles");
   
   // var windChart = document.createElement("div");
   // windChart.id = "windChartID";
   // windChart.style.height = "100%";
   // div2.appendChild(windChart);
   graph.style.paddingLeft = "10px";
   graph.style.paddingRight = "10px";
   graph.style.paddingBottom = "10px";
   //graph.style.height = "90%";

    

    
    
  
    var stValue = document.getElementById("selectSt").value



    function makeWindGraph (stValue) {

      let windSpeedVariable = 'Spd of Max Gust (km/h)';
      let windDirectionVariable = 'Dir of Max Gust (10s deg)';

      let dayVariable = 'Day'
      let monthVariable = 'Month'
      let yearVariable = 'Year'


      var period = ['allyears','allmonths','alldays'];


      var newCode = []
      var firstYear = []
      var lastYear = []
      
      for (let i = 0; i < uniqueStNames.length; i++) {
        if (stValue == uniqueStNames[i][0]) {
          newCode = uniqueStNames[i][4]
          firstYear = uniqueStNames[i][5]
          lastYear = uniqueStNames[i][6]
        }
      }
      var dirPromise = retrieveData(newCode, windDirectionVariable, firstYear, lastYear)
      var spdPromise = retrieveData(newCode, windSpeedVariable, firstYear, lastYear)    
      var yearPromise = retrieveData(newCode, yearVariable, firstYear, lastYear)
      var monthPromise = retrieveData(newCode, monthVariable, firstYear, lastYear)
      var dayPromise = retrieveData(newCode, dayVariable, firstYear, lastYear)
   


      Promise.all([yearPromise, monthPromise, dayPromise, dirPromise, spdPromise])
      .then(values => {
        let values0 = values[0]
        let values1 = values[1]
        let values2 = values[2]
        let values3 = values[3]
        let values4 = values[4]

        


        let windDirectionPeriod = selectFullPeriod(values0, values1, values2, values3, period)
        let windSpeedPeriod = selectFullPeriod(values0, values1, values2, values4, period)

        let mergedWind = [windDirectionPeriod, windSpeedPeriod];
        
        return mergedWind
      
      })
      .then(result => {
        windGraphic(result[0],result[1])
      });
  }

  makeWindGraph(stValue);


  var mapHMTL = document.getElementById("map")
  var map2HMTL = document.getElementById("map2")

  var analyseSection = document.getElementById("analyse")

  var quitAnalyse = document.getElementById("close")
  
  var analyseBtn = document.getElementById("analyseBtn")
  var advBtn = document.getElementById("warningBtn")
  var SelectBtn = document.getElementsByClassName("selectButton")
  var SelectAdvBtn = document.getElementsByClassName("selectAdvButton")

  var variableBtn = document.getElementById("variableSelector")
  var variableAdvBtn = document.getElementById("variableAdvSelector")

  var yearSelector = document.getElementById("yearSelector")

  var goBtn = document.getElementById("goButton")
  var goAdvBtn = document.getElementById("goAdvButton")
  var analyseG = document.getElementById("analyseGraphs")




  analyseBtn.addEventListener("mouseover", (event) => {
    analyseBtn.style["cursor"] = "pointer"
  });

  
  analyseBtn.addEventListener("click", (event) => {

    console.log("analyseClicked")
    mapHMTL.style["grid-area"] = "2 / 2 / span 1 / span 1"
    mapHMTL.style["border-width"] = "0px 0px 2px 0px"
    mapHMTL.style["border-style"] = "solid"
    mapHMTL.style["border-color"] = "rgb(56, 101, 134)"

    map2HMTL.style["grid-area"] = "2 / 2 / span 1 / span 1"
    map2HMTL.style["border-width"] = "0px 0px 2px 0px"
    map2HMTL.style["border-style"] = "solid"
    map2HMTL.style["border-color"] = "rgb(56, 101, 134)"


    analyseSection.style["visibility"] = "visible"
    variableBtn.style["visibility"] = "visible"
    variableAdvBtn.style["visibility"] = "hidden"
  //  yearSelector.style["marginLeft"] = "350px"





  var analyseSCN = document.getElementById("analyseGraphs")
  var columnLeft = document.getElementById("column-left")
  var columnRight = document.getElementById("column-right")

  while (columnLeft.firstChild) {
    columnLeft.removeChild(columnLeft.firstChild);
  }

  while (columnRight.firstChild) {
    columnRight.removeChild(columnRight.firstChild);
  }



  analyseSCN.style["gridTemplateColumns"] = "0% 100% 0%"


  var canvasSCN = document.getElementById('column-canvas')
  while (canvasSCN.firstChild) {
    canvasSCN.removeChild(canvasSCN.firstChild);
  }


  var newCanvas = document.createElement('canvas');
  newCanvas.id = 'analyseCanvas'
  newCanvas.style["backgroundColor"] = "white"
  newCanvas.style["margin"] = "auto"
  newCanvas.style["display"] = "block"


  newCanvas.style.width='80%';
  newCanvas.style.height='95%';

  canvasSCN.appendChild(newCanvas)

  
  });




  quitAnalyse.addEventListener("mouseover", (event) => {
    quitAnalyse.style["backgroundColor"] = "rgb(113, 121, 131, 0.2)"
  });

  quitAnalyse.addEventListener("mouseout", (event) => {
    quitAnalyse.style["backgroundColor"] = "rgb(113, 121, 131, 0)"
  });


  quitAnalyse.addEventListener("click", (event) => {
   
    mapHMTL.style["grid-area"] = "2 / 2 / span 2 / span 1"
    mapHMTL.style["border-width"] = "0px 0px 0px 0px"

    map2HMTL.style["grid-area"] = "2 / 2 / span 2 / span 1"
    map2HMTL.style["border-width"] = "0px 0px 0px 0px"


    analyseSection.style["visibility"] = "hidden"
    variableBtn.style["visibility"] = "hidden"
    variableAdvBtn.style["visibility"] = "hidden"



    /*
    for (var i=0; i < SelectBtn.length; i++) {
      SelectBtn[i].style["visibility"] = "hidden"
    }
    */

  });



  goBtn.addEventListener("mouseover", (event) => {
    goBtn.style["cursor"] = "pointer"
  });










  advBtn.addEventListener("mouseover", (event) => {
    advBtn.style["cursor"] = "pointer"
  });


  advBtn.addEventListener("click", (event) => {
    mapHMTL.style["grid-area"] = "2 / 2 / span 1 / span 1"
    mapHMTL.style["border-width"] = "0px 0px 2px 0px"
    mapHMTL.style["border-style"] = "solid"
    mapHMTL.style["border-color"] = "rgb(56, 101, 134)"


    map2HMTL.style["grid-area"] = "2 / 2 / span 1 / span 1"
    map2HMTL.style["border-width"] = "0px 0px 2px 0px"
    map2HMTL.style["border-style"] = "solid"
    map2HMTL.style["border-color"] = "rgb(56, 101, 134)"


    analyseSection.style["visibility"] = "visible"
    variableAdvBtn.style["visibility"] = "visible"
    variableBtn.style["visibility"] = "hidden"



    var analyseSCN = document.getElementById("analyseGraphs")
    var columnLeft = document.getElementById("column-left")
    var columnRight = document.getElementById("column-right")



    analyseSCN.style["gridTemplateColumns"] = "30% 40% 30%"




    var canvasSCN = document.getElementById('column-canvas')
    while (canvasSCN.firstChild) {
      canvasSCN.removeChild(canvasSCN.firstChild);
    }


    var newCanvas = document.createElement('canvas');
    newCanvas.id = 'analyseCanvas'
    newCanvas.style["backgroundColor"] = "white"
    newCanvas.style["margin"] = "auto"
    newCanvas.style["display"] = "block"


    newCanvas.style.width='100%';
    newCanvas.style.height='95%';
    //canvas.width  = canvas.offsetWidth;
    //canvas.height = canvas.offsetHeight;

      

    canvasSCN.appendChild(newCanvas)

    
    // yearSelector.style["marginLeft"] = "435px"
    //variableAdvBtn.style["marginLeft"] = "150px"


  });









  var canvas = document.querySelector('canvas');
  function fitToContainer(canvas) {
    var analyseG = document.getElementById("analyseGraphs")

    canvas.style.width = '80%';
    canvas.style.height = '95%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
   // analyseG.style.textAlign = "center";
  }
  fitToContainer(canvas);


  var stValue = document.getElementById("selectSt").value


  var newCode = []
  var firstYear = []
  var lastYear = []
  
  for (let i = 0; i < uniqueStNames.length; i++) {
    if (stValue == uniqueStNames[i][0]) {
      newCode = uniqueStNames[i][4]
      firstYear = uniqueStNames[i][5]
      lastYear = uniqueStNames[i][6]
    }
  }




  goBtn.addEventListener('click', (event) => {

    /*
    var canvas = document.getElementById('analyseCanvas')
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    */

    if (variableBtn.style["visibility"] == "visible") {
      console.log("OUI OUI")



      var canvasSCN = document.getElementById('column-canvas')
      while (canvasSCN.firstChild) {
        canvasSCN.removeChild(canvasSCN.firstChild);
      }

      var newCanvas = document.createElement('canvas');
      newCanvas.id = 'analyseCanvas'
      newCanvas.style["backgroundColor"] = "white"
      newCanvas.style["margin"] = "auto"
      newCanvas.style["display"] = "block"


      newCanvas.style.width='80%';
      newCanvas.style.height='95%';
      //canvas.width  = canvas.offsetWidth;
      //canvas.height = canvas.offsetHeight;

      canvasSCN.appendChild(newCanvas)

    

      var stValue = document.getElementById("selectSt").value
      var variableSCD = document.getElementById("variableSelector").value
      var yearSCD = document.getElementById("yearSelector").value
      var monthSCD = document.getElementById("monthOrPeriodSelector").value
      var daySCD = document.getElementById("daySelector").value

      var newCode = []
      var firstYear = []
      var lastYear = []
    
      for (let i = 0; i < uniqueStNames.length; i++) {
        if (stValue == uniqueStNames[i][0]) {
          newCode = uniqueStNames[i][4]
          firstYear = uniqueStNames[i][5]
          lastYear = uniqueStNames[i][6]
        }
      }
    
    

      let dayVariable = 'Day'
      let monthVariable = 'Month'
      let yearVariable = 'Year'

    
      var period = [yearSCD,monthSCD,daySCD]


    
      var yearPromise = retrieveData(newCode, yearVariable, firstYear, lastYear)
      var monthPromise = retrieveData(newCode, monthVariable, firstYear, lastYear)
      var dayPromise = retrieveData(newCode, dayVariable, firstYear, lastYear)
      var variablePromise = retrieveData(newCode, variableSCD, firstYear, lastYear)
      


    
    
    
    
      Promise.all([yearPromise, monthPromise, dayPromise, variablePromise])
      .then(values => {
        let values0 = values[0]
        let values1 = values[1]
        let values2 = values[2]
        let values3 = values[3]
        
      
    
        var dataArray = selectFullPeriod(values0, values1, values2, values3, period)

        makeGraphic(dataArray)
    
      });

    } else if (variableBtn.style["visibility"] == "hidden") {
      console.log("VICTOIRE")

      var analyseSCN = document.getElementById("analyseGraphs")
      var columnLeft = document.getElementById("column-left")
      var columnRight = document.getElementById("column-right")

      var textRight = document.getElementById("text-right")
      textRight.style["visibility"] = "visible" 

      columnLeft.style["visibility"] = "visible"


      var PODquestion = document.getElementById("PODquestion")
      var FARquestion = document.getElementById("FARquestion")
      var CSIquestion = document.getElementById("CSIquestion")
      var BIAISquestion = document.getElementById("BIAISquestion")


      var podSCN = document.getElementById("POD")
      var farSCN = document.getElementById("FAR")
      var csiSCN = document.getElementById("csi")
      var biaisSCN = document.getElementById("biais")





      /*
      var PODoverlay = document.getElementById("PODoverlay")
      var FARoverlay = document.getElementById("FARoverlay")
      var CSIoverlay = document.getElementById("CSIoverlay")
      var BIAISoverlay = document.getElementById("BIAISoverlay")

*/


      PODquestion.addEventListener("mouseover", (event) => {
        console.log("FONE")

        var PODoverlay = document.createElement("div")
        PODoverlay.innerHTML = "HDHHDHDHD"
        analyseSCN.appendChild(PODoverlay)
      })


      
      FARquestion.addEventListener("mouseover", (event) => {
        FARoverlay.style["visibility"] = "visible"
      })

      CSIquestion.addEventListener("mouseover", (event) => {
        CSIoverlay.style["visibility"] = "visible"
      })

      BIAISquestion.addEventListener("mouseover", (event) => {
        BIAISoverlay.style["visibility"] = "visible"
      })





      /*
      var textRight = document.createElement("div")
      textRight.innerHTML = 
      "D: succès" + "<br>" +
      "F: fausse alerte" + "<br>" +
      "MA: manqué (aucun WW émis)" + "<br>" +
      "MP0: manqué  ww émis trop tard" + "<br>" +
      "Mpi: manqué préavis insuffisant" + "<br>" +
      "MT: manqué timing" + "<br>" +
      "MQ: manqué quantité" + "<br>" +
      "U: Quasi succès" + "<br>" +
      "i: ignoré (quasi événement ou VTH/VBN) "

      columnRight.appendChild(textRight)
      textRight.style["padding"] = "20px"



      var buttonsContainer = document.createElement("div")
      buttonsContainer.style["width"] = "10px"
      
      var buttonOneLeft = document.createElement("button")
      buttonOneLeft.innerHTML = "POD"
      var questionmark = document.createElement("p")
      questionmark.innerHTML = "?"
      var buttonTwoLeft = document.createElement("button")
      buttonTwoLeft.innerHTML = "FAR"
      var buttonThreeLeft = document.createElement("button")
      buttonThreeLeft.innerHTML = "CSI"
      var buttonFourLeft = document.createElement("button")
      buttonFourLeft.innerHTML = "BIAIS"


      buttonsContainer.appendChild(buttonOneLeft)
      buttonsContainer.appendChild(questionmark)
      buttonsContainer.appendChild(buttonTwoLeft)
      buttonsContainer.appendChild(buttonThreeLeft)
      buttonsContainer.appendChild(buttonFourLeft)

      columnLeft.appendChild(buttonsContainer)

*/


      var canvasSCN = document.getElementById('column-canvas')
      while (canvasSCN.firstChild) {
        canvasSCN.removeChild(canvasSCN.firstChild);
      }


      var newCanvas = document.createElement('canvas');
      newCanvas.id = 'analyseCanvas'
      newCanvas.style["backgroundColor"] = "white"
      newCanvas.style["margin"] = "auto"
      newCanvas.style["display"] = "block"


      newCanvas.style.width='100%';
      newCanvas.style.height='95%';
      //canvas.width  = canvas.offsetWidth;
      //canvas.height = canvas.offsetHeight;

      

      canvasSCN.appendChild(newCanvas)


      var stValue = document.getElementById("selectSt").value
      var variableSCD = document.getElementById("variableAdvSelector").value
      var yearSCD = document.getElementById("yearSelector").value
      var monthSCD = document.getElementById("monthOrPeriodSelector").value
      var daySCD = document.getElementById("daySelector").value

      var newCode = []
      
    
      for (let i = 0; i < uniqueStNames.length; i++) {
        if (stValue == uniqueStNames[i][0]) {
          newCode = uniqueStNames[i][4]
        }
      }

      newCode = newCode.slice(1);  // pour matcher avec les codes de la verif

      // changer certains nom de stations dans le verif file pour que ça marche


      var coteArray = retrieveAdvData(newCode, variableSCD)
      console.log("DEUXIEME TEST")
      console.log(coteArray)
      coteArray
      .then(values => {
        console.log('valuestralala')
        console.log(values)


        let D = values[0]
        let MQ = values[1]
        let Mpi = values[2]
        let MT = values[3]
        let MA = values[4]
        let MP0 = values[5]
        let F = values[6]
        let U = values[7]
        let i = values[8]


        console.log("BCBCCBBC")

        let succes = D + MQ + Mpi + MT
        let manque = MA + MP0
  
        let POD = succes/(succes + manque)
        // let restPOD = 1 - POD
  
        let fausseAlerte = F + U
        
        let FAR = fausseAlerte/(succes + fausseAlerte)
        // let restFAR = 1 = FAR


        console.log(values)
        console.log(POD)
        console.log(FAR)

        makePie(values)




        var podNumber = document.createElement("div")
        podNumber.id = "podNumber"

        var farNumber = document.createElement("div")
        farNumber.id = "farNumber"


        if (document.contains(document.getElementById("podNumber"))) {
          document.getElementById("podNumber").remove();
        }


        if (document.contains(document.getElementById("farNumber"))) {
          document.getElementById("farNumber").remove();
        }


        var csiNumber = document.createElement("div")
        var biaisNumber = document.createElement("div")

        podNumber.innerHTML = POD + "%"
        farNumber.innerHTML = FAR + "%"


        podSCN.appendChild(podNumber)
        farSCN.appendChild(farNumber)





        
      })
    }
  });





 


  





  //yearSelection(yearID)










    // Get marker info upon click to display in left menu
    regionLayer.addListener("click", (event) => {
        let munName = event.feature.getProperty("munName");
        let countyId = event.feature.getProperty("countyId");

        // Clear previous info in bar
        var div = document.getElementById("info");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }

        // Insert new info in bar
        var newNode = document.createElement("div");
        newNode.innerHTML = "<strong><big>" + munName + " | " + countyId
        info.appendChild(newNode);
    }); 




    /*
    var arrowRight = document.getElementById("arrowRight");
    var arrowLeft = document.getElementById("arrowLeft");
    var toggles = document.getElementById("toggles");
    var myMap = document.getElementById("map");
    

    arrowRight.addEventListener("click", () => {
   
      //toggles.style.resize = 'horizontal'
      myMap.style.height = '30%';
      toggles.style.width = '700%';
      arrowRight.style.visibility = "hidden";
      arrowLeft.style.visibility = "visible";
      
    });

    arrowLeft.addEventListener("click", () => {
      myMap.style.height = '100%';
      toggles.style.width = '100%';
      arrowRight.style.visibility = 'visible';
      arrowLeft.style.visibility = 'hidden';
    });
*/

      

    //markerLayer.addListener("click", 


    markerLayer.addListener("click", (event) => {
      console.log("event")
      console.log(event)
    
    
    let stationName = event.feature.getProperty("name");
    
    let stationCode = event.feature.getProperty("code");
    let stationClss = event.feature.getProperty("class");
    let stationPvdr = event.feature.getProperty("provider");
    let stationActv = event.feature.getProperty("active");
    let stationLat = event.latLng.lat();
    let stationLng = event.latLng.lng();






    var StNameModified = "" 

    if (stationName[0] == "✈") {
      StNameModified = stationName.slice(2) + " ✈"
    } else {
      StNameModified = stationName
    }
 

    var changeSelect = ""

    for (let x of uniqueStNames) {
      if (x[0] == StNameModified) {
        changeSelect += "<option selected=\"selected\"> " + x[0] + " </option>" + ","
        var newNetwork = x[1]
        var newLng = x[2]
        var newLat = x[3]
        var newCode = x[4]
        
        
      } else {
        changeSelect += "<option> " + x[0] + " </option>" + ","
      }
    }

    changeSelect = changeSelect.split(",")
    changeSelect = changeSelect.splice(0, changeSelect.length-1);


    // newLat = stationLat mais pris autrement etc...

    document.getElementById("selectSt").innerHTML = changeSelect;
    document.getElementById("lat").innerHTML = newLat
    document.getElementById("lng").innerHTML = newLng
    document.getElementById("ntw").innerHTML = newNetwork
    if (newCode == '') {
      document.getElementById("code").innerHTML = '/'
    } else {
      document.getElementById("code").innerHTML = newCode
    }





    console.log("ETDE1")
    console.log(StNameModified)


    makeWindGraph(StNameModified);







    


    

    markerLayer.setStyle(function(feature) {
      
        let stName     = feature.getProperty('name')
        let stProvider = feature.getProperty('provider')
        let stActive   = feature.getProperty('active')
        
        let scale, fillColor, symbol
        if (stActive == 0) {
            scale = 1,
            fillColor = "red"
        } else {
            scale = 3
            if (stProvider == "SMC / MSC") {
                fillColor = "brown"
            } else if (stProvider == "MDN / DND") {
                fillColor = "red"
            } else if (stProvider == "NAV Canada") {
                fillColor = "yellow"
            } else if (stProvider == "MELCC") {
                fillColor = "blue"
            } else if (stProvider == "ALCAN") {
                fillColor = "orange"
            } else if (stProvider == "DCF") {
                fillColor = "green"
            } else if (stProvider == "HYDRO") {
                fillColor = "purple"
            } else if (stProvider == "SOPFEU") {
                fillColor = "cyan"
            } else if (stProvider == "FADQ") {
                fillColor = "beige"
            }
        } 
        if (feature.getProperty('selected')) {
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "red",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
          }

        } else {
          symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "black",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
        }
        }
        return {
            icon: symbol,
            title: stName
        }
        
    });

   
    
    event.feature.setProperty('selected', true)
    


    
      
   
  


    // Retrieve elevation according to LatLon (see function description below);
   // let stationEleve = displayLocationElevation(event.latLng, elevator);
  

    // Check manual or auto status of stations.
    //let manString = "";
    //let autoString = "";
    //let autoMinString = "";
    //if (event.feature.getProperty("dd_man") == 1) {
    //  manString =
    //    '<br><a href="https://dd.weather.gc.ca/observations/swob-ml/latest/' +
    ///     stationCode +
    //    '-MAN-swob.xml" target="_blank">Latest manual obs. (datamart)</a>';
    // }
    // if (event.feature.getProperty("dd_auto") == 1) {
    //   autoString =
    //     '<br><a href="https://dd.weather.gc.ca/observations/swob-ml/latest/' +
    //     stationCode +
    //     '-AUTO-swob.xml" target="_blank">Latest auto. obs. (datamart)</a>';
    //  }
    // if (event.feature.getProperty("dd_auto_min") == 1) {
    //   autoMinString =
    //     '<br><a href="https://dd.weather.gc.ca/observations/swob-ml/latest/' +
    //    stationCode +
    //     '-AUTO-minute-swob.xml" target="_blank">Latest minute auto. obs. (datamart)</a>';
    //  }

  
     

    /*
    var variableSelect = document.getElementById("variableSelector");
    variableSelect.style.visibility = "visible";
    variableSelect.addEventListener('change', () => {
      
      console.log(variableSelect.value);
    });
    
    var monthOrPeriodSelect = document.getElementById("monthOrPeriodSelector");
    monthOrPeriodSelect.style.visibility = "visible";

    var yearSelect = document.getElementById("yearSelector");
    yearSelect.style.visibility = "visible";

    var goToButton = document.getElementById("yearSelector");
    yearSelect.style.visibility = "visible";
    */





    /*
    // Clear previous info in bar
    var div = document.getElementById("info");
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }


    // Insert new info in bar
    var newNode = document.createElement("div");
    newNode.innerHTML =
      //    "<big><strong>" +
      //    stationCode +
      "<h3><strong><big>" +
      stationCode.TC +
      " | " +
      "</h3></big></strong><br>" +
          "Latitude: " +
          stationLat +
          "&deg;<br>" +
          "Longitude: " +
          stationLng +
          "&deg;<br>" +
          "Altitude: " +
        //  stationElev +
          " m<br><br>" +
      "R&eacute;seau: " +
      stationPvdr;
    //    "<br>" +
    //    "D&eacute;but des obs.: " +
    //    stationStart +
    //    "<br>" +
    //    "Fin des obs.: " +
    //    stationEnd +
    //    "<br>" +
    //    manString +
    ///    autoString +
    //    autoMinString +
    //   '<br><a href="https://weather.gc.ca/past_conditions/index_f.html?station=' +
    //    station24 +
    //    '" target="_blank">Past hourly obs (wx office)</a>';
    newNode.style.fontSize = "15px";
    newNode.style.paddingLeft = "10px";
    div.appendChild(newNode);
    */
    
    //test(3)

    
    
    var div2 = document.getElementById("graphics");
   // while (div2.firstChild) {
   //   div2.removeChild(div2.firstChild);
   // }

    // Insert new info in bar
    var windChart = document.createElement("div");
    windChart.id = "windChartID";
    windChart.style.height = "100%";
    div2.appendChild(windChart);
    div2.style.paddingLeft = "10px";
    div2.style.paddingRight = "10px";
    
    //windChart.style.top = "60px";
    
  

    let monthVariable = 'Month'
    let windSpeedVariable = 'Spd of Max Gust (km/h)';
    let windDirectionVariable = 'Dir of Max Gust (10s deg)';
    let monthOrPeriod = 'year'
    let temperatureVariable = 'Mean Temp (�C)'
    
    
  

  
    

    var button1 = document.createElement("button");
    button1.id = "periodSelect"
    button1.innerHTML = "Sélectionner une période";
 
    div2.appendChild(button1);
    console.log(typeof button1)
    console.log(button1)
    button1.addEventListener('click', () => {
      //div2.innerHTML = "";
      var windJanuary = document.createElement("button");
      var windFebruary = document.createElement("button");
      var windMarch = document.createElement("button");
      var windApril = document.createElement("button");
      var windMay = document.createElement("button");
      var windJune = document.createElement("button");
      var windJuly = document.createElement("button");
      var windAugust = document.createElement("button");
      var windSeptember = document.createElement("button");
      var windOctober = document.createElement("button");
      var windNovember = document.createElement("button");
      var windDecember = document.createElement("button");
      var backButton = document.createElement("button");

      windJanuary.innerHTML = "Janvier"
      windFebruary.innerHTML = "Fevrier"
      windMarch.innerHTML = "Mars"
      windApril.innerHTML = "Avril"
      windMay.innerHTML = "Mai"
      windJune.innerHTML = "Juin"
      windJuly.innerHTML = "Juillet"
      windAugust.innerHTML = "Aout"
      windSeptember.innerHTML = "Septembre"
      windOctober.innerHTML = "Octobre"
      windNovember.innerHTML = "Novembre"
      windDecember.innerHTML = "Décembre"
      backButton.innerHTML = "retour"


      div2.appendChild(windJanuary);
      div2.appendChild(windFebruary);
      div2.appendChild(windMarch);
      div2.appendChild(windApril);
      div2.appendChild(windMay);
      div2.appendChild(windJune);
      div2.appendChild(windJuly);
      div2.appendChild(windAugust);
      div2.appendChild(windSeptember);
      div2.appendChild(windOctober);
      div2.appendChild(windNovember);
      div2.appendChild(windDecember);
      div2.appendChild(backButton);



      windJanuary.id = '1';
      windFebruary.id = '2';
      windMarch.id = '3';
      windApril.id = '4';
      windMay.id = '5';
      windJune.id = '6';
      windJuly.id = '7';
      windAugust.id = '8';
      windSeptember.id = '9';
      windOctober.id = '10';
      windNovember.id = '11';
      windDecember.id = '12';
      backButton.id = 'Back';

      windJanuary.className = 'periodButton';
      windFebruary.className = 'periodButton';
      windMarch.className = 'periodButton';
      windApril.className = 'periodButton';
      windMay.className = 'periodButton';
      windJune.className = 'periodButton';
      windJuly.className = 'periodButton';
      windAugust.className = 'periodButton';
      windSeptember.className = 'periodButton';
      windOctober.className = 'periodButton';
      windNovember.className = 'periodButton';
      windDecember.className = 'periodButton';

      console.log("windFebruary")
      console.log(windFebruary)

      
      
      

      const allPeriodButton = document.querySelectorAll('.periodButton');
      
      allPeriodButton.forEach(element => {
        
        
        element.addEventListener('click', (event) => {
          monthOrPeriod = (event.srcElement.id);
          element.classList.add('active');
          
          
          makeWindGraph (monthOrPeriod);
          div2.appendChild(windChart);
        })
      });

    

      backButton.addEventListener('click', () => {
        windJanuary.style.visibility = "hidden"
        windFebruary.style.visibility = "hidden"
        windMarch.style.visibility = "hidden"
        windApril.style.visibility = "hidden"
        windMay.style.visibility = "hidden"
        windJune.style.visibility = "hidden"
        windJuly.style.visibility = "hidden"
        windAugust.style.visibility = "hidden"
        windSeptember.style.visibility = "hidden"
        windOctober.style.visibility = "hidden"
        windNovember.style.visibility = "hidden"
        windDecember.style.visibility = "hidden"
        backButton.style.visibility = "hidden";
      
        button1.style.visibility = "visible";
      })
    });



    document.getElementById("windChartID").innerHTML = "La rose des vents est actuellement disponible pour YUL uniquement"

  });












 
  
    
    // Add a listener for the click event. Display the elevation for the LatLng of
    // the click inside the infowindow.
 
 


    // Function to retrieve elevation according to LatLon (URL : https://developers.google.com/maps/documentation/elevation/overview)
    // Needs specific google API to work (https://developers.google.com/maps/documentation/elevation/get-api-key)
  /*
  function displayLocationElevation(location, elevator) {
    // Initiate the location request
    elevator
      .getElevationForLocations({
        locations: [location],
      })
      .then(({ results }) => {
     //   infowindow.setPosition(location);
        // Retrieve the first result
        if (results[0]) {
        
          // Open the infowindow indicating the elevation at the clicked position.
          console.log("Results found")
        } else {
          console.log("No results found");
        }
      })
      .catch((e) =>
        console.log("Elevation service failed due to: " + e)
      );

      return results[0];

  }

*/

console.log('testVerif')
let verifFile = './data/verif/JSON/CWUL.json' 
let verifVariable = 'Crit�re atteint'


function critereAtteint () {
  let verifArray = getVerif(verifFile, verifVariable);
  console.log(verifArray)
}

let verifArray = getVerif(verifFile, verifVariable);
  console.log(verifArray)


console.log("MAAAAAAAP")
console.log(typeof map)


console.log(map.styles[0].elementType)






var geoMetBtn = document.getElementById("geometBtn");
geoMetBtn.addEventListener('click', (event) => {

  console.log(event)



  let map2 = document.getElementById("map2")




 if (map2.style["visibility"] == "hidden") {

  let mapSecond = document.getElementById("map2")
  mapSecond.style["visibility"] = "visible"

  console.log("AGAAAIN")

  console.log('haaaaaaaaa')
  console.log(mapSecond.style["visibility"])
  

/*
  var map = document.getElementById("map")

  while (map.firstChild) {
    map.removeChild(firstmap.firstChild);
  }
*/


/* Nom du fichier : tutorial.js */

/**
 * Éléments de la fenêtre contextuelle
 */


let container = document.getElementById("popup");
let content = document.getElementById("popup-content");
let closer = document.getElementById("popup-closer");
let cmdButtons = document.getElementById("cmdBtn");
let geometSCN = document.getElementById("selectGeomet");
let selectTime = document.getElementById("selectTime");


geometSCN.style["visibility"] = "visible";
container.style["visibility"] = "visible";
cmdButtons.style["visibility"] = "visible";
selectTime.style["visibility"] = "visible";


/**
 * Créer un élément "Overlay" pour ancrer la fenêtre contextuelle sur la carte
 */
let overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
});


/**

 */
closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

let osmStandard = new ol.layer.Tile({
  source: new ol.source.OSM(),
  visible: true,
  title: "osmStandard"
});

let GDPS_TT = new ol.layer.Tile({
  opacity: 0.4,
  source: new ol.source.TileWMS({
    url: "https://geo.weather.gc.ca/geomet",
    params: { LAYERS: "GDPS.ETA_TT", TILED: true },
  }),
  title: "surfaceTemp",
  visible: true
});


let GDPS_HR = new ol.layer.Tile({
  opacity: 0.4,
  source: new ol.source.TileWMS({
    url: "https://geo.weather.gc.ca/geomet",
    params: { LAYERS: "GDPS.ETA_HR", TILED: true },
  }),
  title: "surfaceHR",
  visible: false
});

console.log("GDPS")
console.log(GDPS_TT)









let baseMaps = new ol.layer.Group({
  layers: [
    osmStandard
  ]
})


let layerMaps = new ol.layer.Group({
  layers: [
    GDPS_TT, GDPS_HR
  ]
})





console.log("layers")

let map2 = new ol.Map({
  target: "map2",
  overlays: [overlay],
  view: new ol.View({
    center: ol.proj.fromLonLat([-73.74, 45.47]),
    zoom: 7
  })
});

map2.addLayer(baseMaps)
map2.addLayer(layerMaps)







let selectLayer = document.getElementById("selectLayer")
selectLayer.addEventListener("change", (event) => {
  console.log("CNAHGES")


  layerMaps.getLayers().forEach(function(element, index, array) {
    let layerName = element.get("title");
    element.setVisible(layerName === selectLayer.value)
    console.log(element)
  });
  


})





map2.on("singleclick", function (evt) {
  let coordinate = evt.coordinate;
  let xy_coordinates = ol.coordinate.toStringXY(
    ol.proj.toLonLat(evt.coordinate),
    4
  );


  layerMaps.getLayers().forEach(function(element, index, array) {
    if (element.getVisible() == true) {
      console.log("ELEMENT")
      console.log(element)




      let viewResolution = map2.getView().getResolution();
      let wms_source = element.getSource();
      let url = wms_source.getFeatureInfoUrl(
        coordinate,
        viewResolution,
        "EPSG:3857",
        { INFO_FORMAT: "application/json" }
      );
      content.innerHTML = '<p align="center">Chargement...</p>';
      overlay.setPosition(evt.coordinate);


        var title = element.get("title")
        var unity;
        var text;
        if (title == "surfaceTemp") {
          unity = "°C"
          text = "Température de l'air à la surface"
        } else if (title == "surfaceHR") {
          unity = "%";
          text = "Humidité relative à la surface"
        }



      if (url) {
        fetch(url)
          .then(function (response) {
            return response.json();           
          })
          .then(function (json) {
            content.innerHTML = 
            `${text}<br>
            Coordonnées (Lon/Lat): </> <code>${xy_coordinates}</code><br>
            Valeur: </b><code>${Math.round(json.features[0].properties.value)} ${unity}</code>`;
          });
      }
        console.log(overlay)

    }
  })
});



let goStartBtn = document.getElementById("goStartBtn")
let preStepBtn = document.getElementById("preStepBtn")
let nextStepBtn = document.getElementById("nextStepBtn")
let goEndBtn = document.getElementById("goEndBtn")





layerMaps.getLayers().forEach(function(element, index, array) {
  if (element.getVisible() == true) {

    let layerName = element.getSource().getParams().LAYERS
    let currentTime = null;

    getXMLinfo(layerName).then((data) => {
      let startTime = data[0];
      let endTime = data[1];
      let preTimeStep = data[2];
      let defautTime = data[3];
    
      let timeStepString = preTimeStep.replace(/[^\d]/g,'');
      let timestep = parseInt(timeStepString);
      let timeInZ = defautTime.toISOString().split('.')[0]+"Z"

      console.log(preTimeStep)
      console.log(timeStepString)
      console.log(timestep)

      console.log("DAAAAAAAAAAATE")
      console.log(data)

      console.log(endTime)
      console.log(startTime)
      console.log(preTimeStep)
      console.log(defautTime)




      var el = []


      for (let i=0; i<250; i++) {
        
          el.push(new Date (startTime.setHours(startTime.getHours() + 3)).toISOString());
        if (el[i] == endTime.toISOString()) { break; }
      }

      console.log("HELLS")

      console.log(el)

      let le = []
      for (let x of el) {
        le.push(x.split('.')[0]+"Z")
      }

      console.log(le)
      console.log(defautTime)
      console.log(timeInZ)


      let timeList = []
      for (let x of le) {

        if (x == timeInZ) {
          timeList.push("<option selected=\"selected\">" + x + "</option>")

        } else {
          timeList.push("<option>" + x + "</option>")
        }
      }

      console.log("thats GDPS_TT")
      console.log(GDPS_TT)
      console.log(currentTime)
  

      console.log(timeList)



      document.getElementById("timeSelector").innerHTML = timeList


      nextStepBtn.addEventListener("click", (event) => {

        if (currentTime == null) {
          currentTime = defautTime
        } else {
          currentTime = currentTime
        }


        if (currentTime < endTime) {
          currentTime = new Date(currentTime);
          currentTime.setHours(currentTime.getHours() + timestep);
          updateLayers(element, currentTime);
          console.log(currentTime)
        } else {
          currentTime = currentTime
        }
      
       // stepForward(element, layerName, currentTime)
      })





      preStepBtn.addEventListener("click", (event) => {
        console.log("BACK")
        console.log(defautTime)
        console.log(startTime)


        if (currentTime == null) {
          currentTime = defautTime
        } else {
          currentTime = currentTime
        }

        if (currentTime > startTime) {
        console.log("BACK")

          currentTime = new Date(currentTime);
          currentTime.setHours(currentTime.getHours() - timestep);
          updateLayers(element, currentTime);
          console.log(currentTime)
        } else {
          currentTime = currentTime
        console.log("else")

        }
      
      })
      


     // document.getElementById("timeSelector").innerHTML = "<option selected=\"selected\">" + timeInZ + "</option>"
     // console.log("TIIIME")


    })
  }
})



goStartBtn.addEventListener("click", (event) => {
  console.log("1")
  console.log(GDPS_TT.getSource().getParams())
  GDPS_TT.getSource().params_.TIME = "2023-05-12T15:00:00Z"
  console.log("2")
  console.log(GDPS_TT.getSource().params_)
})






 } else if (map2.style["visibility"] == "visible") {

  console.log("Thisishidden")
  map2.style["visibility"] = "hidden"

 }

});




       


//console.log(newVariables[0])

/*
async function asyncCall() {
  console.log('calling');
  const result = await getVerif(verifFile);
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
*/

//let { array_WX, array_Fin, array_Date, array_rgn, array_WX2, array_Cote, array_Vigie, array_Source, array_Fin2, array_texte, array_Faible, array_Cote2, array_WOCN, array_Dateconvertie, array_Critereatteint, array_Debut, array_Debut2, array_Details, array_Extreme, array_Moderee, array_Preavis, array_Region, array_Termine, array_Elevee, array_Emis, array_Evenementsdetail, array_ImpactsCommentaires, arrayNiveaudImpact, array_WXconvertie, array_WXconvImpacts } = getVerif(verifFile)



});



//statVerif(array_WX)


google.maps.event.addEventListener(window, "load", initMap);
}




