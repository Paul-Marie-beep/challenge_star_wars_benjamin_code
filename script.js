const arrowRight = document.querySelector(".arrow__right");
const arrowLeft = document.querySelector(".arrow__left");

const el1 = document.querySelector(".dates__1");
const el2 = document.querySelector(".dates__2");
const el3 = document.querySelector(".dates__3");
const el2_2 = document.querySelector(".dates__2--digit-2");

const lineTwo = document.querySelector(".balls__line--active");
const lineOne = document.querySelector(".balls__line");

let i = 1;

// Function to hyde and reveal the elements
const toggleOpacity = function (domElement1, domElement2) {
  domElement1.classList.toggle("hidden");
  domElement2.classList.toggle("hidden");
};

// Function to translate each div 100% more on the left. We want to select the distance travelled depending on which step of the sequence we are currently in
const transformLeft = function (domElement) {
  domElement.classList.add(`translate-left-${i}`);
};

const transformRight = function (domElement) {
  domElement.classList.remove(`translate-left-${i - 1}`);
};

// Type can be title, icon, text or pic.
// It will move to the left the elements and hyde or reveal them
const moveLeft = function (type) {
  const allEl = document.querySelectorAll(`.description__${type}`);
  const el1 = document.querySelector(`.description__${type}--${i}`);
  const el2 = document.querySelector(`.description__${type}--${i + 1}`);
  toggleOpacity(el1, el2);
  allEl.forEach((el) => transformLeft(el));
};

const moveRight = function (type) {
  const allEl = document.querySelectorAll(`.description__${type}`);
  const el1 = document.querySelector(`.description__${type}--${i - 1}`);
  const el2 = document.querySelector(`.description__${type}--${i}`);
  toggleOpacity(el1, el2);
  allEl.forEach((el) => transformRight(el));
};

// We create custom functions that handles the behaviour off the date digits.
// The behaviiour is different depending on which date we change
// The first fonctions is called we we press the right arrow.
const changeLeftDate = function () {
  if (i === 1) {
    transformLeft(el1);
    transformLeft(el2);
    toggleOpacity(el1, el2);
    el3.classList.add("translate-left-2");
  }

  if (i === 2) {
    transformLeft(el2_2);
    el3.classList.add("translate-left-custom");
    toggleOpacity(el2_2, el3);
  }
};

// This function is called when we press the left arrow
const changeRightDate = function () {
  if (i === 3) {
    el3.classList.remove("translate-left-custom");
    transformRight(el2_2);
    toggleOpacity(el3, el2_2);
  }

  if (i === 2) {
    transformRight(el1);
    transformRight(el2);
    toggleOpacity(el1, el2);
    el3.classList.remove("translate-left-2");
  }
};

// This fonction shows the line at the bottom of the page moving
const lineProgressionPlus = function () {
  const lineToMove = document.querySelector(`.meter__line--active-${i}`);
  lineToMove.classList.remove("meter__line--transform");
};

// We must substract 1 to the index because it is incremented at the end of the function when you press the right arrow
const lineProgressionMinus = function () {
  const lineToMove = document.querySelector(`.meter__line--active-${i - 1}`);
  lineToMove.classList.add("meter__line--transform");
};

// This function shows a golden ball instead of a grey one
const ballFilling = function () {
  const ballToFill = document.querySelector(`.meter__ball--active-${i}`);
  ballToFill.classList.remove("meter__ball--transform");
};

// This function shows a grey ball instead of a golden one
const ballEmptying = function () {
  const ballToFill = document.querySelector(`.meter__ball--active-${i - 1}`);
  ballToFill.classList.add("meter__ball--transform");
};

const arrowRightPressed = function () {
  if (i >= 3) return;
  moveLeft("icon");
  moveLeft("title");
  moveLeft("text");
  moveLeft("pic");
  changeLeftDate();
  lineProgressionPlus();
  ballFilling();
  if (i === 1) arrowLeft.src = "icons/arrow_left.png";
  i += 1;
};

const arrowLeftPressed = function () {
  if (i <= 1) return;
  moveRight("icon");
  moveRight("title");
  moveRight("text");
  moveRight("pic");
  changeRightDate();
  lineProgressionMinus();
  ballEmptying();
  i -= 1;
  if (i === 1) arrowLeft.src = "icons/arrow_left_dark.png";
};

const init = function () {
  arrowRight.addEventListener("click", arrowRightPressed);
  arrowLeft.addEventListener("click", arrowLeftPressed);
};
init();
