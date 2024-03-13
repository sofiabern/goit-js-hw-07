function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const props = {
  parentEl: document.querySelector("#controls"),
  inputEl: document.querySelector('[type="number"]'),
  btnCreateEl: document.querySelector("[data-create]"),
  btnDestroyEl: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

let amount;
let color;

props.inputEl.addEventListener("input", inputHandler);
function inputHandler(evt) {
  amount = evt.currentTarget.value.trim();
}

props.btnCreateEl.addEventListener("click", createHandler);
function createHandler(evt) {
  if(!amount){
    alert('Choose some amount!')
    return
  }

  if (amount < 1 || amount > 101) {
    alert("The required amount is way too big or small! Change it, please");
    amount = 0;
    evt.currentTarget.value = "";
    return;
  }

  createBoxes(amount);
  amount = 0;
  props.inputEl.value = "";
}

props.btnDestroyEl.addEventListener("click", destroyHandler);
function destroyHandler() {
props.boxEl.innerHTML = "";

}

function createBoxes(amount) {
  let height = 30;
  let width = 30;
  let boxes = "";

  for (let i = 0; i < amount; i += 1) {
    color = getRandomHexColor();
    boxes += `<div style="background-color:${color}; width:${width}px; height:${height}px;"></div>`;
    height += 10;
    width += 10;
  }

  props.boxEl.innerHTML = boxes;
}
