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
    constructor(debtor) {
        this._debtor = debtor;
    };

    get debtor() {
        return this._debtor;
    };

    canGetFilm(){
        if (!this.debtor){
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
    let debtorClient = Client(true);

    // ClientGetFilmShould.clientCanGetFilrm_Always - так как результат true false
    // и возможно перечислить несколько вариантов
    suite('ClientGetFilmShould', function () {
        test("clientCanGetFilrm_Always", function () {
            assert.equal(true, client.canGetFilm());
        });
    });

    // Клиент может взять несколько фильмов и получить скидку 5% за каждый, но не более 15%
    // WhenClientGetFilm.Discount - так как может быть несколько случаев эффекта
    // когда клиент берет видео в прокате
    
    suite('WhenClientGetFilms', function () {
        test("GetDiscount", function () {
            assert.equal(10, client.getDiscountPriceForFilms(2));
        });
        test("MaxDiscount", function () {
            assert.equal(15, client.getDiscountPriceForFilms(5));
        });
        test("ClientGetPreesent%", function () {
            assert.equal(true, client.present);
        });
        test("MaxFilmForOneClient", function () {
            assert.equal(5, client.getFilms(7));
        });
    });
    
    //ClientDidNOTGetFilm.ClientIsDebtor - несколько случаев когда клиент не может взять фильм
    suite('ClientDidNOTGetFilm', function () {
        test("ClientIsDebtor", function () {
            assert.equal(false, debtorClient.canGetFilm());
        });
        
        test("TodayIsHoliday", function () {
            assert.equal(false, debtorClient.canGetFilm());
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

    // Если клиент новый - заполнить анкету/профиль
    suite('WhenClientIsNew', function () {
        test("CreateProfile", function () {
            assert.equal('created', client.createProfile());
        });
    });


    // Если фильм потерян - клиент должен заплатить 25$
    suite('WhenClientLostFilm', function () {
        test("PaidPenalty", function () {
            assert.equal(25, client.penalties());
        });
    });

});
