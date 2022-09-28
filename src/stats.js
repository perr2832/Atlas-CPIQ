// Opening JSON file

function yearSelection(yearID) {


//year = '2019'

fetch(`./CYUL ${yearID}_EN.json`)
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




function monthSelection(monthID) {



allYearsID = [2019, 2020];
console.log('typeof allYearsID[0]')
console.log(typeof allYearsID[0])
console.log(typeof allYearsID)
console.log(allYearsID)


startYear = 2002
allYearsData = Array.from(Array(20).keys())
sampleYears = []
for (i = 0; i < allYearsData.length; i++) {
    sampleYears += allYearsData[i] + startYear + ","
}
console.log('sampleYears')
console.log(sampleYears)


sampleYears = sampleYears.split(",")
console.log('sampleYears')
console.log(sampleYears)


sampleYears = sampleYears.map(str => {
    return Number(str);
})


console.log('sampleYears')
console.log(sampleYears)

urlsSample = []
for (i = 0; i < sampleYears.length; i++) {
    urlsSample += `./CYUL ${sampleYears[i]}_EN.json` + ','
}

urlsSample = urlsSample.split(",")



console.log('urlsSample')
console.log(urlsSample)




urls = []
for (i = 0; i < urlsSample.length; i++) {
    urls += urlsSample[i] + ','
}

urls = urls.split(",")
urls = urls.splice(0, urls.length-3)

console.log('urls')
console.log(urls)
console.log(typeof urls[0])







const requests = urls.map(u=>fetch(u));

Promise.all(urls.map(u=>fetch(u).then(responses => responses.json())
    )

).then(data => {
    finalResult = data.flat();



    let windSpd = []
    for (let x of finalResult) {
        windSpd += x["Spd of Max Gust (km/h)"]  + ","
    }
    windSpd = windSpd.split(",")

    console.log('windSpd')
    console.log(windSpd)

    
// Replace undefined data by NaNs 
function getAllIndexes(arr, val) {
    var windIndexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
        windIndexes.push(i);
    return windIndexes;
}

var windIndexes = getAllIndexes(windSpd, "");

function myFunction(item, index) {
    if (item !== -1) {
        windSpd[item] = NaN;
    }
}
windIndexes.forEach(myFunction);

console.log("windSpd2")
console.log(windSpd)


    windSpd = windSpd.map(str => {
        return Number(str);
    })

    console.log("windSpd3")
console.log(windSpd)



let windDir = []
    for (let x of finalResult) {
        windDir += x["Dir of Max Gust (10s deg)"]  + ","
    }
    windDir = windDir.split(",")

    
    var windIndexes2 = getAllIndexes(windDir, "");


    function myFunction2(item, index) {
        if (item !== -1) {
            windDir[item] = NaN;
        }
    }
    windIndexes2.forEach(myFunction2);

    windDir = windDir.map(str => {
        return Number(str);
    })

    console.log('windDir')
    console.log(windDir)

    




    let monthDate = []
    for (let x of finalResult) {
      monthDate += x["Month"]  + ","
    }
    monthDate = monthDate.split(",")

    
    var monthIndexes = getAllIndexes(monthDate, "");


    function myFunction3(item, index) {
        if (item !== -1) {
          monthDate[item] = NaN;
        }
    }
    monthIndexes.forEach(myFunction3);

    monthArray = monthDate.map(str => {
        return Number(str);
    })

    console.log('monthArray')
    console.log(monthArray)


    let tempDate = []
    for (let x of finalResult) {
      tempDate += x["Max Temp (�C)"]  + ","
    }
    tempDate = tempDate.split(",")

    
    var tempIndexes = getAllIndexes(tempDate, "");


    function myFunction4(item, index) {
        if (item !== -1) {
          tempDate[item] = NaN;
        }
    }
    tempIndexes.forEach(myFunction4);

    tempArray = tempDate.map(str => {
        return Number(str);
    })

    console.log('tempDate')
    console.log(tempDate)








    let mergedWind = []

    for ( var i = 0; i < windSpd.length; i++ ) {
        mergedWind.push([windDir[i], windSpd[i], monthArray[i], tempArray[i]]);
      }
      

        if (monthID === 'January' || monthID === 'tempJanuary') {
          mergedWind = mergedWind.filter((x) => x[2] === 1);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        } 
        else if (monthID === 'February' || monthID === 'tempFebruary') {
          mergedWind = mergedWind.filter((x) => x[2] === 2);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'March' || monthID === 'tempMarch') {
          mergedWind = mergedWind.filter((x) => x[2] === 3);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'April' || monthID === 'tempApril') {
          mergedWind = mergedWind.filter((x) => x[2] === 4);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'May' || monthID === 'tempMay') {
          mergedWind = mergedWind.filter((x) => x[2] === 5);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'June' || monthID === 'tempJune') {
          mergedWind = mergedWind.filter((x) => x[2] === 6);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'July' || monthID === 'tempJuly') {
          mergedWind = mergedWind.filter((x) => x[2] === 7);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'August' || monthID === 'tempAugust') {
          mergedWind = mergedWind.filter((x) => x[2] === 8);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'September' || monthID === 'tempSeptember') {
          mergedWind = mergedWind.filter((x) => x[2] === 9);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'October' || monthID === 'tempOctober') {
          mergedWind = mergedWind.filter((x) => x[2] === 10);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'November' || monthID === 'tempNovember') {
          mergedWind = mergedWind.filter((x) => x[2] === 11);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'December' || monthID === 'tempDecember') {
          mergedWind = mergedWind.filter((x) => x[2] === 12);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'Year' || monthID === 'tempYear') {
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'Winter' || monthID === 'tempWinter') {
          mergedWind = mergedWind.filter((x) => x[2] === 1 || x[2] === 2 || x[2] === 3);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'Spring' || monthID === 'tempSpring') {
          mergedWind = mergedWind.filter((x) => x[2] === 4 || x[2] === 5 || x[2] === 6);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'Summer' || monthID === 'tempSummer') {
          mergedWind = mergedWind.filter((x) => x[2] === 7 || x[2] === 8 || x[2] === 9);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        else if (monthID === 'Fall' || monthID === 'tempFall') {
          mergedWind = mergedWind.filter((x) => x[2] === 10 || x[2] === 11 || x[2] === 12);
          mergedWind = mergedWind.map(x => [x[0],x[1],x[3]]);
        }
        
        
        


        console.log('mergedWind')
        console.log(mergedWind)
        console.log(monthID)

      

      function createWindTempData (degree) {
        const mergedWind2 = mergedWind.map(x => [x[0],x[2]]);
        const degreesNum = mergedWind2.filter((x) => x[0] === degree);
        
        const tempByMonth = degreesNum.map(x => x[1])
        console.log('tempByMonth')
        console.log(tempByMonth)
        const sum = tempByMonth.reduce((a, b) => a + b, 0);
        const avg = (sum / tempByMonth.length) || 0;

        console.log('avg')
        console.log(avg)
        return avg
      }


  
      
      function createWindData(degree) {


        const entireLength = mergedWind.length

        const mergedWind3 = mergedWind.map(x => [x[0],x[1]]);

        const degreesNum = mergedWind3.filter((x) => x[0] === degree);
        

        const degreesNum_30 = degreesNum.filter((x) => x[1] < 40);
        const degreesNum_40 = degreesNum.filter((x) => x[1] < 50 && x[1] >= 40);
        const degreesNum_50 = degreesNum.filter((x) => x[1] < 60 && x[1] >= 50);
        const degreesNum_60 = degreesNum.filter((x) => x[1] < 70 && x[1] >= 60);
        const degreesNum_70 = degreesNum.filter((x) => x[1] < 80 && x[1] >= 70);
        const degreesNum_80 = degreesNum.filter((x) => x[1] < 90 && x[1] >= 80);
        const degreesNum_90 = degreesNum.filter((x) => x[1] < 100 && x[1] >= 90);
        const degreesNum_100 = degreesNum.filter((x) => x[1] < 110 && x[1] >= 100);
        const degreesNum_up110 = degreesNum.filter((x) => x[1] >= 100);

        const percent_30 = (degreesNum_30.length / entireLength) * 100
        const percent_40 = (degreesNum_40.length / entireLength) * 100
        const percent_50 = (degreesNum_50.length / entireLength) * 100
        const percent_60 = (degreesNum_60.length / entireLength) * 100
        const percent_70 = (degreesNum_70.length / entireLength) * 100
        const percent_80 = (degreesNum_80.length / entireLength) * 100
        const percent_90 = (degreesNum_90.length / entireLength) * 100
        const percent_100 = (degreesNum_100.length / entireLength) * 100
        const percent_up110 = (degreesNum_up110.length / entireLength) * 100
        

      return [percent_30, percent_40, percent_50, percent_60]

    }

    console.log('mergedWind1')
    console.log(mergedWind)
    
    for (var i = 1; i < 37; i++) {
        this["percent" + i] = createWindData(i)
    }; 

    console.log('mergedWind2')
    console.log(mergedWind)

    for (var i = 1; i < 37; i++) {
      this['tempAvg' + i] = createWindTempData(i)
    }


    console.log('tempAdsdsdsvg1')
    console.log(tempAvg1)

    console.log('percent5')
    console.log(percent5)

    const angle = Array.from(Array(36).keys())
    const angle2 = angle.map(x => x+1)
    
    const angle3 = angle2.flatMap(i => [i,i,i,i]);
    

    console.log('tempAvg1')
    console.log(tempAvg36)



    var speedData = ['30-39', '40-49', '50-59', '60-69'];

    var speedArray = [];

    


    for (var i = 0; i < 36; i++) {
        speedArray = speedArray.concat(speedData);
    }
    //speedArray = speedData.concat(speedData)

   // var percentArray = []
 //   for (var i = 1; i < 37; i++) {
    //     percentArray += percent[i].concat(percent[i] + 1)
 //   }

    var percentArray = percent1.concat(percent2,percent3,percent4,percent5,percent6,percent7,percent8,percent9,percent10,percent11,percent12,percent13,percent14,percent15,percent16,percent17,percent18,percent19,percent20,percent21,percent22,percent23,percent24,percent25,percent26,percent27,percent28,percent29,percent30,percent31,percent32,percent33,percent34,percent35,percent36);

    var tempByWindDirArray = [tempAvg1];
    var tempByWindDirArray = tempByWindDirArray.concat(tempAvg2,tempAvg3,tempAvg4,tempAvg5,tempAvg6,tempAvg7,tempAvg8,tempAvg9,tempAvg10,tempAvg11,tempAvg12,tempAvg13,tempAvg14,tempAvg15,tempAvg16,tempAvg17,tempAvg18,tempAvg19,tempAvg20,tempAvg21,tempAvg22,tempAvg23,tempAvg24,tempAvg25,tempAvg26,tempAvg27,tempAvg28,tempAvg29,tempAvg30,tempAvg31,tempAvg32,tempAvg33,tempAvg34,tempAvg35,tempAvg36);


    
    
    

    var finalArray = [];
    for (var i = 0; i < angle3.length; i++) {
        finalArray.push([angle3[i]*10, speedArray[i], percentArray[i]]);
      };




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
        return JSC.chart('chartDiv', { 
          debug: true, 
          type: 'radar column', 
          animation_duration: 1000, 
          title: { 
            label_text: 'Rose des vent', 
            position: 'center'
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
      } 


      


      if (monthID === 'January' || monthID === 'February' || monthID === 'March' || monthID === 'April' || monthID === 'May' || monthID === 'June' || monthID === 'July' || monthID === 'August' || monthID === 'September' || monthID === 'October' || monthID === 'November' || monthID === 'December' || monthID === 'Year' || monthID === 'Winter' || monthID === 'Spring' || monthID === 'Summer' || monthID === 'Fall') {
        chart = renderChart(windObj); 
      }


      if (monthID === 'tempJanuary' || monthID === 'tempFebruary' || monthID === 'tempMarch' || monthID === 'tempApril' || monthID === 'tempMay' || monthID === 'tempJune' || monthID === 'tempJuly' || monthID === 'tempAugust' || monthID === 'tempSeptember' || monthID === 'tempOctober' || monthID === 'tempNovember' || monthID === 'tempDecember' || monthID === 'tempYear' || monthID === 'tempWinter' || monthID === 'tempSpring' || monthID === 'tempSummer' || monthID === 'tempFall') {
        chart = renderChart(tempObj); 
      }
});
}



  

    

    
     //   let windSpeed = []
    //    for (let x of jsondata) {
      //      windSpeed += x["Spd of Max Gust (km/h)"]  + ","
    //    }


   



