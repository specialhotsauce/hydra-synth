s0.initCam(2)

// modulate camera stream with four knobs
osc_val = () => (cc[4] * 100)
r = () => (cc[1] * 2.5) 
g = () => (cc[2] * 2.5)
b = () => (cc[3] * 2.5)

src(s0)
  .color(r, g, b)
  .modulate(osc(osc_val))
  .out() 
