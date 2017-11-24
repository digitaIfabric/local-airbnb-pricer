/**
 * Created by zaidyahya on 2017-11-19.
 */

var lats = [];
var lngs = [];
var fullObject = [];
var i = 1080;
var indivLat = "";
var indivLng = "";



function handleFiles(files){
    if(window.FileReader){
        getAsText(files[0]);
    }
    else{
        alert('asdasdas');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    var temp = false;
    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        var tarr = [];
        for (var j = 0; j < data.length; j++) {
            // console.log("whats length", data.length);
            // console.log("xyl", data[j].length);
            indivLat = "";
            indivLng = "";
            for (var z = 0; z < data[j].length; z++) {
                // console.log(data[j].charAt(z));
                if (data[j].charAt(z) == ',') {
                    // console.log("asaxaasdasd");
                    temp = true;
                    continue;
                }
                if (temp == false) {
                    indivLat += data[j].charAt(z);
                }
                else {
                    indivLng += data[j].charAt(z);
                }
            }
            temp = false;
            // console.log("is it lat", indivLat);
            // console.log("is itlng", indivLng);
            if(indivLat != "" && indivLat != "lat" && indivLng != "" && indivLng != "long"){
                lats.push(indivLat);
                lngs.push(indivLng);
            }
            tarr.push(data[j]);
        }
        lines.push(tarr);
    }
    // console.log(lines);
    console.log("hows lats", lats);
    console.log("bsasdfas", lngs);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}


function start(){
    testMethod(lats[i], lngs[i]);
}

function getNext() {
    i++;
    if(i == 1500){
        stop();
    }
    else{
        testMethod(lats[i], lngs[i]);
    }
}

function callonException(){
    download(fullObject);
}

function makeJSONObject(singleEntry){
    fullObject.push(singleEntry);
    document.getElementById("local-logic-widget").innerHTML = "";
    getNext();
}

function stop(){
    // console.log("what is", JSON.stringify(fullObject));
    download(fullObject);
}

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    console.log("fuckme", objArray);

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    console.log("yeee", items);
    var jsonObject = JSON.stringify(items);
    console.log("weee", jsonObject);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function download(itemsNotFormatted){
    // var headers = {
    //     model: 'Phone Model'.replace(/,/g, ''), // remove commas to avoid errors
    //     chargers: "Chargers",
    //     cases: "Cases",
    //     earphones: "Earphones"
    // };
    var headers = {
        lat: "lat",
        lng: "lng",
        cafes: "Cafes",
        carfriendly: "Carfriendly",
        daycares: "Daycares",
        elementaryschools: "ElementarySchools",
        greenery: "Greenery",
        groceries: "Groceries",
        highschools: "HighSchools",
        historic: "Historic",
        nightlife: "Nightlife",
        parks: "Parks",
        pedestrianfriendly: "Pedestrianfriendly",
        quiet: "Quiet",
        restaurants: "Restaurants",
        shopping: "Shopping",
        transitfriendly: "Transitfriendly",
        vibrant: "Vibrant"
    };

    // itemsNotFormatted = [
    //     {
    //         model: 'Samsung S7',
    //         chargers: '55',
    //         cases: '56',
    //         earphones: '57',
    //         scratched: '2'
    //     },
    //     {
    //         model: 'Pixel XL',
    //         chargers: '77',
    //         cases: '78',
    //         earphones: '79',
    //         scratched: '4'
    //     },
    //     {
    //         model: 'iPhone 7',
    //         chargers: '88',
    //         cases: '89',
    //         earphones: '90',
    //         scratched: '6'
    //     }
    // ];

    var itemsFormatted = [];

    // format the data
    itemsNotFormatted.forEach((item) => {
        itemsFormatted.push({
        lat: item.lat,
        lng: item.lng,
        Cafes: item.Cafes,
        Carfriendly: item.Carfriendly,
        Daycares: item.Daycares,
        ElementarySchools: item.ElementarySchools,
        Greenery: item.Greenery,
        Groceries: item.Groceries,
        HighSchools: item.HighSchools,
        Historic: item.Historic,
        Nightlife: item.Nightlife,
        Parks: item.Parks,
        Pedestrianfriendly: item.Pedestrianfriendly,
        Quiet: item.Quiet,
        Restaurants: item.Restaurants,
        Shopping: item.Shopping,
        Transitfriendly: item.Transitfriendly,
        Vibrant: item.Vibrant
    });
});

    var fileTitle = 'orders'; // or 'my-unique-title'

    exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}
