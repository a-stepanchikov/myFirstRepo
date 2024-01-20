'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 5;
let allServicePrices
let fullPrice
let servicePercentPrice



const getTitle = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const getAllServicePrices = function (servp1, servp2) {
    return servp1 + servp2
}

function getFullPrice(count, call) {
    return count + call(servicePrice1, servicePrice2)
}

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * (rollback / 100);
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

fullPrice = getFullPrice(screenPrice, getAllServicePrices);
servicePercentPrice = getServicePercentPrices();
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log (screens.length);
console.log(getRollbackMessage(fullPrice));
console.log (getServicePercentPrices());
