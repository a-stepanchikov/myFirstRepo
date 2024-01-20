'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 5;
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Конструктор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные');

    do  {
        screenPrice = prompt("Сколько будет стоить данная работа?")
        } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        let howPrice = 0

        if (i === 0) {
            prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            prompt("Какой дополнительный тип услуги нужен?");
        }
        sum += +prompt('Сколько это будет стоить?');
        
        do {
            howPrice = prompt('Сколько это будет стоить?');
        } while (!isNumber(howPrice))

        sum += +howPrice
    }
    return sum
}

const getTitle = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getFullPrice() {
    return +screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
      return "Даем скидку в 10%"
  } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%"
  } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена"
  } else {
      return "Что то пошло не так"
  }   
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log ("allServicePrices", allServicePrices);
console.log (screens.length);
console.log (getRollbackMessage(fullPrice));
console.log (servicePercentPrice);