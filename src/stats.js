// Opening JSON file

function yearSelection(yearID) {


    //year = '2019'
    
    fetch(`./data/CYUL ${yearID}_EN.json`)
    .then(response => {
       return response.json();
    })
    .then((jsondata) => {
        // Selecting data
    
        // Generate a string of strings
        let data_string = []
        for (let x of jsondata) {
            data_string += x["Max Temp (�C)"]  + ","
        }
    
        console.log(data_string)
        console.log("data_string")
    
    
        // Generate an array of strings
        data_array = data_string.split(",")
    
        console.log("data_array")
        console.log(data_array)
    
    
        // Array to use for graphs and not for stats (NaNs do not work in stats)
    
        
    
    
        // Replace undefined data by NaNs 
        function getAllIndexes(arr, val) {
            var indexes = [], i;
            for(i = 0; i < arr.length; i++)
                if (arr[i] === val)
                    indexes.push(i);
            return indexes;
        }
    
        var indexes = getAllIndexes(data_array, "");
    
        function myFunction(item, index) {
            if (item !== -1) {
                data_array[item] = NaN;
            }
        }
        indexes.forEach(myFunction);
    
        console.log("data_array2")
        console.log(data_array)
    
        
    
        // Array to use for stats and not graphs (NaNs are removed and it changes the index/value order)
    
    
        
        // // Generate an array of numbers
        arrOfNum = data_array.map(str => {
            return Number(str);
        })
    
    
        // Data arranged by months (must be done before removing NaNs otherwise days and values will be out of sync)
    
        // Done automatically
        
        // Date array
        var getDateArray = function(start, end) {
    
        var
          arr = new Array(),
          dt = new Date(start);
      
        while (dt <= end) {
          arr.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);
        }
        return arr;
        }
    
    
        var startDate = new Date("2019-01-01"); //YYYY-MM-DD
        var endDate = new Date("2019-12-31"); //YYYY-MM-DD
    
        var yearData = getDateArray(startDate, endDate)
    
        
    
    
    
        // Generate a string of strings
        var month = [];
        for (let i = 0; i < yearData.length; i++) {
            month += yearData[i].getMonth() + 1 + ',';
        };
    
        console.log('yearData')
        console.log(yearData)
    
        console.log('month')
        console.log(month)
    
        // Generate an array of strings
        monthNum = month.split(",");
    
        // Generate an array of numbers
        monthArray = monthNum.map(str => {
            return Number(str);
        });
    
        console.log('monthArray')
        console.log(monthArray)
    
        // Done manualy
        let January = arrOfNum.slice(0,31);
        let February = arrOfNum.slice(31,59);
        let March = arrOfNum.slice(59,90);
        let April = arrOfNum.slice(90,120);
        let May = arrOfNum.slice(120,151);
        let June = arrOfNum.slice(151,181);
        let July = arrOfNum.slice(181,212);
        let August = arrOfNum.slice(212,243);
        let September = arrOfNum.slice(243,273);
        let October = arrOfNum.slice(273,304);
        let November = arrOfNum.slice(304,334);
        let December = arrOfNum.slice(334,365);
        
        console.log('lenght')
        console.log(arrOfNum.length)
        console.log(monthArray.length)
    
        var Data_month = [], i = -1
        for ( var i = 0; i < arrOfNum.length; i++ ) {
            Data_month.push( [ arrOfNum[i], monthArray[i] ] );
          }
    
        console.log('Data_month')
        console.log(Data_month)
    
        console.log('Data_month[0][1]')
        console.log(Data_month[0][0])
    
        var monthData = []
    
        const cols = [1];
    
    
    
        const januaryData = Data_month.filter((x) => x[1] === 1);
        const january = januaryData.map(x => x[0]);
    
        const februaryData = Data_month.filter((x) => x[1] === 2);
        const february = februaryData.map(x => x[0]);
    
        const marchData = Data_month.filter((x) => x[1] === 3);
        const march = marchData.map(x => x[0]);
    
        const aprilData = Data_month.filter((x) => x[1] === 4);
        const april = aprilData.map(x => x[0]);
    
        const mayData = Data_month.filter((x) => x[1] === 5);
        const may = mayData.map(x => x[0]);
    
        const juneData = Data_month.filter((x) => x[1] === 6);
        const june = juneData.map(x => x[0]);
    
        const julyData = Data_month.filter((x) => x[1] === 7);
        const july = julyData.map(x => x[0]);
    
        const augustData = Data_month.filter((x) => x[1] === 8);
        const august = augustData.map(x => x[0]);
    
        const septemberData = Data_month.filter((x) => x[1] === 9);
        const september = septemberData.map(x => x[0]);
    
        const octoberData = Data_month.filter((x) => x[1] === 10);
        const october = octoberData.map(x => x[0]);
    
        const novemberData = Data_month.filter((x) => x[1] === 11);
        const november = novemberData.map(x => x[0]);
    
        const decemberData = Data_month.filter((x) => x[1] === 12);
        const december = decemberData.map(x => x[0]);
    
        console.log('january')
        console.log(january)
        console.log('february')
        console.log(february)
        console.log('march')
        console.log(march)
        console.log('april')
        console.log(april)
        console.log('may')
        console.log(may)
        console.log('june')
        console.log(june)
        console.log('july')
        console.log(july)
        console.log('august')
        console.log(august)
        console.log('september')
        console.log(september)
        console.log('october')
        console.log(october)
        console.log('november')
        console.log(november)
        console.log('december')
        console.log(december)
    
        
        
    
    
    
    
        // remove NaNs for the stats
    
        
    
        var statArray = arrOfNum.filter(function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        });
    
    
    
        // sum and average (can be done with mathjs via nmp)
    
    
        // method 1 for sum 
    
        const sum = statArray.reduce((a, b) => a + b, 0);
        
    
        // method 2 for sum 
    
        const sum2 = statArray.reduce(add, 0); // with initial value to avoid when the array is empty
    
        function add(accumulator, a) {
        return accumulator + a;
        }
    
        // method 3 for sum 
    
        function bigsum(arr) {
            var res = 0;
            for (i=0; i < arr.length; i++) {
                res += arr[i]
            }
            return res;
            }
    
        var sum3 = bigsum(statArray)
    
    
        // method for average
        const avg = (sum / statArray.length) || 0;
    
    
    
    
    
        console.log("sum")
        console.log(sum)
    
        console.log("sum2")
        console.log(sum2)
    
        console.log("avg")
        console.log(avg)
    
        console.log("sum3")
        console.log(sum3)
    
    
        
    
        // Graphic (Chart.js)
    
    
        let chartStatus = Chart.getChart("myChart"); // <canvas> id
        if (chartStatus != undefined) {
            chartStatus.destroy();
        }
        
        const labels = Object.keys(january)
        const data = {
            labels: labels,
            datasets: [{
                label: "temp",
                backgroundColor: 'rgb(255, 99, 132)',
                data: january,
            }]
        }
    
        const config = {
            type: "line",
            data: data,
            options: {}
        };
    
        const mtChart = new Chart(
            document.getElementById("myChart"),
            config
        );
    
        
    
    
    
    
    });
    
    
    
    }
    /*
    console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    export function test(x) {
      if (x>5) {
        console.log("reussi");
      } else {
        console.log("rate");
      }
    }
    
    test(6);
    */
    function monthSelection(stationID, monthID) {
    
    
    //let monthID = event.target.id;
    console.log(monthID)
    
    
    // Construct array of path to data files
    
    let startYear = 2002 //Correspond to oldest year of data files
    let allYears = Array.from(Array(20).keys())
    let period = []
    for (var i = 0; i < allYears.length; i++) {
        period += allYears[i] + startYear + ","
    }
    
    // Create array of strings
    period = period.split(",")
    period = period.splice(0, period.length-1); // Remove the last empty item due to "," in the for loop
    
    
    // Create array of numbers
    period = period.map(str => {
        return Number(str);
    })
    
    
    
    
    let urls = []
    for (var i = 0; i < period.length; i++) {
      urls += `./data/${stationID} ${period[i]}_EN.json` + ','
    }
    
    urls = urls.split(",")
    urls = urls.splice(0, urls.length-1);
    
    
    
    
    
    
    
    
    // // Load geoJSON data from every files
    
    Promise.all(urls.map(u=>fetch(u).then(responses => responses.json())
        )
    
    ).then(data => {
        let loadedData = data.flat();
    
    
    
    // Test pour mettre la recherche d'une variable dans une fontion //
        function retrieveData(stringName) {
    
          let dataTitle = []
          for (let x of loadedData) {
            dataTitle += x[stringName] + "," 
          }
          dataTitle = dataTitle.split(",")
    
          function getAllIndexes(arr, val) {
            var dataIndexes = [], i;
            for(var i = 0; i < arr.length; i++)
                if (arr[i] === val)
                dataIndexes.push(i);
            return dataIndexes;
          }
    
          var dataIndexes = getAllIndexes(dataTitle, "");
        
          function insertNaN(item, index) {
            if (item !== -1) {
              dataTitle[item] = NaN;
            }
          }
          dataIndexes.forEach(insertNaN);
    
          dataTitle = dataTitle.map(str => {
            return Number(str);
          })
    
          return dataTitle 
        }
    
    
        let variable1 = "Spd of Max Gust (km/h)";
        let variable2 = "Dir of Max Gust (10s deg)";
        let variable3 = "Month";
        let variable4 = "Max Temp (�C)";
    
    
        let windSpd = retrieveData(variable1);
        let windDir = retrieveData(variable2);
        let months = retrieveData(variable3);
        let maxTemp = retrieveData(variable4);
    
    
    
    
    
    
    
    
    // Create array with all variables
    
        let dataArray = []
        for ( var i = 0; i < windSpd.length; i++ ) {
          dataArray.push([windDir[i], windSpd[i], months[i], maxTemp[i]]);
          }
    
    
    
          // Construct periods of data
    
            if (monthID === 'January' || monthID === 'tempJanuary') {
              dataArray = dataArray.filter((x) => x[2] === 1);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            } 
            else if (monthID === 'February' || monthID === 'tempFebruary') {
              dataArray = dataArray.filter((x) => x[2] === 2);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'March' || monthID === 'tempMarch') {
              dataArray = dataArray.filter((x) => x[2] === 3);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'April' || monthID === 'tempApril') {
              dataArray = dataArray.filter((x) => x[2] === 4);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'May' || monthID === 'tempMay') {
              dataArray = dataArray.filter((x) => x[2] === 5);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'June' || monthID === 'tempJune') {
              dataArray = dataArray.filter((x) => x[2] === 6);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'July' || monthID === 'tempJuly') {
              dataArray = dataArray.filter((x) => x[2] === 7);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'August' || monthID === 'tempAugust') {
              dataArray = dataArray.filter((x) => x[2] === 8);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'September' || monthID === 'tempSeptember') {
              dataArray = dataArray.filter((x) => x[2] === 9);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'October' || monthID === 'tempOctober') {
              dataArray = dataArray.filter((x) => x[2] === 10);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'November' || monthID === 'tempNovember') {
              dataArray = dataArray.filter((x) => x[2] === 11);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'December' || monthID === 'tempDecember') {
              dataArray = dataArray.filter((x) => x[2] === 12);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'Year' || monthID === 'tempYear') {
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'Winter' || monthID === 'tempWinter') {
              dataArray = dataArray.filter((x) => x[2] === 1 || x[2] === 2 || x[2] === 3);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'Spring' || monthID === 'tempSpring') {
              dataArray = dataArray.filter((x) => x[2] === 4 || x[2] === 5 || x[2] === 6);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'Summer' || monthID === 'tempSummer') {
              dataArray = dataArray.filter((x) => x[2] === 7 || x[2] === 8 || x[2] === 9);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            else if (monthID === 'Fall' || monthID === 'tempFall') {
              dataArray = dataArray.filter((x) => x[2] === 10 || x[2] === 11 || x[2] === 12);
              dataArray = dataArray.map(x => [x[0],x[1],x[3]]);
            }
            
            
            
    
    
          // Function to return the average temperature by month for specifics wind directions
    
          function createWindTempData (degree) {
            const windTempArray = dataArray.map(x => [x[0],x[2]]);     // x[0] is the wind direction, x[2] is the temperature in the dataArray matrice 
            const degreesNum = windTempArray.filter((x) => x[0] === degree);  // keeping only rows that match a specific direction 
            
            const tempByMonth = degreesNum.map(x => x[1])  // Due to the 'map' functionnality that deleted column, the temperature of the matrice mergedWind2 was x[1]
            console.log('tempByMonth')
            console.log(tempByMonth)
            const sum = tempByMonth.reduce((a, b) => a + b, 0);
            const avg = (sum / tempByMonth.length) || 0;
    
            console.log('avg')
            console.log(avg)
            return avg
          }
    
          
      // Function to return wind speed for each direction 
          
          function createWindData(degree) {
            
    
           
            const arrayLength = dataArray.length
    
            const WindDirSpdArray = dataArray.map(x => [x[0],x[1]]);  // x[0] is the wind direction, [1] is the wind speed in the dataArray matrice
    
       
    
            const degreesNum = WindDirSpdArray.filter((x) => x[0] === degree);  // Keeping only rows that match a specific direction 
            
    
            // For one direction, create multiple arrays according to wind gust speed
    
            const degreesNum_30 = degreesNum.filter((x) => x[1] < 40);
            const degreesNum_40 = degreesNum.filter((x) => x[1] < 50 && x[1] >= 40);
            const degreesNum_50 = degreesNum.filter((x) => x[1] < 60 && x[1] >= 50);
            const degreesNum_60 = degreesNum.filter((x) => x[1] < 70 && x[1] >= 60);
            const degreesNum_70 = degreesNum.filter((x) => x[1] < 80 && x[1] >= 70);
            const degreesNum_80 = degreesNum.filter((x) => x[1] < 90 && x[1] >= 80);
            const degreesNum_90 = degreesNum.filter((x) => x[1] < 100 && x[1] >= 90);
            const degreesNum_100 = degreesNum.filter((x) => x[1] < 110 && x[1] >= 100);
            const degreesNum_up110 = degreesNum.filter((x) => x[1] >= 100);
    
    
            // Occurrence in percent for each of these array 
    
            const percent_30 = (degreesNum_30.length / arrayLength) * 100
            const percent_40 = (degreesNum_40.length / arrayLength) * 100
            const percent_50 = (degreesNum_50.length / arrayLength) * 100
            const percent_60 = (degreesNum_60.length / arrayLength) * 100
            const percent_70 = (degreesNum_70.length / arrayLength) * 100
            const percent_80 = (degreesNum_80.length / arrayLength) * 100
            const percent_90 = (degreesNum_90.length / arrayLength) * 100
            const percent_100 = (degreesNum_100.length / arrayLength) * 100
            const percent_up110 = (degreesNum_up110.length / arrayLength) * 100
    
            
    
          return [percent_30, percent_40, percent_50, percent_60]
    
        }
    
        console.log('dataArray')
        console.log(dataArray)
    
        let angles = Array.from(Array(36).keys())
    
        
        // Loop the functions for every 360 degrees with an increment of 10
        
        for (var i = 1; i < 37; i++) { 
          
          window["percent" + i] = createWindData(i);
         
           
        }; 
        
        console.log('percent1')
        console.log(percent1)
    
        console.log('percent2')
        console.log(percent2)
    
        console.log('percent3')
        console.log(percent3)
    
    
        for (var i = 1; i < 37; i++) {
          window['tempAvg' + i] = createWindTempData(i)
        }
    
    
        console.log('tempAdsdsdsvg1')
        console.log(tempAvg1)
    
        console.log('percent5')
        console.log(percent5)
    
        // Create array with angles to make the chart
    
        const angle = Array.from(Array(36).keys())
    
        
        const angle2 = angle.map(x => x+1)
        
        const angle3 = angle2.flatMap(i => [i,i,i,i]);  // Numbers of i must be the same as the number of element returned with the createWindData function
        
    
      
    
        // Create an array with the speed ranges 
    
        var speeds = ['30-39', '40-49', '50-59', '60-69']; // Numbers of item must be the same as the number of element returned with the createWindData function
        var speedsArray = [];
        for (var i = 0; i < 36; i++) {
            speedsArray = speedsArray.concat(speeds);
        }
        
    
        // Combine all data by angles into one array
    
        var percentArray = percent1.concat(percent2,percent3,percent4,percent5,percent6,percent7,percent8,percent9,percent10,percent11,percent12,percent13,percent14,percent15,percent16,percent17,percent18,percent19,percent20,percent21,percent22,percent23,percent24,percent25,percent26,percent27,percent28,percent29,percent30,percent31,percent32,percent33,percent34,percent35,percent36);
    
        var tempByWindDirArray = [tempAvg1];
        var tempByWindDirArray = tempByWindDirArray.concat(tempAvg2,tempAvg3,tempAvg4,tempAvg5,tempAvg6,tempAvg7,tempAvg8,tempAvg9,tempAvg10,tempAvg11,tempAvg12,tempAvg13,tempAvg14,tempAvg15,tempAvg16,tempAvg17,tempAvg18,tempAvg19,tempAvg20,tempAvg21,tempAvg22,tempAvg23,tempAvg24,tempAvg25,tempAvg26,tempAvg27,tempAvg28,tempAvg29,tempAvg30,tempAvg31,tempAvg32,tempAvg33,tempAvg34,tempAvg35,tempAvg36);
    
    
        
        
        // Create array that regroup all variables needed to make the chart
    
        var finalArray = [];
        for (var i = 0; i < angle3.length; i++) {
            finalArray.push([angle3[i]*10, speedsArray[i], percentArray[i]]);
          };
    
    
    
    
        // Need a third column in array for the temp by wind so the code for the chart can work
        let cheat = Array(36).fill(0.1);
        cheat = cheat.map(String);
    
    
        var finalTempByWindDirArray = [];
        for (var i = 0; i < angle2.length; i++) {
          finalTempByWindDirArray.push([angle2[i]*10, cheat[i], tempByWindDirArray[i]]);
        };
        
    
    
    
    
        var windObj = finalArray.map(x => ({
            angle: x[0],
            speed: x[1],
            percent: x[2]
        }));
    
    
        console.log('windObj')
        console.log(windObj)
    
    
    // Create object with names for the columns (needed for the chart)
        var tempObj = finalTempByWindDirArray.map(x => ({
          angle: x[0],
          speed: x[1],
          percent: x[2]
        }));
    
    
    
        console.log('windObj')
        console.log(windObj)
    
        console.log('tempObj')
        console.log(tempObj)
    
    
    
          
          
    
    
          function renderChart(data) { 
            let myChart =  JSC.chart('windChartID', {                         // remettre 'toggles' si je veux que ça prenne toute la place dans le 'div' 'toggles'
              debug: true, 
              type: 'radar column', 
              animation_duration: 1000, 
              title: { 
                label_text: 'Rose des vents', 
                position: 'center',
              }, 
              legend: { 
                title_label_text: 'Vitesse des rafales (en km/h)', 
                position: 'bottom', 
                template: '%icon %name', 
                reversed: true
              }, 
              annotations: [ 
                { 
                  label: { 
                    text: '', 
                    style_fontSize: 14 
                  }, 
                  position: 'inside bottom right'
                } 
              ], 
              defaultSeries_shape_padding: 0.02, 
              yAxis: { 
                defaultTick_label_text: '%value%', 
                scale: { type: 'stacked' }, 
                alternateGridFill: 'none'
              }, 
              xAxis: { 
                scale: { range: [0, 360], interval: 45 }, 
                customTicks: [ 
                  { value: 360, label_text: 'N' }, 
                  { value: 45, label_text: 'NE' }, 
                  { value: 90, label_text: 'E' }, 
                  { value: 135, label_text: 'SE' }, 
                  { value: 180, label_text: 'S' }, 
                  { value: 225, label_text: 'SW' }, 
                  { value: 270, label_text: 'W' }, 
                  { value: 315, label_text: 'NW' } 
                ] 
              }, 
              palette: [ 
                '#c62828', 
                '#ff7043', 
                '#fff176', 
                '#aed581', 
                '#80cbc4', 
                '#bbdefb'
              ], 
              defaultPoint: { 
                tooltip: 
                  '<b>%seriesName</b> %xValue° %yValue%'
              }, 
              series: JSC.nest() 
                .key('speed') 
                .key('angle') 
                .rollup('percent') 
                .series(data)
                .reverse() 
            }); 
            return myChart
          } 
    
    
          
    
    
          if (monthID === 'January' || monthID === 'February' || monthID === 'March' || monthID === 'April' || monthID === 'May' || monthID === 'June' || monthID === 'July' || monthID === 'August' || monthID === 'September' || monthID === 'October' || monthID === 'November' || monthID === 'December' || monthID === 'Year' || monthID === 'Winter' || monthID === 'Spring' || monthID === 'Summer' || monthID === 'Fall') {
            renderChart(windObj); 
          }
    
    
          if (monthID === 'tempJanuary' || monthID === 'tempFebruary' || monthID === 'tempMarch' || monthID === 'tempApril' || monthID === 'tempMay' || monthID === 'tempJune' || monthID === 'tempJuly' || monthID === 'tempAugust' || monthID === 'tempSeptember' || monthID === 'tempOctober' || monthID === 'tempNovember' || monthID === 'tempDecember' || monthID === 'tempYear' || monthID === 'tempWinter' || monthID === 'tempSpring' || monthID === 'tempSummer' || monthID === 'tempFall') {
            renderChart(tempObj); 
          }
    });
    };
    
    
    export {monthSelection}
    
    //document.getElementById('January').addEventListener('click', monthSelection)
    
    
    
      
    
        
    
        
         //   let windSpeed = []
        //    for (let x of jsondata) {
          //      windSpeed += x["Spd of Max Gust (km/h)"]  + ","
        //    }
    
    
       
    
    
    