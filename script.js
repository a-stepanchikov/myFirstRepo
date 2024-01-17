'use strict';

let answerTitle = prompt('Как называется ваш проект?');
let answerScreens = prompt('Какие типы экранов нужно разработать?');
let answerScreenPrice = prompt('Сколько будет стоить данная работа?');
let answerAdaptive = prompt('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');



let title = answerTitle;
const screens = answerScreens;
const screenPrice = Number(answerScreenPrice);
const adaptive = !!answerAdaptive;

let answerService1 = service1;
let answerServicePrice1 = Number(servicePrice1);
let answerService2 = service2;
let answerServicePrice2 = Number(servicePrice2);

let fullPrice = screenPrice + answerServicePrice1 + answerServicePrice2;

const rollback = 5;
let percent = fullPrice * (rollback / 100);

let servicePercentPrice = Math.ceil(fullPrice - percent);


console.log (title);
console.log (screens);
console.log (screenPrice);
console.log (adaptive);
console.log (fullPrice);
console.log (servicePercentPrice);

  switch (true) {
      case fullPrice > 30000 || fullPrice == 30000:
          console.log ("Даем скидку в 10%");
          break
      case fullPrice > 15000 || fullPrice == 15000 && fullPrice < 30000:
          console.log ("Даем скидку в 5%");
          break
      case fullPrice < 15000 && fullPrice > 0 || fullPrice == 0:
          console.log ("Скидка не предусмотрена");
          break
      case fullPrice < 0:
          console.log ("Что то пошло не так");
          break
  }











