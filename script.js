
const text = document.querySelector("h1")

const Inc = document.querySelector(".inc")

const Dec = document.querySelector(".dec")

var a = 0;
Inc.addEventListener("click", function(){
    a++;
    text.innerHTML = a
});

Dec.addEventListener("click", function(){
    a--;
    text.innerHTML = a
})