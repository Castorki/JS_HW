let ul = document.querySelector('#product-list');

fromJSON.forEach(item => {
    let li = document.createElement('li');
    li.classList.add('product-list-item');

    let img = document.createElement('img');
    img.classList.add('product-list-imeg');
    img.src = item.image;
    img.width = 150;
    img.height = 150;


    let h2 = document.createElement('h2');
    h2.classList.add('product-list-item-title');
    h2.textContent = item.title;

    let p = document.createElement('p');
    p.classList.add('product-list-item-description');
    p.textContent = item.description;

    let price = document.createElement('p');
    price.classList.add('product-list-item-price');
    price.textContent = item.price;

    let button = document.createElement('button');
    button.classList.add('product-list-item-button');
    button.textContent = 'Add to cart';

    li.append(img, h2, p, price, button);
    ul.appendChild(li);
});