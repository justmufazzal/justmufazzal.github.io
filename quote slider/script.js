let image = document.querySelectorAll('img')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')


let i = 0
num2.innerHTML = "/" + image.length
next.addEventListener('click' , function() {
    image[i].classList.remove('active')
    console.log(i);
    i++;
   

    if (image.length <= i){
       i = 0 
    }
    image[i].classList.add('active')
    console.log(i);
    num1.innerHTML = i + 1
})

prev.addEventListener('click' , function() {
    image[i].classList.remove('active')
    console.log(i);
    i--;
   

    if (i < 0 ){
       i = image.length - 1
    }
    image[i].classList.add('active')
    console.log(i);
    num1.innerHTML = i + 1
})