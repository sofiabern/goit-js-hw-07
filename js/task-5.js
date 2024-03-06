function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const props = {
  bodyEl : document.querySelector('body'),
  spanEl : document.querySelector('.color'),
  btnEl: document.querySelector('.change-color')
}



props.btnEl.addEventListener('click', changeColorHandler)

function changeColorHandler() {
  const color = getRandomHexColor()
  props.spanEl.textContent = color;
  props.bodyEl.style.backgroundColor = color; 
  
}
