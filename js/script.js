/*'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function() {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        //appData.title = appData.getTitle()

        appData.logger() 
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function() {
        do {
            appData.title = prompt("Как называется ваш проект?");
        } while (!isNaN(appData.title))

        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!isNaN(name))

            let price = 0;

            do  {
                 price = prompt("Сколько будет стоить данная работа?")
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price})

        }

        for (let i = 0; i < 2; i++) {
            let name 
            do {
                name = prompt("Какой дополнительный тип услуг нужен?");
            } while (!isNaN(name))
            
            let howPrice = 0

            do {
                howPrice = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(howPrice))

            appData.services[name] = +howPrice
        }        

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {

        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }

    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%"
        } else if (price < 15000 && price >= 0) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }   
    },

    logger: function () {
        console.log (appData.fullPrice);
        console.log (appData.servicePercentPrice);
        console.log (appData.screens);
        for (let key in appData) {
            console.log ("Ключ: " + key + " " + "Значение: " + appData[key]);
        }
    }
}

appData.start()*/
