let btnsPlus = Array.from(document.getElementsByClassName("plus"));
let btnsMinus = Array.from(document.getElementsByClassName("minus"));
let prices = Array.from(document.getElementsByClassName("price"));
let qtes = Array.from(document.getElementsByClassName("qte"));
let totalUnit = Array.from(document.getElementsByClassName("total-unit"));
let hearts = Array.from(document.getElementsByClassName("heart"));
let products = Array.from(document.getElementsByClassName("product"));
let btnsDelete =Array.from(document.getElementsByClassName("delete"));

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    qtes[i].innerHTML++; 

    totalUnit[i].innerHTML = (
      +qtes[i].innerHTML * +prices[i].innerHTML
    ).toFixed(2);
    totalBag();
  });
}
for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML--;
      totalUnit[i].innerHTML = +qtes[i].innerHTML * +prices[i].innerHTML;
      // total();
      totalBag();
    }
  });
}
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("red");
  });
}
function totalBag() {
  let prices = Array.from(document.getElementsByClassName("price"));
  let qtes = Array.from(document.getElementsByClassName("qte"));

  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i].innerHTML * +qtes[i].innerHTML;
  }

  document.getElementById("total").innerText = sum;
}
for (let btnDelete of btnsDelete) {
  btnDelete.addEventListener("click", function () {
    btnDelete.parentElement.remove();
    totalBag();
  });
} 
