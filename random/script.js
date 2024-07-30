
let random_number = document.getElementById('random_number');
let random_button = document.getElementById('random_button');

    
random_button.addEventListener('click', function() {
    let first = +document.getElementById('first_number').value
    let second = +document.getElementById('second_number').value
    let rand = Math.floor(first + Math.random() * (second - first + 1));
    random_number.textContent = rand
})



