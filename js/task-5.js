function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElements = {
  bodyEl : document.querySelector('body'),
  spanEl : document.querySelector('.color'),
  btnEl: document.querySelector('.change-color')
}



bodyElements.btnEl.addEventListener('click', changeColorHandler)

function changeColorHandler() {
  const color = getRandomHexColor()
  bodyElements.spanEl.textContent = color;
  bodyElements.bodyEl.style.backgroundColor = color; 
  
}
