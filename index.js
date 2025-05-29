/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");
const convertL = document.getElementById("l-convert");
const convertV = document.getElementById("v-convert");
const convertM = document.getElementById("m-convert");
const themeBtn =  document.getElementById("theme-btn")
const listEl = document.querySelectorAll("li");
const textP = document.querySelectorAll("p");
const textH = document.querySelectorAll("li>h2");

convertBtn.addEventListener("click", function () {
   let measure = Number(inputBox.value);
   let length = `${measure} meters = ${(measure * 3.281).toFixed(3)} feet | ${measure} feet = ${(measure * 0.304).toFixed(3)} meters`;
   convertL.textContent = length;
   
   let volume = `${measure} liters = ${(measure * 0.264).toFixed(3)} gallons | ${measure} gallons = ${(measure * 3.787).toFixed(3)} liters`;
   convertV.textContent = volume;
   
   let mass = `${measure} kilos = ${(measure * 2.204).toFixed(3)} pounds | ${measure} pounds = ${(measure * 0.453).toFixed(3)} kilos`;
   convertM.textContent = mass;
});

   themeBtn.addEventListener("click", function () {
   document.getElementById("container-body").style.backgroundColor = '#1F2937';
      
   listEl.forEach(item => {
  item.style.backgroundColor = '#273549';
   }); 
      
      textP.forEach(itemP => {
         itemP.style.color = '#FFFFFF';
      });
   
      textH.forEach(itemH => {
         itemH.style.color = '#CCC1FF';
      })
   })
