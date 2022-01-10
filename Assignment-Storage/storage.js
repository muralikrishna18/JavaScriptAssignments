const div1=document.querySelector('#div1');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const element = document.createElement("span")
var localNumber = (Number)(localStorage.getItem("Score"))||0;



localStorage.setItem("Score",localNumber);
element.innerText = `Local Score ${localNumber}`;
div1.appendChild(element)

btn1.addEventListener('click',()=>{
    localStorage.setItem("Score",++localNumber);
    element.innerText = `Local Score ${localStorage.getItem("Score")}`;
    
})



btn2.addEventListener('click',()=>{
    localStorage.clear();
    element.innerText = `Local Score ${0}`;
    localNumber =0;
})