var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from('li', 1, { x: 10, opacity: 0, ease: Power2.easeInOut });
tl2.from('#who', 1, { x: 100, opacity: 0, ease: Power2.easeInOut });
tl2.from('#why', 1, { x: 100, opacity: 0, ease: Power2.easeInOut }, '-=0.1');
tl3.from('.project-tile', 1, { opacity: 0, ease: Power2.easeInOut });

const scene = new ScrollMagic.Scene({
  triggerElement: "#about"
})
  .setTween(tl2)
  .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#projects"
  })
    .setTween(tl3)
    .addTo(controller);