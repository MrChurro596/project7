var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var draw = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {

  var square1 = document.createElementNS(namespace, "rect")

  square1.setAttribute("x", x)
  square1.setAttribute("y", y)
  square1.setAttribute("width", size)
  square1.setAttribute("height", size)
  square1.setAttribute("fill", color)
  screen.appendChild(square1)

}

function drawCircle(x, y, size, color) {

  var circle1 = document.createElementNS(namespace, "circle")

  circle1.setAttribute("cx", x)
  circle1.setAttribute("cy", y)
  circle1.setAttribute("r", size)
  circle1.setAttribute("fill", color)
  screen.appendChild(circle1)

}

document.addEventListener("mousedown", function(e) {

  draw = true

})

document.addEventListener("mouseup", function(e) {

  draw = false

})

document.addEventListener("mousemove", function(e) {

var color = document.getElementById("colorSelect").value
var shape = document.getElementById("shapeSelect").value
var size = document.getElementById("sizeSelect").value
var pt = transformPoint(e)
var xpos = pt.x
var ypos = pt.y

if (shape == "square" && draw == true) {

  drawSquare(xpos, ypos, size, color)

}

else if (shape == "circle" && draw == true) {

  drawCircle(xpos, ypos, size, color)

  }
})
