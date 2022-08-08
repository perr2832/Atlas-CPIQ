let map, infoWindow;
window.addEventListener("load", initMap);
initMap();

// Initialize Google Map.
function initMap() {
  // Map settings.
  let mapProp = {
    zoom: 8,
    center: { lat: 48.4, lng: -70.8 },
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
    ]};
  map = new google.maps.Map(document.getElementById("map"), mapProp);
  infoWindow = new google.maps.InfoWindow();
   
  // Load GeoJson data.
  // This method is asynchronous. Therefore we have to use the optional callback feature to use the forEach method later on.
  let regionLayer = new google.maps.Data({ map: map });
  
  regionLayer.loadGeoJson("data/pol/30_YBG.json")
  /*regionLayer.loadGeoJson("data/pol/29_WPD.json")
  regionLayer.loadGeoJson("data/pol/28_WDQ.json")
  regionLayer.loadGeoJson("data/pol/27_CHR.json")
  regionLayer.loadGeoJson("data/pol/26_MMY.json")
  regionLayer.loadGeoJson("data/pol/25_YQB.json")
  regionLayer.loadGeoJson("data/pol/24_YRQ.json")
  regionLayer.loadGeoJson("data/pol/23_MLU.json")
  regionLayer.loadGeoJson("data/pol/22_WHV.json")
  regionLayer.loadGeoJson("data/pol/21_YSC.json")
  regionLayer.loadGeoJson("data/pol/20_YWK.json")
  regionLayer.loadGeoJson("data/pol/19_YKL.json")
  regionLayer.loadGeoJson("data/pol/17_YGL.json")
  regionLayer.loadGeoJson("data/pol/16_YKQ.json")
  regionLayer.loadGeoJson("data/pol/15_YNM.json")
  regionLayer.loadGeoJson("data/pol/14_WPK.json")
  regionLayer.loadGeoJson("data/pol/13_YUY.json")
  regionLayer.loadGeoJson("data/pol/12_WRC.json")
  regionLayer.loadGeoJson("data/pol/11_YWA.json")
  regionLayer.loadGeoJson("data/pol/10_WMJ.json")
  regionLayer.loadGeoJson("data/pol/09_MDO.json")
  regionLayer.loadGeoJson("data/pol/08_MLR.json")
  regionLayer.loadGeoJson("data/pol/07_MMY.json")
  regionLayer.loadGeoJson("data/pol/06_WJT.json")
  regionLayer.loadGeoJson("data/pol/05_YMX.json")
  regionLayer.loadGeoJson("data/pol/04_WEW.json")
  regionLayer.loadGeoJson("data/pol/03_WIZ.json")
  regionLayer.loadGeoJson("data/pol/02_WBZ.json")
  regionLayer.loadGeoJson("data/pol/01_YUL.json")*/

  let regionLayer2 = new google.maps.Data({ map: map });
  regionLayer2.loadGeoJson("data/public_zones.json");

  //let markerLayer = new google.maps.Data({ map: map });
  //markerLayer.loadGeoJson("data/stations.json");

  // Style GeoJson data.
  // Set style for colored municipality polygons and points.
  regionLayer.setStyle(function(feature) {
    munName = feature.getProperty('munName')
    pop     = feature.getProperty('pop')
    var bounds = [];
    feature.getGeometry().forEachLatLng(function(path) {
      bounds.push(path)
    })
    var area = google.maps.geometry.spherical.computeArea(bounds)/1e6
    var density = pop / area
    let fillOpacity = 0.75
    var scale
        
    if (density >= 10000) {
      fillColor = "#800000"
    } else if (density >= 5000) {
      fillColor = "#921f00"
    } else if (density >= 2000) {
      fillColor = "#a33500"
    } else if (density >= 1000) {
      fillColor = "#b44a00"
    } else if (density >= 500) {
      fillColor = "#c35f00"
    } else if (density >= 200) {
      fillColor = "#d07500"
    } else if (density >= 100) {
      fillColor = "#dc8b00"
    } else if (density >= 50) {
      fillColor = "#e7a100"
    } else if (density >= 20) {
      fillColor = "#f0b800"
    } else if (density >= 10) {
      fillColor = "#f7cf00"
    } else if (density >= 5) {
      fillColor = "#fce700"
    } else if (density >= 2) {
      fillColor = "#ffff00",
      fillOpacity = 0.5
    } else {
      fillColor = "yellow",
      fillOpacity = 0.25
    } 

    if (pop >= 1000000) {
      scale = 8
    } else if (pop >= 500000) {
      scale = 7.5
    } else if (pop >= 200000) {
      scale = 7
    } else if (pop >= 100000) {
      scale = 6.5
    } else if (pop >= 50000) {
      scale = 6
    } else if (pop >= 20000) {
      scale = 5.5
    } else if (pop >= 10000) {
      scale = 5
    } else if (pop >= 5000) {
      scale = 4.5
    } else if (pop >= 2000) {
      scale = 4
    } else if (pop >= 1000) {
      scale = 3.5
    } else if (pop >= 500) {
      scale = 3
    } else if (pop >= 200) {
      scale = 2.5
    } else {
      scale = 2
    } 
        
    symbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: scale,
      strokeColor: "black",
      strokeWeight: 1,
      fillColor: "cyan",
      fillOpacity: 0.7
    } 
    return {
      fillColor: fillColor,
      fillOpacity: fillOpacity,
      strokeColor: "black",
      strokeOpacity: 1,
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
          strokeWeight: 3
      }
  })

    /* markerLayer.setStyle(function(feature) {
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
    }) */

    // Get marker info upon click to display in left menu
    regionLayer.addListener("click", (event) => {
      console.log("test")
      regionLayer.revertStyle();
      regionLayer.overrideStyle(event.feature, {
        strokeColor: 'red',
        strokeWeight: 3,
        zIndex: 10
      });
        let munName = event.feature.getProperty("munName");
        let countyId = event.feature.getProperty("countyId");
        let pop = event.feature.getProperty("pop")
        var bounds = [];
        event.feature.getGeometry().forEachLatLng(function(path) {
          bounds.push(path)
        })
        var area = google.maps.geometry.spherical.computeArea(bounds)/1e6
        var density = pop / area
        console.log(density)

        // Clear previous info in bar
        var div = document.getElementById("info");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }

        // Insert new info in bar
        var newNode = document.createElement("div");
        newNode.innerHTML = "<strong><big>" + munName + " | " + countyId + "<br>" + pop;
        info.appendChild(newNode);
    }); 

    markerLayer.addListener("click", (event) => {
    // Get Geojson info to display.
    let stationName = event.feature.getProperty("name");
    let stationCode = event.feature.getProperty("code");
    let stationClss = event.feature.getProperty("class");
    let stationPvdr = event.feature.getProperty("provider");
    let stationActv = event.feature.getProperty("active");
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


}
