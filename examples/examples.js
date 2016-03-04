var colorMap = require("../color-map.js")
var cooler = require("../index.js")

current = 0
colors = Object.keys(colorMap)
for(var i = 0; i< 100; i++){
  setTimeout(function(){
    process.stdout.clearLine();  // clear current text
    process.stdout.clearLine();  // clear current text
    process.stdout.cursorTo(0);
    process.stdout.write("    Colors: " + cooler[colors[current]](colors[current]+"\r"))
    current = (current + 1) % colors.length
  }, 500 * i)
}
