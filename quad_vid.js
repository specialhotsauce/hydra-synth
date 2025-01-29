bmp = 3000
// Init webcamera
s0.initCam(2)
s1.initCam(1)

color_array = [0,1,2,3,4,5,6]

// top left
src(s0)
  .color(color_array, 1, 1)
  .modulate(shape(24))
  .out(o0)

//top right
src(s0)
// color set
  .color(1, color_array, 10)
// wavey
  .modulate(voronoi())
  .pixelate(1000000000000)
  .out(o2)

// bottom left
src(s0)
  .color(1, 3, 1)
  .out(o1)

// bottom right
src(s0)
  .color(1, color_array, 1)
  .modulateRotate(osc(10), 2)
  .out(o3)

render()
