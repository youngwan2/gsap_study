const domSelector = (node) => document.querySelector(node);

let animation = gsap.to("#tiger", {
  duration: 6,
  ease: "none",
  motionPath: {
    path: "#route",
    align: "#tiger",
  },
});

let progress = "";
function render() {
  progress = domSelector(".progress").style.cssText = `width:${
    animation.progress() * 100
  }%`;


if(animation.progress()>=1) return  
  requestAnimationFrame(render);
}

render();
console.log(progress);
