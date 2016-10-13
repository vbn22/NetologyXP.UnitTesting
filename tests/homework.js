"use strict";
<!--
# Домашнее задание

* Выбрать предметную область
* Написать тесты на предложенные сценарии
* Добавить свои собственные сценарии и написать тесты
* Выбрать 5-10 тестов и предложить несколько вариантов их именования, выбрать лучшее и объяснить, почему это имя лучше других


## Видеопрокат
* Клиент может взять фильм в прокат
* Клиент может взять несколько фильмов и получить скидку 5% за каждый, но не более 15%
* Не выдавать больше 5 фильмов за раз одному клиенту
* Если клиент не вернул прошлый фильм, не выдавать ему новых
* Приведи друга, получи дополнительную скидку 10%
* 
-->

// client class

class Client {
    constructor(should) {
        this._should = should;
    };

    get should() {
        return this._should;
    };

    canGetFilm(){
        if (!this.should){
            return true;
        } else {
            return false;
        }

    }
    getFilms(number){
        let countFilms; 
        return countFilms;
    }
    getBasePriceForFilms(number){
        let price;
        return price;
    }
    getDiscountPriceForFilms(number){
        let discount;
        return discount;
    }
    getDiscountForFriends(friends){
        let discount;
        return discount;
    }
}

// Tests

suite('Client In Video Rental', function () {
    let client = Client();
    let shouldClient = Client(true);

    // Клиент может получить фильм в прокате
    // clientCanGetFilm_Always


    suite('ClientGetFilmShould', function () {
        test("clientCanGetFilrm_Always", function () {
            assert.equal(true, client.canGetFilm());
        });
    });

    suite('WhenClientGet_2_Films', function () {
        test("DiscountIs_10", function () {
            assert.equal(10, client.getDiscountPriceForFilms(2));
        });
    });
    
    suite('WhenClientGet_5_Films', function () {
        test("DiscountIs_15_%", function () {
            assert.equal(15, client.getDiscountPriceForFilms(5));
        });
        test("ClientGetPreesent%", function () {
            assert.equal(true, client.present);
        });
    });
    
    suite('ClientGetMAX_5_Films', function () {
        test("ForOneClient", function () {
            assert.equal(5, client.getFilms(7));
        });
    });

    suite('ClientDidNOTGetFilm', function () {
        test("ClientIsShould", function () {
            assert.equal(false, shouldClient.canGetFilm());
        });
        
        test("TodayIsHoliday", function () {
            assert.equal(false, shouldClient.canGetFilm());
        });
    });

    // Если клиент привед друзей - ему подарок и скидка 10 процентов
    // WhenClientBringFriend_DiscountIs_10 --> лучше так как можно пересичлять бонусы которые получил клиент при этой ситуации
    // DiscountIs10_ClientBringFriend
    // ClientBringFriend_DiscountIs10

    suite('WhenClientBringFriend', function () {
        test("DiscountIs_10", function () {
            assert.equal(10, client.getDiscountForFriends(1));
        });
        
        test("ClientGetPreesent", function () {
            assert.equal(true, client.present);
        });
    });
    
    
});
