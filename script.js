var tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('#about', 1, {x:200, opacity: 0});

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#about"
})
  .setTween(tl)
    .addTo(controller);