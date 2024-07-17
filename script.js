const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

var tl = gsap.timeline()
tl.to(".page1",{
  y:"-200vh",
  scale:0.6,
  duration:0,
})
tl.to(".page1",{
  y:"10vh",
  duration:1,
  delay:1,
})
tl.to(".page1",{
  y:"0vh",
  rotate:-360,
  duration:1.5,
  delay:1,
  scale:1
})
gsap.to(".page2,.page3,.page4,.page5,.page6",{
  opacity:0,
  scale:0
})
tl.to(".page2,.page3,.page4,.page5,.page6",{
  opacity:1,
  scale:1
})