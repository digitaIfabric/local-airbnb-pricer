/**
 * Created by zaidyahya on 2017-11-19.
 */
const json2csv = require('json2csv');
var fs = require('fs');
var fields = ['car', 'price', 'color'];
// var fields = ['lat', 'long', 'Cafes', 'Carfriendly'];
// var fields = ['lat', 'long', 'Cafes', 'Carfriendly', 'Daycares', 'ElementarySchools', 'Greenery', 'Groceries', 'HighSchools', 'Historic', 'Nightlife', 'Parks', 'Pedestrianfriendly', 'Quiet', 'Restaraunts', 'Shopping', 'Transitfriendly', 'Vibrant'];
// var fullData = [];
// fullData.push({"lat":"24","long":"2","Cafes":"23","Carfriendly":"1"});
// console.log("full Data", fullData);

//Two methods -> 1) Append Data, make the BIG data object
//2) writeToCSV that just writes it at the end
//
var myCars = [
    {
        "car": "Audi",
        "price": 40000,
        "color": "blue"
    }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
    }, {
        "car": "Porsche",
        "price": 60000,
        "color": "green"
    }
];
//
// console.log("my cars", myCars);

function write(){
    var csv = json2csv({ data: myCars, fields: fields });
    fs.writeFile('file.csv', csv, function(err) {
        if (err) throw err;
        console.log('file saved');
    });
}

// var csv = json2csv({ data: fullData, fields: fields });

// fs.writeFile('file.csv', csv, function(err) {
//     if (err) throw err;
//     console.log('file saved');
// });