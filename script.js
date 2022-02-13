const arrowRight = document.querySelector(".arrow__right");
const arrowLeft = document.querySelector(".arrow__left");

const dateOne = document.querySelector(".dates__1");
const dateTwo = document.querySelector(".dates__2");
const dateThree = document.querySelector(".dates__3");
const dateTwoDotTwo = document.querySelector(".dates__2--digit-2");

const lineTwo = document.querySelector(".balls__line--active");
const lineOne = document.querySelector(".balls__line");

let i = 1;

// Function to hyde and reveal the elements
const toggleOpacity = function (domElement1, domElement2) {
  domElement1.classList.toggle("hidden");
  domElement2.classList.toggle("hidden");
};

// Function to translate each div 100% more on the left. We want to select the distance travelled depending on which step of the sequence we are currently in
const transformLeft = function (el1, el2) {
  console.log(i, "i");
  if (i === 1) {
    el1.classList.add("transform-thirty");
    el2.classList.add("transform-left-1");
  }
  if (i === 2) {
    el1.classList.add("transform-one-hundred-and-thirty");
    el2.classList.add("transform-left-2");
  }
};

const transformRight = function (el1, el2) {
  if (i === 3) {
    el1.classList.remove("transform-one-hundred-and-thirty");
    el2.classList.remove("transform-left-2");
  }
  if (i === 2) {
    el1.classList.remove("transform-thirty");
    el2.classList.remove("transfom-left-1");
  }
};

// Type can be title, icon, text or pic.
// It will move to the left the elements and hyde or reveal them
const moveLeft = function (type) {
  const el1 = document.querySelector(`.description__${type}--${i}`);
  const el2 = document.querySelector(`.description__${type}--${i + 1}`);
  console.log("move left", el1, el2);
  toggleOpacity(el1, el2);
  transformLeft(el1, el2);
};

const moveRight = function (type) {
  const el1 = document.querySelector(`.description__${type}--${i - 1}`);
  const el2 = document.querySelector(`.description__${type}--${i}`);
  toggleOpacity(el1, el2);
  transformRight(el1, el2);
};

// We create custom functions that handles the behaviour off the date digits.
// The behaviiour is different depending on which date we change
// The first fonctions is called we we press the right arrow.
const changeLeftDate = function () {
  if (i === 1) {
    dateOne.classList.add("transform-left-1");
    dateTwo.classList.add("transform-left-1");
    toggleOpacity(dateOne, dateTwo);
  }
  if (i === 2) {
    dateTwoDotTwo.classList.add("transform-left-15");
    dateThree.classList.add("transform-left-3");
    toggleOpacity(dateTwoDotTwo, dateThree);
  }
};

// This function is called when we press the left arrow
const changeRightDate = function () {
  if (i === 3) {
    dateTwoDotTwo.classList.remove("transform-left-15");
    dateThree.classList.remove("transform-left-3");
    toggleOpacity(dateTwoDotTwo, dateThree);
  }

  if (i === 2) {
    dateOne.classList.remove("transform-left-1");
    dateTwo.classList.remove("transform-left-1");
    toggleOpacity(dateOne, dateTwo);
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
