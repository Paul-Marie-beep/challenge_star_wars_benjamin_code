const arrowRight = document.querySelector(".arrow__right");
const arrowLeft = document.querySelector(".arrow__left");

const lineTwo = document.querySelector(".balls__line--active");
const lineOne = document.querySelector(".balls__line");

let i = 1;
let j = 1;

// Function to hyde and reaveal the elements
const toggleOpacity = function (domElement1, domElement2) {
  domElement1.classList.toggle("hidden");
  domElement2.classList.toggle("hidden");
};

// Function to translate each div 100% more on the left. We want to select the distance travelled depending on which step of the sequence we are currently in
const transformLeft = function (domElement) {
  domElement.classList.add(`translate-left-${j}`);
};

// Type can be title, icon or text
// It will move to the left the elements and hyde or reveal them
const changeLeft = function (type) {
  if (i >= 3) return;
  const allIcons = document.querySelectorAll(`.description__${type}`);
  const icon1 = document.querySelector(`.description__${type}--${i}`);
  const icon2 = document.querySelector(`.description__${type}--${i + 1}`);
  console.log(allIcons);
  toggleOpacity(icon1, icon2);
  allIcons.forEach((icon) => transformLeft(icon));
};

const init = function () {
  arrowRight.addEventListener("click", function () {
    changeLeft("icon");
    changeLeft("title");
    changeLeft("text");
    changeLeft("pic");
    lineTwo.classList.remove("balls__line--transform");
    i += 1;
    j += 1;
  });
};
init();
