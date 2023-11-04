const domSelector = (node) => document.querySelector(node);
const puase = domSelector("#pause");
let animation = gsap.to("#tiger", {
  duration: 6,
  ease: "none",
  motionPath: {
    path: "#route",
    align: "#tiger",
  },
  onUpdate: traceProgress, // 실행중 호출
  onComplete: () => (puase.textContent = "play"), // 완료시 호출
});



domSelector('#river').addEventListener('click',()=>{
  gsap.to(animation,{progress:0.7})
})



domSelector("#button").addEventListener("click", (e) => {
  animation.paused(!animation.paused()); // 정지면 true, 실행중이면 false
  e.target.innerText = animation.paused() ? "play" : "pause";
  puase.innerText =  animation.paused() ? "play" : "pause";
  if (animation.progress() === 1) {
    animation.restart();
    domSelector("#time").textContent = 0;
  }
});

// 프로그래스 추적 함수
function traceProgress() {
  if (animation.progress() === 1) return;
  domSelector("#progressSlider").value = animation.progress();
  domSelector("#time").textContent = animation.progress().toFixed(2);

  requestAnimationFrame(traceProgress);
}
