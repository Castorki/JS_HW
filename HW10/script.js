(() => {
    function createTitle() {
        let div = document.createElement('div');
        div.classList.add('main__container');
        div.classList.add('center');
        div.style.paddingTop = '15px';
        div.style.paddingBottom = '48px';


        let headingContainer = document.createElement('div');
        headingContainer.classList.add('main__heading');
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
        div.append(headingContainer);
        document.body.append(div);
    }

    function createItems(itemsArray) {
        let itemsContainer = document.createElement('div');
        itemsContainer.classList.add('items__container');
        itemsContainer.style.display = 'grid';
        itemsContainer.style.gridTemplateColumns = 'repeat(3, 360px)'
        itemsContainer.style.gap = '30px';

        let main__container = document.querySelector('.main__container');

        itemsArray.forEach(element => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.style.backgroundColor = '#F8F8F8'
            item.style.maxWidth = '360px';

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

            itemInfo.append(itemTitle, itemDescription, itemPrice)
            item.append(itemImg, itemInfo);
            itemsContainer.append(item);
            main__container.append(itemsContainer);
        });
    }

    function createSite() {
        createTitle();
        createItems(fromJSON);
    }

    window.createSite = createSite;
})();