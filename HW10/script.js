(() => {
    function createHeader() {
        let mainContainer = document.querySelector('.main__container');

        let headerDiv = document.createElement('div');
        headerDiv.classList.add('header');
        headerDiv.classList.add('center');
        headerDiv.style.backgroundColor = '#222';
        headerDiv.style.display = 'flex';
        headerDiv.style.justifyContent = 'space-between';
        headerDiv.style.paddingTop = '18px';
        headerDiv.style.paddingBottom = '19px';

        let rightContainer = document.createElement('div');
        rightContainer.classList.add('right_container');
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '33px';
        rightContainer.style.alignItems = 'center';

        let leftContainer = document.createElement('div');
        leftContainer.classList.add('left_container');
        leftContainer.style.display = 'flex';
        leftContainer.style.gap = '41px';

        let logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = 'img/logo.svg';
        logo.alt = 'Logo';

        let serchIcon = document.createElement('img');
        serchIcon.classList.add('search_icon');
        serchIcon.src = 'img/search.svg';
        serchIcon.alt = 'Search icon';

        let menu = document.createElement('img');
        menu.classList.add('menu-icon');
        menu.src = 'img/menu.svg';
        menu.alt = 'Menu';

        let profile = document.createElement('img');
        profile.classList.add('profile-icon');
        profile.src = 'img/profi.svg';
        profile.alt = 'Profile';

        let cart = document.createElement('img');
        cart.classList.add('cart-icon');
        cart.src = 'img/cart.svg';
        cart.alt = 'Cart';

        leftContainer.append(logo, serchIcon);
        rightContainer.append(menu, profile, cart);
        headerDiv.append(leftContainer, rightContainer);
        mainContainer.appendChild(headerDiv);
    }

    function createBrandPreview() {
        let mainContainer = document.querySelector('.main__container');

        let brandPreviewContainer = document.createElement('div');
        brandPreviewContainer.classList.add('brand__preview');
        brandPreviewContainer.classList.add('center');
        brandPreviewContainer.style.backgroundColor = '#F1E4E6';
        brandPreviewContainer.style.display = 'flex';
        brandPreviewContainer.style.gap = '63px';
        brandPreviewContainer.style.alignItems = 'center';

        let brandModal = document.createElement('img');
        brandModal.classList.add('brand_modal_photo');
        brandModal.src = 'img/brandModel.png';
        brandModal.alt = 'Brand modal photo';

        let brandNameContainer = document.createElement('div')
        brandNameContainer.classList.add('brand_name_container');
        brandNameContainer.style.display = 'flex';
        brandNameContainer.style.gap = '16px';

        let separator = document.createElement('div');
        separator.classList.add('separator');
        separator.style.width = '12px';
        separator.style.height = '92px';
        separator.style.backgroundColor = '#F16D7F';

        let brandName = document.createElement('h2');
        brandName.classList.add('brand_name');


        let brand = document.createElement('span');
        brand.classList.add('brand');
        brand.textContent = 'THE BRAND ';
        brand.style.fontSize = '48px';
        brand.style.fontStyle = 'normal';
        brand.style.lineHeight = '58px';
        brand.style.color = '#222';
        brand.style.fontWeight = '900';

        let of = document.createElement('span');
        of.classList.add('of');
        of.textContent = 'OF LUXERIOUS ';
        of.style.fontSize = '32px';
        of.style.fontStyle = 'normal';
        of.style.lineHeight = '38px';
        of.style.color = '#222';
        of.style.fontWeight = '700';

        let fashion = document.createElement('span');
        fashion.classList.add('fashion');
        fashion.textContent = 'FASHION';
        fashion.style.fontSize = '32px';
        fashion.style.fontStyle = 'normal';
        fashion.style.lineHeight = '38px';
        fashion.style.color = '#F16D7F';
        fashion.style.fontWeight = '700';

        brandName.append(brand, of, fashion);
        brandNameContainer.append(separator, brandName);
        brandPreviewContainer.append(brandModal, brandNameContainer);
        mainContainer.appendChild(brandPreviewContainer);
    }

    function createCategories() {
        let mainContainer = document.querySelector('.main__container');

        let categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('categories');
        categoriesContainer.classList.add('center');
        categoriesContainer.style.display = 'grid';
        categoriesContainer.style.gap = '30px';
        categoriesContainer.style.gridTemplateColumns = 'repeat(3, 360px)';
        categoriesContainer.style.paddingTop = '65px';
        categoriesContainer.style.paddingBottom = '96px';

        let manCategory = document.createElement('img');
        manCategory.classList.add('category_img');
        manCategory.src = 'img/men.jpg';
        manCategory.alt = 'Men category';

        let womenCategory = document.createElement('img');
        womenCategory.classList.add('category_img');
        womenCategory.src = 'img/women.png';
        womenCategory.alt = 'Women category';


        let kidsCategory = document.createElement('img');
        kidsCategory.classList.add('category_img');
        kidsCategory.src = 'img/kids.png';
        kidsCategory.alt = 'Kids category';


        let accesorisCategory = document.createElement('img');
        accesorisCategory.classList.add('category_img');
        accesorisCategory.src = 'img/accesoires.png';
        accesorisCategory.alt = 'Accesoris category';
        accesorisCategory.style.gridColumn = 'span 3';

        categoriesContainer.append(manCategory, womenCategory, kidsCategory, accesorisCategory);
        mainContainer.appendChild(categoriesContainer);

    }

    function createTitle() {
        let mainContainer = document.querySelector('.main__container');

        let headingContainer = document.createElement('div');
        headingContainer.classList.add('main__heading');
        headingContainer.classList.add('center');
        headingContainer.style.display = 'flex';
        headingContainer.style.alignItems = 'center';
        headingContainer.style.flexDirection = 'column';
        headingContainer.style.gap = '6px';
        headingContainer.style.paddingBottom = '48px';

        let title = document.createElement('h2');
        title.classList.add('main__title');
        title.textContent = 'Fetured Items';
        title.style.fontSize = '36px';
        title.style.fontStyle = 'normal';
        title.style.lineHeight = '1.2';
        title.style.color = '#222222';
        title.style.fontWeight = '400';

        let p = document.createElement('p');
        p.classList.add('article__title');
        p.textContent = 'Shop for items based on what we featured in this week';
        p.style.fontSize = '14px';
        p.style.fontStyle = 'normal';
        p.style.lineHeight = '17px';
        p.style.color = '#9F9F9F';
        p.style.fontWeight = '400';

        headingContainer.append(title, p);
        mainContainer.appendChild(headingContainer);
    }

    function createItems(owner, itemsArray) {
        let mainContainer = document.querySelector('.main__container');

        let itemsContainer = document.createElement('div');
        itemsContainer.classList.add('items__container');
        itemsContainer.classList.add('center');
        itemsContainer.style.display = 'grid';
        itemsContainer.style.gridTemplateColumns = 'repeat(3, 360px)'
        itemsContainer.style.gap = '30px';

        itemsArray.forEach(element => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.style.backgroundColor = '#F8F8F8'
            item.style.maxWidth = '360px';
            item.style.position = 'relative';
            item.setAttribute('id', Math.round(Math.random() * 100));

            let itemImg = document.createElement('img');
            itemImg.src = element.image;
            itemImg.classList.add('item__image');

            let itemInfo = document.createElement('div');
            itemInfo.classList.add('item__info');
            itemInfo.style.display = 'flex';
            itemInfo.style.flexDirection = 'column';
            itemInfo.style.gap = '10px';
            itemInfo.style.padding = '24px 29px 20px 17px';

            let itemTitle = document.createElement('h2');
            itemTitle.classList.add('item__heading');
            itemTitle.textContent = element.title;
            itemTitle.style.fontSize = '13px';
            itemTitle.style.lineHeight = '16px';
            itemTitle.style.color = '#000000';
            itemTitle.style.fontStyle = 'normal';
            itemTitle.style.fontWeight = '400';

            let itemDescription = document.createElement('p');
            itemDescription.classList.add('item__description');
            itemDescription.textContent = element.description;
            itemDescription.style.fontSize = '14px';
            itemDescription.style.lineHeight = '17px';
            itemDescription.style.color = '#5D5D5D';
            itemDescription.style.fontStyle = 'normal';
            itemDescription.style.fontWeight = '300';

            let itemPrice = document.createElement('p');
            itemPrice.classList.add('item__price');
            itemPrice.textContent = `$${element.price}`;
            itemPrice.style.fontSize = '16px';
            itemPrice.style.lineHeight = '19px';
            itemPrice.style.color = '#F16D7F';
            itemPrice.style.fontStyle = 'normal';
            itemPrice.style.fontWeight = '400';

            let hiddenAddButton = document.createElement('div');
            hiddenAddButton.classList.add('hidden__add_button');
            hiddenAddButton.style.visibility = 'hidden';
            hiddenAddButton.style.backgroundColor = '#3A3838';
            hiddenAddButton.style.opacity = 0.86;
            hiddenAddButton.style.width = '100%';
            hiddenAddButton.style.height = '75%';
            hiddenAddButton.style.top = '0';
            hiddenAddButton.style.position = 'absolute';
            hiddenAddButton.style.display = 'flex';
            hiddenAddButton.style.justifyContent = 'center';
            hiddenAddButton.style.alignItems = 'center';

            let addButton = document.createElement('button');
            addButton.classList.add('add__button');
            addButton.style.padding = '11px 16px 9px 14px';
            addButton.style.border = '1px solid #fff';
            addButton.style.backgroundColor = '#3A3838';
            addButton.style.display = 'flex';
            addButton.style.alignItems = 'center';
            addButton.style.justifyContent = 'center';
            addButton.style.gap = '11px';

            let addButtonText = document.createElement('span');
            addButtonText.classList.add('add__button__text');
            addButtonText.textContent = 'Add to Cart';
            addButtonText.style.fontSize = '14px';
            addButtonText.style.fontStyle = 'normal';
            addButtonText.style.fontWeight = '400';
            addButtonText.style.lineHeight = '17px';
            addButtonText.style.color = '#fff';

            let cartIcon = document.createElement('img');
            cartIcon.classList.add('cart__icon');
            cartIcon.src = 'img/cartIcon.svg';
            cartIcon.alt = 'Cart icon';

            item.addEventListener('mouseover', function () {
                hiddenAddButton.style.visibility = 'visible';
            });

            item.addEventListener('mouseout', function () {
                hiddenAddButton.style.visibility = 'hidden';
            });

            addButton.addEventListener('click', function () {
                addToCart(owner, item.getAttribute('id'));
            });

            addButton.append(cartIcon, addButtonText);
            hiddenAddButton.appendChild(addButton);
            itemInfo.append(itemTitle, itemDescription, itemPrice);
            item.append(itemImg, hiddenAddButton, itemInfo);
            itemsContainer.append(item);
            mainContainer.append(itemsContainer);
        });
    }

    function createCart() {
        let mainContainer = document.querySelector('.main__container');


        let cartContainer = document.createElement('div');
        cartContainer.classList.add('cart__container');
        cartContainer.classList.add('center');
        cartContainer.style.paddingTop = '96px';
        cartContainer.style.paddingBottom = '96px';

        let cartTitleContainer = document.createElement('div');
        cartTitleContainer.classList.add('cart__title_container');
        cartTitleContainer.style.display = 'flex';
        cartTitleContainer.style.alignItems = 'center';
        cartTitleContainer.style.justifyContent = 'center';
        cartTitleContainer.style.paddingBottom = '64px';

        let cartTitle = document.createElement('h2');
        cartTitle.classList.add('cart__title');
        cartTitle.textContent = 'Cart Items';
        cartTitle.style.fontSize = '30px';
        cartTitle.style.fontStyle = 'normal';
        cartTitle.style.lineHeight = '36px';
        cartTitle.style.color = '#222222';
        cartTitle.style.fontWeight = '400';

        let choisenProductsContainer = document.createElement('div');
        choisenProductsContainer.classList.add('choisen__products');
        choisenProductsContainer.style.display = 'flex';
        choisenProductsContainer.style.flexDirection = 'column';
        choisenProductsContainer.style.gap = '40px';

        cartTitleContainer.appendChild(cartTitle);
        cartContainer.append(cartTitleContainer, choisenProductsContainer);
        mainContainer.appendChild(cartContainer);

    }

    function checkCartArray(id) {
        if (cartArray.length > 0) {
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].id === id) {
                    return false;
                }
            }
        }
        return true;
    };

    function addToCart(owner, id) {
        let choisenProductsContainer = document.querySelector('.choisen__products');
        let curentProduct = document.getElementById(id);
        let currentProductPrice = document.createElement('span');
        currentProductPrice.classList.add('current_price');
        currentProductPrice.textContent = curentProduct.querySelector('.item__price').textContent;
        currentProductPrice.style.color = '#F16D7F';


        if (checkCartArray(id)) {
            let product = document.createElement('div');
            product.classList.add('product');
            product.style.display = 'flex';
            product.style.alignItems = 'center';
            product.setAttribute('id', id);
            product.style.width = '652px';
            product.style.boxShadow = '17px 19px 24px rgba(0, 0, 0, 0.13)';


            let productImage = document.createElement('img');
            productImage.classList.add('product__image');
            productImage.src = curentProduct.querySelector('.item__image').src;
            productImage.alt = 'Product image';
            productImage.style.maxWidth = '262px';
            productImage.style.maxHeight = '306px';

            let productInfoContainer = document.createElement('div');
            productInfoContainer.classList.add('product__info_container');
            productInfoContainer.style.display = 'flex';
            productInfoContainer.style.gap = '57px';
            productInfoContainer.style.padding = '22px 22px 62px 31px'

            let productInfo = document.createElement('div');
            productInfo.classList.add('product__info');
            productInfo.style.display = 'flex';
            productInfo.style.flexDirection = 'column';
            productInfo.style.gap = '6px';

            let productTitle = document.createElement('h2');
            productTitle.classList.add('product__title');
            productTitle.textContent = curentProduct.querySelector('.item__heading').textContent;
            productTitle.style.paddingBottom = '36px';
            productTitle.style.fontSize = '24px';
            productTitle.style.fontStyle = 'normal';
            productTitle.style.lineHeight = '29px';
            productTitle.style.color = '#222222';
            productTitle.style.fontWeight = '400';

            let productPrice = document.createElement('p');
            productPrice.classList.add('product__price');
            productPrice.textContent = 'Price: ';
            productPrice.style.color = '#575757';
            productPrice.appendChild(currentProductPrice);
            productPrice.style.fontSize = '22px';
            productPrice.style.fontStyle = 'normal';
            productPrice.style.lineHeight = '26px';
            productPrice.style.fontWeight = '400';


            let productColor = document.createElement('p');
            productColor.classList.add('product__color');
            productColor.textContent = 'Color: ' + getRandomColor();
            productColor.style.fontSize = '22px';
            productColor.style.fontStyle = 'normal';
            productColor.style.lineHeight = '26px';
            productColor.style.fontWeight = '400';
            productColor.style.color = '#575757';

            let productSize = document.createElement('p');
            productSize.classList.add('product__size');
            productSize.textContent = 'Size: ' + getRandomSize();
            productSize.style.fontSize = '22px';
            productSize.style.fontStyle = 'normal';
            productSize.style.lineHeight = '26px';
            productSize.style.fontWeight = '400';
            productSize.style.color = '#575757';


            let productQuantity = document.createElement('span');
            productQuantity.classList.add('product__quantity');
            productQuantity.textContent = 'Quantity:';
            productQuantity.style.display = 'flex';
            productQuantity.style.alignItems = 'center';
            productQuantity.style.fontSize = '22px';
            productQuantity.style.fontStyle = 'normal';
            productQuantity.style.lineHeight = '26px';
            productQuantity.style.fontWeight = '400';
            productQuantity.style.color = '#575757';


            let quantityDiv = document.createElement('div');
            quantityDiv.classList.add('quantity_div');
            quantityDiv.style.display = 'flex';
            quantityDiv.style.justifyContent = 'center';
            quantityDiv.style.alignItems = 'center';
            quantityDiv.style.marginLeft = '26px';
            quantityDiv.style.border = '1px solid #EAEAEA';
            quantityDiv.style.padding = '2px 17px';

            let quantityNumber = document.createElement('p');
            quantityNumber.classList.add('quantity__number');
            quantityNumber.textContent = '1';
            productQuantity.style.fontSize = '18px';
            productQuantity.style.fontStyle = 'normal';
            productQuantity.style.lineHeight = '22px';
            productQuantity.style.fontWeight = '400';
            productQuantity.style.color = '#656565';

            let removeContainer = document.createElement('div');
            removeContainer.classList.add('remove_container');
            removeContainer.style.paddingTop = '7px';

            let removeImg = document.createElement('img');
            removeImg.classList.add('remove__product_img');
            removeImg.src = 'img/removeIcon.svg';
            removeImg.alt = 'Remove icon';

            removeImg.addEventListener('click', function (e) {
                for (let i = 0; i < cartArray.length; i++) {
                    if (cartArray[i].id === product.id) {
                        cartArray.splice(i, 1);
                    }
                }
                product.remove();
            });

            removeContainer.appendChild(removeImg);
            quantityDiv.appendChild(quantityNumber);
            productQuantity.appendChild(quantityDiv);
            productInfo.append(productTitle, productPrice, productColor, productSize, productQuantity);
            productInfoContainer.append(productInfo, removeContainer);
            product.append(productImage, productInfoContainer);
            choisenProductsContainer.appendChild(product);
            cartArray.push(product);
            setToDoDate(owner, product);

        } else {
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].id === id) {
                    cartArray[i].querySelector('.quantity__number').textContent++;
                    setToDoDate(owner, product);
                    return;
                }
            }
        }

    }

    function getRandomColor() {
        return colorDictionary[Math.round(Math.random() * (colorDictionary.length - 1) - 0)];
    };

    function getRandomSize() {
        return sizeDictionary[Math.round(Math.random() * (sizeDictionary.length - 1) - 0)];
    };

    function setToDoDate(owner, product) {
        localStorage.setItem(owner, JSON.stringify(product));
    }

    function getToDoData(owner) {
        let temp = localStorage.getItem(owner);
        return JSON.parse(temp);
    }

    function createSite(owner) {

        let mainContainer = document.createElement('div');
        mainContainer.classList.add('main__container');
        document.body.appendChild(mainContainer);


        createHeader();
        createBrandPreview();
        createCategories();
        createTitle();
        createItems(owner, fromJSON);
        createCart();

        getToDoData(owner);
    }

    window.createSite = createSite;
})();