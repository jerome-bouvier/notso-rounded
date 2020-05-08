let tiles = 200

function setup() {
  let c = createCanvas(900, 900)
  
  tileSize = width / tiles
  
  noLoop()
  noStroke()
  rectMode(CENTER)
}

function draw() {
  background('#fafafa')
  let cx = width / 2
  let cy = height / 2
  let csize = width / 2

  
  // draw within constraint
  for (var y = 0; y < height; y = y + tileSize + 10) {
    for (var x = 0; x < width; x = x + tileSize + 10) {
      r = int(random(0, 4))
      if (pointInCircle(x, y, cx, cy, csize / 2)) {
        if (r == 0) {
          pickColor()
          rect(x + tileSize, y + tileSize, tileSize , tileSize)
        } else if (r == 1) {
          pickColor()
          rect(x, y + tileSize, tileSize + r, tileSize + r)
        } else if (r == 2) {
          pickColor()
          rect(x + tileSize, y, tileSize + r * 2, tileSize + r * 2)
        } else if (r == 3) {
          pickColor()
          rect(x, y, tileSize + r, tileSize + r)
        }
      }
    }
  }
}

// x,y is the point to test
// cx, cy is circle center, and radius is circle radius
function pointInCircle(x, y, cx, cy, radius) {
  var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  return distancesquared <= radius * radius;
}

function pickColor() {
  let c = fill(0,0,0,int(random(0,255)))
  return c
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}
  
