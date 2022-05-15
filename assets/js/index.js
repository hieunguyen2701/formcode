const tx = document.getElementsByTagName("textarea");

for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.overFlowWrap ="break-word";
  this.style.height = (this.scrollHeight) + "px";
}

// change button js
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buttons = $$(".form-label")
const formContents = $$(".form-content")

const buttonActive = $(".form-label.active")
const line = $(".form-labels .line")

line.style.left = buttonActive.offsetLeft + "px";
line.style.width = buttonActive.offsetWidth + "px";

buttons.forEach((button, index) => {
  const formContent = formContents[index];
  console.log(formContent)
  button.onclick = function () {
    $(".form-label.active").classList.remove("active");
    $(".form-content.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    formContent.classList.add("active");
  };
});