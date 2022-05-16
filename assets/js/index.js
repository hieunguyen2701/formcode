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

// auto resize text area
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

// drag and drop js
let files = [],
dragDropArea = $(".drag-drop-area"),
imagesContainer = $(".images-container"),
text = $(".inner"),
browser = $(".select"),
input = $("#input-file");

// input change event
browser.addEventListener('click', () => input.click());
input.addEventListener('change', () => {
  let file = input.files;

  for (let i = 0; i < file.length; i++) {
    if(files.every(e => e.name !== file[i].name))
    {
      files.push(file[i]);
    }
  }
  showImage();
})

const showImage = () => {
  let images = ''
  files.forEach((e, i) => {
    images += `<div class="image">
          <img src="${URL.createObjectURL(e)}" alt="image">
          <span onclick = "delImage(${i})">&times;</span>
          </div>`
  })
  imagesContainer.innerHTML = images;
}

const delImage = index => {
  files.splice(index, 1)
  showImage()
}

// drag and drop

dragDropArea.addEventListener('drop', e => {
  e.preventDefault();

  let file = e.dataTransfer.files;
  for (let i = 0; i < file.length; i++) {
    if(files.every(e => e.name !== file[i].name))
    {
      files.push(file[i]);
    }
  }
  showImage();
})

