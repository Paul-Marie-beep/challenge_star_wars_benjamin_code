const arrowRight = document.querySelector(".arrow__right");

const lineTwo = document.querySelector(".balls__line--active");
const lineOne = document.querySelector(".balls__line");

arrowRight.addEventListener("click", function () {
  console.log("trig");
  lineTwo.classList.remove("balls__line--transform");
});
