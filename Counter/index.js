const value = document.getElementById("number");
const btns = document.querySelectorAll(".btn");
// increaseBtn.addEventListener('click', function() {
//    let increasedNumber = +(number.textContent);
//    increasedNumber++
//    return number.textContent = increasedNumber;
// })
// decreaseBtn.addEventListener('click', function() {
//    let decreasedNumber = +(number.textContent);
//    decreasedNumber--;
//    return number.textContent = decreasedNumber;
// })

// resetBtn.addEventListener('click', function() {
//     number.textContent = 0;
// })

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let targetButton = e.currentTarget.className;

    switch (targetButton) {
      case "btn increase":
        count++;
        value.textContent = count;
        break;
      case "btn decrease":
        count--;
        value.textContent = count;
        break;
      case "btn reset":
        value.textContent = count;
      default:
        value.textContent = count;
    }
  });
});
