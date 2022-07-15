let map, infoWindow;
initMap();

// Initialize Google Map.
function initMap() {
    // Map settings.
    let mapProp = {
        zoom: 7,
        center: { lat: 48, lng: -71 },
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
    markerLayer.loadGeoJson("data/stations.json");



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
        /* if (regionId == 1) {fillColor = "#808000"};
        if (regionId == 2) {fillColor = "#ffe119"};
        if (regionId == 3) {fillColor = "#4363d8"};
        if (regionId == 4) {fillColor = "#fabed4"};
        if (regionId == 5) {fillColor = "#3cb44b"};
        if (regionId == 6) {fillColor = "#e6194B"};
        if (regionId == 7) {fillColor = "#dcbeff"};
        if (regionId == 8) {fillColor = "#800000"};
        if (regionId == 9) {fillColor = "#f032e6"};
        if (regionId == 10) {fillColor = "#42d4f4"};
        if (regionId == 11) {fillColor = "#aaffc3"};
        if (regionId == 12) {fillColor = "#fffac8"};
        if (regionId == 13) {fillColor = "#469990"};
        if (regionId == 14) {fillColor = "#9A6324"};
        if (regionId == 15) {fillColor = "#bfef45"};
        if (regionId == 16) {fillColor = "#911eb4"};
        if (regionId == 17) {fillColor = "#f58231"}; */
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
        symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: scale,
            strokeColor: "black",
            strokeWeight: 1,
            fillColor: fillColor,
            fillOpacity: 1
        }
        return {
            icon: symbol,
            title: stName
        }
    })

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

    markerLayer.addListener("click", (event) => {
    // Get Geojson info to display.
    let stationName = event.feature.getProperty("name");
    let stationCode = event.feature.getProperty("code");
    let stationClss = event.feature.getProperty("class");
    let stationPvdr = event.feature.getProperty("provider");
    let stationActv = event.feature.getProperty("active");
    let stationCord = event.feature.getGeometry("coordinates");
    let stationElev = stationCord[2];
    console.log(stationElev);
    console.log(stationLog);
    let stationLat = event.latLng.lat();
    let stationLng = event.latLng.lng();

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
      "<strong><big>" +
      stationCode.TC +
      " | " +
      stationCord +
      "</big></strong><br>" +
          "Latitude: " +
          stationLat +
          "&deg;<br>" +
          "Longitude: " +
          stationLng +
          "&deg;<br>" +
          "Altitude: " +
          stationElev +
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
    info.appendChild(newNode);
  });

  var windrosedata = [{
    r: [2.01, 2.76, 1.45, 0.63, 0.79, 0.95, 1.13, 1.07, 0.83, 1.39, 2.57, 2.72, 2.16, 1.35, 1.25, 1.47],
    theta: ["nord", "nne", "n-e", "ene", "est", "ese", "s-e", "sse", "sud", "sso", "s-o", "oso", "ouest", "ono", "n-o", "nno"],
    name: "0-9 km/hr",
    marker: {color: "#003f5c"},
    type: "barpolar"
 }, {
    r: [1.68, 6.34, 4.07, 1.17, 0.75, 0.86, 1.28, 1.93, 0.96, 1.72, 4.04, 6.07, 4.62, 2.13, 1.18, 0.86],
    theta: ["nord", "nne", "n-e", "ene", "est", "ese", "s-e", "sse", "sud", "sso", "s-o", "oso", "ouest", "ono", "n-o", "nno"],
    name: "10-19 km/hr",
    marker: {color: "#58508d"},
    type: "barpolar"
 }, {
    r: [0.39, 3.04, 2.89, 0.56, 0.14, 0.26, 0.65, 1.06, 0.20, 0.50, 2.46, 5.54, 3.82, 1.35, 0.41, 0.20],
    theta: ["nord", "nne", "n-e", "ene", "est", "ese", "s-e", "sse", "sud", "sso", "s-o", "oso", "ouest", "ono", "n-o", "nno"],
    name: "20-29 km/hr",
    marker: {color: "#bc5090"},
    type: "barpolar"
 }, {
    r: [0.06, 0.81, 1.03, 0.16, 0.01, 0.04, 0.26, 0.27, 0.03, 0.13, 1.23, 2.91, 1.81, 0.52, 0.10, 0.03],
    theta: ["nord", "nne", "n-e", "ene", "est", "ese", "s-e", "sse", "sud", "sso", "s-o", "oso", "ouest", "ono", "n-o", "nno"],
    name: "30-39 km/hr",
    marker: {color: "#ff6361"},
    type: "barpolar"
 }, {
    r: [0.02, 0.29, 0.40, 0.05, 0.00, 0.00, 0.02, 0.06, 0.00, 0.03, 0.38, 1.03, 0.50, 0.12, 0.02, 0.00],
    theta: ["nord", "nne", "n-e", "ene", "est", "ese", "s-e", "sse", "sud", "sso", "s-o", "oso", "ouest", "ono", "n-o", "nno"],
    name: "40+ km/hr",
    marker: {color: "#ffa600"},
    type: "barpolar"
  }
]
var layout = {
 title: "Vent soutenu à CYUL (7025250)",
 font: {size: 16},
 legend: {
    font: {size: 14}, 
    x: 0.63, 
    y: 0.2
 },
 polar: {
    barmode: "stack",
    bargap: 0,
    domain: {x: [0.27, 0.57]},
    angularaxis: {direction: "clockwise", ticklabelstep: 2},
    radialaxis: { 
       ticks: "", 
       range: [0, 20],
       ticksuffix: "%",
       tickfont: {size: 12},
       tickangle: 90,
       tickvals: [5, 10, 15, 20],
       side: "counterclockwise",
       angle: 90
       },
    },
    annotations: [{
      text: "hiver (DJF)",
      font: {size: 16},
      showarrow: false,
      x: 0.78,
      y: 0.92
      }, {
      text: "années: 1953–2013",
      font: {size: 12},
      showarrow: false,
      x: 0.78,
      y: 0.84
      }, {
      text: "obs.: 101 884",
      font: {size: 12},
      showarrow: false,
      x: 0.78,
      y: 0.78
    }
 ]
}

Plotly.newPlot("myDiv", windrosedata, layout)

 /*  // Station code when hovering over marker.
  regionLayer.addListener("mouseover", (event) => {
    infoWindow.setContent(
        "<b>" + event.feature.getProperty("munName") + "</b>"
    );
    infoWindow.setPosition(event.latLng);
    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -10) });
    infoWindow.open(map);
    //marker.setIcon(stationIcon2);
});
map.data.addListener("mouseout", () => {
    infoWindow.close();
    //marker.setIcon(stationIcon);
}); */

  google.maps.event.addDomListener(window, "load", initMap);
}

function StationSelection()  
{  
    var checkboxes = document.getElementsByName("access");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 2)  
    {  
        alert("You can't select more than two favorite pets!");  
        return false;  
    }  
}
