document.addEventListener("DOMContentLoaded", function () {
    console.log('все теги прогрузились');
});

window.addEventListener("load", function () {
    console.log('страница загрузилась');
});

document.body.addEventListener("click", function (e) {
    console.log('Класс "super_element" присутствует в элементе "div"');

    if (e.target.classList.contains("super_element")) {
        console.log(e.target.tagName.toLowerCase());
    }
});

let textArea = document.querySelector("textarea");

textArea.addEventListener("mouseover", function () {
    console.log("Вы навели на textarea");
});

let ul = document.querySelector("ul");

ul.addEventListener('click', function (e) {

    if (e.target.tagName.toLowerCase() === 'button') {
        console.log(e.target.textContent);
    }
});

let arr = document.getElementsByTagName("li");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        arr[i].style.backgroundColor = 'aqua';
    }

}