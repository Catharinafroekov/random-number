function randomNumber(max, qs){
const number = Math.floor(Math.random() * (max + 1));
qs.textContent = number; 
console.log(number) ;}
randomNumber(100, document.querySelector("#tal"));
