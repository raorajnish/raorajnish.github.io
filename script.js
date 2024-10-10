function videoanimation(){
    var vid = document.querySelector("#video");
    var playbtn = document.querySelector("#play");
    vid.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    vid.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    vid.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 50,
        top: dets.y - 300,
      });
    });
}
videoanimation()

function loadanimation(){
    gsap.from("#page1 h1", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})
gsap.from("#page1 #video", {
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5,
})
}
loadanimation()
