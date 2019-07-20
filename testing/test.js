const fs = require('fs');

//var data = fs.readFileSync("../index.html");
//var parse = JSON.parse(data);
//console.log(parse);


fs.readFile('../index.html', (err, data) => {  
    if (err) throw err;
    //let student = JSON.parse(data);
    console.log(data);
});