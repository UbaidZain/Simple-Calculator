const buttons = Array.from(document.getElementsByClassName("button"));
const display = document.getElementsByClassName("display")[0];

buttons.forEach((button) => {
  button.addEventListener("click", Evaluation);
});

function Evaluation(event) {
  let data = event.target.innerHTML;
  switch (data) {
    case "CE":
      display.innerHTML = "";
      break;
    case "C":
      display.innerHTML = display.innerHTML.slice(0, -1);
    case "=":
      let evaluatedvalue = eval(display.innerHTML);
      try {
        display.innerHTML = "=" + evaluatedvalue;
      } catch (error) {
        display.innerHTML = "SyntaxError";
      }
      break;
    default:
      display.innerHTML += data;
  }
}
