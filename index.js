var colorMap = require(__dirname + "/color-map")

function Cooler() {
}

Cooler.prototype.printAll255Colors = function() {
  for (var i = 0; i < 256; i++ ){
    console.log("\u001b[1;2;38;5;"+i+"m" + i + "    \u001b[39m")
  }
}

Object.keys(colorMap).forEach(function(color){
    console.log(color)
    Cooler.prototype[color] = function(str){
    // console.log(colorMap[color])
    return "\u001b[1;2;38;5;"+colorMap[color]+"m" + str + "\u001b[39m"
  }
})

module exports = new Cooler()
