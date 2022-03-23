const numbers = document.querySelectorAll('.number');
const enviar = document.querySelector('.submit');
const card1 = document.querySelector('.first-card');
const card2 = document.querySelector('.second-card');
let numberSpan = document.querySelector('.selected');

let nomber_selected;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i].id);

    numbers[i].addEventListener('click', function() {
        for (j = 0; j < numbers.length; j++){
            if (j + 1 != numbers[i].id) {
                numbers[j].classList.remove('set-orange-color');
            }
        }
        numbers[i].classList.toggle('set-orange-color');
        numbers[i].classList.toggle('hov');
        number_selected = i + 1;
    });
}

enviar.addEventListener('click', function() {
    card1.style.zIndex = '1';
    card2.style.zIndex = '3';
    card2.style.opacity = '1';
    card2.style.transform = 'scale(1)';
    numberSpan.textContent = number_selected;
});
