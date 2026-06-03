const countText = document.querySelector("#count");

const increaseBtn = document.querySelector("#increaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {

    count++;

    countText.textContent = count;

});