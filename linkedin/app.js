var currentSlide = 1;

function next(event) {
  event.preventDefault();
  document.getElementById(currentSlide).classList.add('hidden');
  currentSlide++
  document.getElementById(currentSlide).classList.remove('hidden');

  if (currentSlide === 5) {
    nextButton.classList.add('hidden');
    finishButton.classList.remove('hidden');
  }
}

function back(event) {
  event.preventDefault();
  if (currentSlide > 1) {
    document.getElementById(currentSlide).classList.add('hidden');
    currentSlide--
    document.getElementById(currentSlide).classList.remove('hidden');
  }

  if (currentSlide === 5) {
    nextButton.innerHTML = 'Finish';
  }
}

function finish(event) {
  window.open('https://www.linkedin.com/in/callie-stoscup-475b1683/');
}

var nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', next);

var backButton = document.getElementById('back-button');
backButton.addEventListener('click', back);

var finishButton = document.getElementById('finish-button');
finishButton.addEventListener('click', finish);