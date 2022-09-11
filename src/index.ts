import "./styles.css";

const inpuBase = document.getElementById("base");
const inpuAltura = document.getElementById("altura");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

let base: number = Number(inpuBase.value);
let altura: number = Number(inpuAltura.value);
let area: number = base * altura;

btn.addEventListener("click", function () {
  base = Number(inpuBase.value);
  altura = Number(inpuAltura.value);
  area = base * altura;
  para.innerText += area;
});
