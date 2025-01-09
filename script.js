const interactiveText = document.getElementById('interactive-text');
const interactiveSection = document.getElementById('interactive-section');

interactiveSection.addEventListener('click', () => {
  if (interactiveText.textContent === 'This text will change when you click me.') {
    interactiveText.textContent = 'You clicked me!';
  } else {
    interactiveText.textContent = 'This text will change when you click me.';
  }
});
