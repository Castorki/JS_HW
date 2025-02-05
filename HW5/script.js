
let links = document.querySelectorAll('.card-link');
links.forEach(link => {
    link.textContent = 'ссылка';
});

let linksCollection = document.querySelectorAll('.card-body .card-link');
console.log(linksCollection);

let title = document.querySelector('title');
console.log(title.textContent);

let card_title = document.querySelector('.card-title');
console.log(card_title.parentNode);


const firstDataNumber50 = document.querySelector('[data-number="50"]');
console.log(firstDataNumber50);


let p = document.createElement('p');
p.textContent = 'Hello';

let card = document.querySelector('.card');

card.insertBefore(p, card.firstChild);

let h6 = document.querySelector('h6');
h6.remove();

