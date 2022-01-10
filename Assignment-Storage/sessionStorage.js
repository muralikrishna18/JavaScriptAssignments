const div2=document.querySelector("#div2");
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const element2 = document.createElement("span")
var sessionNumber = (Number)(sessionStorage.getItem("Score"))||0;



sessionStorage.setItem("Score",sessionNumber);
element2.innerText = `Session Score : ${sessionNumber}`;
div2.append(element2);

btn3.addEventListener('click',()=>{
    sessionStorage.setItem("Score",++sessionNumber);
    element2.innerText = `Session Score : ${sessionStorage.getItem("Score")}`;
})



btn4.addEventListener('click',()=>{
    sessionStorage.clear();
    element2.innerText = `Session Score : ${0}`;
    sessionNumber =0;
})