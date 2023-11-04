const $ = (node) => document.querySelector(node);

//  callback -> 나중에 일어나는 일

// onComplete
// onUpdate
// onStart
// onRepeat



const animation =gsap.to(".orange", {
  scale: 1.5,
  duration: 3,
  onReverseComplete(a){
    console.log(a)
  },
  onReverseCompleteparams:["역재"]
});

