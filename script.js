'use strict';

const books = document.querySelectorAll('.books'),
    arrBooks = document.querySelectorAll('.book');
const arr = Object.keys(arrBooks).sort((prev, next) => {
    if (arrBooks[prev].firstElementChild.innerText > arrBooks[next].firstElementChild.innerText) {
        return 1;
    }
    if (arrBooks[prev].firstElementChild.innerText < arrBooks[next].firstElementChild.innerText) {
        return -1;
    }
});
for (let i = 0; i < arr.length; i++) {
    books[0].appendChild(arrBooks[arr[i]]);
};

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books[0].children[2].querySelector('h2').querySelector('a').text = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const sortChapter = collection => {
    const sortElements = arr => {
        const arrInd = Object.keys(arr).sort((prev, next) => {
            if (arr[prev].textContent > arr[next].textContent) {
                return 1;
            }
            if (arr[prev].textContent < arr[next].textContent) {
                return -1;
            }
        });
        let arrNew = [];
        for (let i = 0; i < arrInd.length; i++) {
            arrNew.push(arr[arrInd[i]]);
        }
        return arrNew;
    };

    const elem = collection.querySelectorAll('li');
    let arrChapter = [],
        arrApp = [];
    elem.forEach(el => {
        if (el.textContent.indexOf('Введение') > -1) {
            collection.insertBefore(el, elem[0]);
        }
        if (el.textContent.indexOf('Предисловие') > -1) {
            collection.insertBefore(el, elem[1]);
        }
        if (el.textContent.indexOf('Глава') > -1) { arrChapter.push(el); }
        if (el.textContent.indexOf('Приложение') > -1) { arrApp.push(el); }
    });
    arrChapter = sortElements(arrChapter);
    arrChapter.forEach(el => { collection.appendChild(el); });
    arrApp = sortElements(arrApp);
    arrApp.forEach(el => { collection.appendChild(el); });
};

sortChapter(books[0].children[1].querySelector('ul'));
sortChapter(books[0].children[4].querySelector('ul'));

let child = document.createElement('li');
child.innerText = 'Глава 8: За пределами ES6';
books[0].children[5].querySelector('ul').appendChild(child);
sortChapter(books[0].children[5].querySelector('ul'));