let itemCollection = document.querySelectorAll('.dropdown-item');

itemCollection.forEach(item => {
    item.classList.add('super-dropdown');
});

let btn = document.querySelectorAll('.btn');

btn.forEach(button => {
    button.classList.toggle('btn-secondary')
});

let mun = document.querySelectorAll('.menu');

mun.forEach(menu => {
    menu.classList.remove('dropdown-menu');
});

let dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

let idSelct = document.querySelector('#dropdownMenuButton');
idSelct.id = 'superDropdown';

let atrib = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
atrib.dataset.dd = '3';


let tog = document.querySelector('.dropdown-toggle');
tog.removeAttribute('type');