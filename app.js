const body = document.querySelector("body");
const button = document.querySelector("button");
const color = ["red", "blue","yellow ","green" ,"lightblue",  "blue","lightgreen", "black"];

body.style.backgroundColor ='violet'

button.addEventListener('click',changeB)

function changeB(){
    const colorIndex =parseInt(Math.random()*color.length)
    body.style.backgroundColor =color[colorIndex]
}