let inputEl = document.querySelector('input[id = "from"]');
let spanEl = document.querySelector('span');

inputEl.addEventListener('input', function () {
    spanEl.textContent = inputEl.value;
})

let buttonEl = document.querySelector('.messageBtn');
let massage = document.querySelector('.message');

buttonEl.addEventListener('click', function () {
    massage.classList.add('animate_animated');
    massage.classList.add('animate_fadeInLeftBig');
    massage.style.visibility = 'visible';
});

let form = document.querySelector('form');

const inputs = form.querySelectorAll('.form-control');
form.addEventListener('submit', (event) => {
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            isValid = false;
        }
    });
    if (!isValid) {
        event.preventDefault();
    }
});
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});
