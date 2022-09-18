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



allYearsID = [2019, 2020];
console.log('typeof allYearsID[0]')
console.log(typeof allYearsID[0])
console.log(typeof allYearsID)
console.log(allYearsID)


startYear = 2019
allYearsData = Array.from(Array(3).keys())
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
    let windDir = []
    for (let x of finalResult) {
        windDir += x["Spd of Max Gust (km/h)"]  + ","
    }


    windDir = windDir.split(",")

    console.log('windDir')
    console.log(windDir)

    windDir = windDir.map(str => {
        return Number(str);
    })


    console.log('finalResult')
    console.log(finalResult)

    console.log('windDir')
    console.log(windDir.length)


    
});

        

        
    
     //   let windSpeed = []
    //    for (let x of jsondata) {
      //      windSpeed += x["Spd of Max Gust (km/h)"]  + ","
    //    }


   



