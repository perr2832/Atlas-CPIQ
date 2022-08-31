let map, infoWindow;
window.addEventListener("load", initMap);
initMap();

// Initialize Google Map.
function initMap() {
  // Map settings.
  let mapProp = {
    zoom: 6,
    center: { lat: 50, lng: -72 },
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

  var QC_Counties = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": 1,
        "properties": {
          "countyName": "Les Îles-de-la-Madeleine",
          "countyType": "TE",
          "countyColor": "red"
        } 
      }, {
        "type": "Feature",
        "id": 2,
        "properties": {
          "countyName": "Le Rocher-Percé",
          "countyType": "MRC",
          "countyColor": "red"
        }
      }, {
        "type": "Feature",
        "id": 3,
        "properties": {
          "countyName": "La Côte-de-Gaspé",
          "countyType": "MRC",
          "countyColor": "red"
        }
      }, {
        "type": "Feature",
        "id": 4,
        "properties": {
          "countyName": "La Haute-Gaspésie",
          "countyType": "MRC",
          "countyColor": "red"
        }
      }, {
        "type": "Feature",
        "id": 5,
        "properties": {
          "countyName": "Bonaventure",
          "countyType": "MRC",
          "countyColor": "red"
        }
      }, {
        "type": "Feature",
        "id": 6,
        "properties": {
          "countyName": "Avignon",
          "countyType": "MRC",
          "countyColor": "red"
        }
      }, {
        "type": "Feature",
        "id": 7,
        "properties": {
          "countyName": "La Matapédia",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 8,
        "properties": {
          "countyName": "La Matanie",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 9,
        "properties": {
          "countyName": "La Mitis",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 10,
        "properties": {
          "countyName": "Rimouski-Neigette",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 11,
        "properties": {
          "countyName": "Les Basques",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 12,
        "properties": {
          "countyName": "Rivière-du-Loup",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 13,
        "properties": {
          "countyName": "Témiscouata",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 14,
        "properties": {
          "countyName": "Kamouraska",
          "countyType": "MRC",
          "countyColor": "blue"
        }
      }, {
        "type": "Feature",
        "id": 15,
        "properties": {
          "countyName": "Charlevoix-Est",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 16,
        "properties": {
          "countyName": "Charlevoix",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 17,
        "properties": {
          "countyName": "L'Islet",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 18,
        "properties": {
          "countyName": "Montmagny",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 19,
        "properties": {
          "countyName": "Bellechasse",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 20,
        "properties": {
          "countyName": "L'Île-d'Orléans",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 21,
        "properties": {
          "countyName": "La Côte-de-Beaupré",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 22,
        "properties": {
          "countyName": "La Jacques-Cartier",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 23,
        "properties": {
          "countyName": "Québec",
          "countyType": "TE",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 251,
        "properties": {
          "countyName": "Lévis",
          "countyType": "TE",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 26,
        "properties": {
          "countyName": "La Nouvelle-Beauce",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 27,
        "properties": {
          "countyName": "Robert-Cliche",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 28,
        "properties": {
          "countyName": "Les Etchemins",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 29,
        "properties": {
          "countyName": "Beauce-Sartigan",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 30,
        "properties": {
          "countyName": "Le Granit",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 31,
        "properties": {
          "countyName": "Les Appalaches",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 32,
        "properties": {
          "countyName": "L'Érable",
          "countyType": "MRC",
          "countyColor": "orange"
        }
      }, {
        "type": "Feature",
        "id": 33,
        "properties": {
          "countyName": "Lotbinière",
          "countyType": "MRC",
          "countyColor": "yellow"
        }
      }, {
        "type": "Feature",
        "id": 34,
        "properties": {
          "countyName": "Portneuf",
          "countyType": "MRC",
          "countyColor": "green"
        }
      }, {
        "type": "Feature",
        "id": 35,
        "properties": {
          "countyName": "Mékinac",
          "countyType": "MRC",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 36,
        "properties": {
          "countyName": "Shawinigan",
          "countyType": "TE",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 371,
        "properties": {
          "countyName": "Trois-Rivières",
          "countyType": "TE",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 372,
        "properties": {
          "countyName": "Les Chenaux",
          "countyType": "MRC",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 38,
        "properties": {
          "countyName": "Bécancour",
          "countyType": "MRC",
          "countyColor": "orange"
        }
      }, {
        "type": "Feature",
        "id": 39,
        "properties": {
          "countyName": "Arthabaska",
          "countyType": "MRC",
          "countyColor": "orange"
        }
      }, {
        "type": "Feature",
        "id": 40,
        "properties": {
          "countyName": "Les Sources",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 41,
        "properties": {
          "countyName": "Le Haut-Saint-François",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 42,
        "properties": {
          "countyName": "Le Val-Saint-François",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 43,
        "properties": {
          "countyName": "Sherbrooke",
          "countyType": "TE",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 44,
        "properties": {
          "countyName": "Coaticook",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 45,
        "properties": {
          "countyName": "Memphrémagog",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 46,
        "properties": {
          "countyName": "Brome-Missisquoi",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 47,
        "properties": {
          "countyName": "La Haute-Yamaska",
          "countyType": "MRC",
          "countyColor": "magenta"
        }
      }, {
        "type": "Feature",
        "id": 48,
        "properties": {
          "countyName": "Acton",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 49,
        "properties": {
          "countyName": "Drummond",
          "countyType": "MRC",
          "countyColor": "orange"
        }
      }, {
        "type": "Feature",
        "id": 50,
        "properties": {
          "countyName": "Nicolas-Yamaska",
          "countyType": "MRC",
          "countyColor": "orange"
        }
      }, {
        "type": "Feature",
        "id": 51,
        "properties": {
          "countyName": "Maskinongé",
          "countyType": "MRC",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 52,
        "properties": {
          "countyName": "D'Autray",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 53,
        "properties": {
          "countyName": "Pierre-De Saurel",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 54,
        "properties": {
          "countyName": "Les Maskoutains",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 55,
        "properties": {
          "countyName": "Rouville",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 56,
        "properties": {
          "countyName": "Le Haut-Richelieu",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 57,
        "properties": {
          "countyName": "La Vallée-du-Richelieu",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 58,
        "properties": {
          "countyName": "Longueuil",
          "countyType": "TE",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 59,
        "properties": {
          "countyName": "Marguerite-d'Youville",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 60,
        "properties": {
          "countyName": "L'Assomption",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 61,
        "properties": {
          "countyName": "Joliette",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 62,
        "properties": {
          "countyName": "Matawinie",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 63,
        "properties": {
          "countyName": "Montcalm",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 64,
        "properties": {
          "countyName": "Les Moulins",
          "countyType": "MRC",
          "countyColor": "lime"
        }
      }, {
        "type": "Feature",
        "id": 65,
        "properties": {
          "countyName": "Laval",
          "countyType": "TE",
          "countyColor": "olive"
        }
      }, {
        "type": "Feature",
        "id": 66,
        "properties": {
          "countyName": "Montréal",
          "countyType": "TE",
          "countyColor": "maroon"
        }
      }, {
        "type": "Feature",
        "id": 67,
        "properties": {
          "countyName": "Roussillon",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 68,
        "properties": {
          "countyName": "Les Jardins-de-Napierville",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 69,
        "properties": {
          "countyName": "Le Haut-Saint-Laurent",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 70,
        "properties": {
          "countyName": "Beauharnois-Salaberry",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 71,
        "properties": {
          "countyName": "Vaudreuil-Soulanges",
          "countyType": "MRC",
          "countyColor": "cyan"
        }
      }, {
        "type": "Feature",
        "id": 72,
        "properties": {
          "countyName": "Deux-Montagnes",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 73,
        "properties": {
          "countyName": "Thérèse-De Blainville",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 74,
        "properties": {
          "countyName": "Mirabel",
          "countyType": "TE",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 75,
        "properties": {
          "countyName": "La Rivière-du-Nord",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 76,
        "properties": {
          "countyName": "Argenteuil",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 77,
        "properties": {
          "countyName": "Les Pays-d'en-Haut",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 78,
        "properties": {
          "countyName": "Les Laurentides",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 79,
        "properties": {
          "countyName": "Antoine-Labelle",
          "countyType": "MRC",
          "countyColor": "#ffd8b1"
        }
      }, {
        "type": "Feature",
        "id": 80,
        "properties": {
          "countyName": "Papineau",
          "countyType": "MRC",
          "countyColor": "#aaffc3"
        }
      }, {
        "type": "Feature",
        "id": 81,
        "properties": {
          "countyName": "Gatineau",
          "countyType": "TE",
          "countyColor": "#aaffc3"
        }
      }, {
        "type": "Feature",
        "id": 82,
        "properties": {
          "countyName": "Les Collines-de-l'Outaouais",
          "countyType": "MRC",
          "countyColor": "#aaffc3"
        }
      }, {
        "type": "Feature",
        "id": 83,
        "properties": {
          "countyName": "La Vallée-de-la-Gatineau",
          "countyType": "MRC",
          "countyColor": "#aaffc3"
        }
      }, {
        "type": "Feature",
        "id": 84,
        "properties": {
          "countyName": "Pontiac",
          "countyType": "MRC",
          "countyColor": "#aaffc3"
        }
      }, {
        "type": "Feature",
        "id": 85,
        "properties": {
          "countyName": "Témiscamingue",
          "countyType": "MRC",
          "countyColor": "#9A6324"
        }
      }, {
        "type": "Feature",
        "id": 86,
        "properties": {
          "countyName": "Rouyn-Noranda",
          "countyType": "TE",
          "countyColor": "#9A6324"
        }
      }, {
        "type": "Feature",
        "id": 87,
        "properties": {
          "countyName": "Abitibi-Ouest",
          "countyType": "MRC",
          "countyColor": "#9A6324"
        }
      }, {
        "type": "Feature",
        "id": 88,
        "properties": {
          "countyName": "Abitibi",
          "countyType": "MRC",
          "countyColor": "#9A6324"
        }
      }, {
        "type": "Feature",
        "id": 89,
        "properties": {
          "countyName": "La Vallée-de-l'Or",
          "countyType": "MRC",
          "countyColor": "#9A6324"
        }
      }, {
        "type": "Feature",
        "id": 90,
        "properties": {
          "countyName": "La Tuque",
          "countyType": "TE",
          "countyColor": "purple"
        }
      }, {
        "type": "Feature",
        "id": 91,
        "properties": {
          "countyName": "Le Domaine-du-Roy",
          "countyType": "MRC",
          "countyColor": "#fffac8"
        }
      }, {
        "type": "Feature",
        "id": 92,
        "properties": {
          "countyName": "Maria-Chapdelaine",
          "countyType": "MRC",
          "countyColor": "#fffac8"
        }
      }, {
        "type": "Feature",
        "id": 93,
        "properties": {
          "countyName": "Lac-Saint-Jean-Est",
          "countyType": "MRC",
          "countyColor": "#fffac8"
        }
      }, {
        "type": "Feature",
        "id": 941,
        "properties": {
          "countyName": "Saguenay",
          "countyType": "TE",
          "countyColor": "#fffac8"
        }
      }, {
        "type": "Feature",
        "id": 942,
        "properties": {
          "countyName": "Le Fjord-du-Saguenay",
          "countyType": "MRC",
          "countyColor": "#fffac8"
        }
      }, {
        "type": "Feature",
        "id": 95,
        "properties": {
          "countyName": "La Haute-Côte-Nord",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 96,
        "properties": {
          "countyName": "Manicouagan",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 971,
        "properties": {
          "countyName": "Sept-Rivières",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 972,
        "properties": {
          "countyName": "Caniapiscau",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 981,
        "properties": {
          "countyName": "Minganie",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 982,
        "properties": {
          "countyName": "Le Golfe-du-Saint-Laurent",
          "countyType": "MRC",
          "countyColor": "#000075"
        }
      }, {
        "type": "Feature",
        "id": 991,
        "properties": {
          "countyName": "Jamésie",
          "countyType": "TE",
          "countyColor": "#dcbeff"
        }
      }, {
        "type": "Feature",
        "id": 992,
        "properties": {
          "countyName": "Kativik",
          "countyType": "TE",
          "countyColor": "#dcbeff"
        }
      }, {
        "type": "Feature",
        "id": 993,
        "properties": {
          "countyName": "Eeyou Istchee",
          "countyType": "TE",
          "countyColor": "#dcbeff"
        }
      }
    ] 
  }

  // Load GeoJson data.
  // This method is asynchronous. Therefore we have to use the optional callback feature to use the forEach method later on.
  let regionLayer = new google.maps.Data({ map: map });
  let region = ['01_YUL', '02_WBZ', '03_WIZ', '04_WEW', '05_YMX', '06_WJT', '07_MMY', '08_MLR', '09_MDO', '10_WMJ', '11_YWA', '12_WRC', '13_YUY', '14_WPK', '15_YNM', '16_YKQ', '17_YGL', '18_YAH', '19_YKL', '20_YWK', '21_YSC', '22_WHV', '23_MLU', '24_YRQ', '25_YQB', '26_MMY', '27_CHR', '28_WDQ', '29_WPD', '30_YBG', '31_YRJ', '32_YMT', '33_WNH', '34_TMA', '35_YYY', '36_GCL', '37_WSG', '38_WSF', '39_PNG', '40_MJN', '41_WOC', '42_YGP', '43_MNC', '44_MGZ', '45_YBC', '46_YZV', '47_YGV', '48_WBY', '49_YNA', '50_WDM', '51_YBX', '52_YGW', '53_YSK', '54_YMU', '55_YPH', '56_YPX', '57_YKO', '58_YIK', '59_YZG', '60_YKG', '61_YHA', '62_YAS', '63_YLA', '64_YTQ', '65_YVP', '66_YLU']

  for (let step = 0; step < 66; step++) {
    regionLayer.loadGeoJson('data/pol/' + region[step] + '.json')
  }

  let regionLayer2 = new google.maps.Data({ map: map });
  regionLayer2.loadGeoJson("data/public_zones.json");

  //let markerLayer = new google.maps.Data({ map: map });
  //markerLayer.loadGeoJson("data/stations.json");

  // Style GeoJson data.
  // Set style for colored municipality polygons and points.
  regionLayer.setStyle(function(feature) {
    munName  = feature.getProperty('munName')
    pop      = feature.getProperty('pop')
    munType  = feature.getProperty('munType')
    countyId = feature.getProperty('countyId')

    // Find population density of each municipality.
    var bounds = [];
    feature.getGeometry().forEachLatLng(function(path) {
      bounds.push(path)
    })
    var area = google.maps.geometry.spherical.computeArea(bounds)/1e6
    var density = pop / area

    let fillOpacity = 0.75
    if (munType == "NO" | munType == "TI") {
      fillOpacity = 0.25
    }

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
      fillColor = "#ffff00"
    } else {
      fillColor = "yellow"
    } 

    var scale 
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

    for (var i = 0, len = QC_Counties.features.length; i < len; i++) {
        if (QC_Counties.features[i].id == countyId) {
          fillColor = QC_Counties.features[i].properties.countyColor
        }
      }
    
        
    symbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 0,
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
          strokeColor: "red",
          strokeOpacity: 1,
          strokeWeight: 3,
          zIndex: 2
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
