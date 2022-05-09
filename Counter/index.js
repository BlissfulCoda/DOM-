const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const number = document.getElementById('number');

increaseBtn.addEventListener('click', function() {
   let increasedNumber = +(number.textContent);
   increasedNumber++
   return number.textContent = increasedNumber;
})
decreaseBtn.addEventListener('click', function() {
   let decreasedNumber = +(number.textContent);
   decreasedNumber--;
   return number.textContent = decreasedNumber;
})

resetBtn.addEventListener('click', function() {
    number.textContent = 0;
})