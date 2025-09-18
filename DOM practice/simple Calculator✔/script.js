let btns = document.querySelector(".buttons-grid");
let input = document.querySelector(".input-show");

btns.addEventListener("click", (e) => {
  let clicked = e.target;

  if (clicked.tagName !== "BUTTON") return;

  if (clicked.classList.contains("btn-num")) {

    input.textContent += clicked.innerText;

  } else if (clicked.classList.contains("btn-op")) {

    input.textContent += clicked.innerText;

  } else if (clicked.classList.contains("clear")) {

    input.textContent = "";
    
  } else if (clicked.classList.contains("single-clear")) {
    input.textContent = input.textContent.slice(0, -1);
  } else if (clicked.innerText === "=") {
    try {
      let expression = input.textContent.replace(/÷/g, "/").replace(/×/g, "*");
      let result = eval(expression);
      input.textContent = result;
    } catch (error) {
      input.textContent = "ERROR";
      setTimeout(() => {
        input.textContent = "";
      }, 1000);
    }
  }
});
