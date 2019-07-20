var fs = require('fs');
 
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    if (err) throw err;

    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});


//read file

fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
});