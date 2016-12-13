var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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

  var square1 = document.createElementNS(namespace, "circle")

  square1.setAttribute("x", x)
  square1.setAttribute("y", y)
  square1.setAttribute("r", size)
  square1.setAttribute("fill", color)
  canvas.appendChild(square1)

}

function drawCircle(x, y, size, color) {

  circle1.setAttribute("cx", x)
  circle1.setAttribute("cy", y)
  circle1.setAttribute("r", size)
  circle1.setAttribute("fill", color)
  canvas.appendChild(circle1)

}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})

document.addEventListener("mouseup", function(e) {



})

document.addEventListener("mousemove", function(e) {



})
