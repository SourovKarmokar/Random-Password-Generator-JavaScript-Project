console.clear();

const sliderProps = {
  fill: "#001EDF",
  background: "rgba(255, 255, 255, 0.214"
};

const slider = document.querySelector(".range_slider");
const sliderValue = document.querySelector(".length_title");


slider.querySelector("input").addEventListener("input",Event => {
    sliderValue.setAttribute("data-length", event.target.value);
    applyFill(event.target);
});
applyFill(slider.querySelector("input"));

    function applyFill(slider){
        const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
        const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
        slider.style.background = bg;
        sliderValue.setAttribute("data-length", slider.value);
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  Numbers: getRandomNumber,
  symbol: gerRandomSymbol,
}

function secureMathRandom(){
  return window.crypto.getRandomValues(new Uint32Array(1))[0]/(Math.pow(2,32)-1);
}

function getRandomLower(){
  return String.fromCharCode (Math.floor(Math.random()*26)+97)
}

function getRandomUpper(){
  return String.fromCharCode (Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
  return String.fromCharCode (Math.floor(secureMathRandom * 10)+97)
}

function gerRandomSymbol(){
   const symbols = `!@#$%^&*()+={}[|\]`;
   return symbols [Math.floor(Math.random() * symbols.length)]
}

const resultE1 = document.getElementById("result");
const lengthE1 = document.getElementById("slider");

const uppercaseE1 = document.getElementById("uppercase");
const lowercaseE1 = document.getElementById("lowercase");
const numberE1 = document.getElementById("number");
const symbolE1 = document.getElementById("symbols");


const generateBtn = document.getElementById("generate");

const copyBtn = document.getElementById("copy-btn");


const resultContainer = document.querySelector(".result");
const copyInfo = document.querySelector(".result_info .right");
const copiedInfo = document.querySelector(".result_info .left");


let generatePassword = false;


let resultContainerBound = {
  left: resultContainer.getBoundingClientRect().left,
  top: resultContainer.getBoundingClientRect().top,
};

resultContainer.addEventListener("mousemove", (e) => {
  let resultContainerBound = {
      left: resultContainer.getBoundingClientRect().left,
      top: resultContainer.getBoundingClientRect().top,
  };

  if (generatedPassword()) {
    copyBtn.style.opacity = "1";
    copyBtn.style.pointerEvents = "all";
    copyBtn.style.setProperty("--x", `${e.x - resultContainerBound.left}px`);
    copyBtn.style.setProperty("--y", `${e.y - resultContainerBound.top}px`);
} else {
    copyBtn.style.opacity = "0";
    copyBtn.style.pointerEvents = "none";
}
});
window.addEventListener("resize", () => {
  resultContainerBound = {
      left: resultContainer.getBoundingClientRect().left,
      top: resultContainer.getBoundingClientRect().top,
  };
});
copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  
  if (!password || password == "CLICK GENERATE") {
      return;
  }

  textarea.value = password;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  copyInfo.style.transform = "translateY(200%)";
  copyInfo.style.opacity = "0";
  copiedInfo.style.transform = "translateY(0%)";
  copiedInfo.style.opacity = "0.75";
});

generateBtn.addEventListener("click", () => {
  const length = +lengthE1.value;
  const hasLower = lowercaseE1.checked;
  const hasUpper = uppercaseE1.checked;
  const hasNumber = numberE1.checked;
  const hasSymbol = symbolE1.checked;

  generatedPassword = true;

  resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
  copiedInfo.style.transform =""
});
