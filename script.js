const celsiusScale = document.querySelector("#Celsius");
const deg = document.querySelector("#degree");
const convertBtn = document.querySelector("#Convert-btn");
const tempType = document.querySelector("#temp-type");
const btnEl = document.querySelector(".btn");
window.addEventListener("load", () => {
  deg.value = "";
  celsiusScale.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();

  convertBtn.innerHTML =
    "<span><i class='fa fa-spinner fa-spin'></i> Converting ...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 500);
});

function convertToCelsius() {
  let inputValue = deg.value;
  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusScale.innerHTML = `${fahrenheitToCelsius.toFixed(2)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273;
      celsiusScale.innerHTML = `${kelvinToCelsius.toFixed(2)} &deg;c`;
    }
  }, 580);
}
