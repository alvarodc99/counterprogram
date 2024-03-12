const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn")
let counter = document.getElementById("counter");
let counterValue = 0;

increaseBtn.addEventListener('click', function(){
  counterValue += 1
  counter.innerHTML = counterValue;
})

resetBtn.addEventListener('click', function(){
  counterValue = 0;
  counter.innerHTML = counterValue;

})

decreaseBtn.addEventListener('click', function(){
  counterValue -=1
  counter.innerHTML = counterValue;

})