// Heart Icons

const heartCounter = document.getElementById("heart-counter");
let count = 0;
const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    count++;
    heartCounter.textContent = count;
  });
});

//  Call Buttons
