'use strict';

const cart = {                                      //объявление cart
  items: [],                                        //массив с товарами
  totalPrice: 0,                                    //итоговая цена 
  count: 0,                                         //количество товаров
  getTotalPrice() {                                 //функция получения итоговой суммы товаров
    return this.totalPrice;                         //возврат из итоговой цены
  },

  add(name, price, count = 1) {                     //добавить товар со значениями имя, цена и количество
    const obj = {name, price, count};               //объявление переменной со значениями
    cart.items.push(obj);                           //добавление к 
    this.increaseCount(count);
    this.calculateItemPrice(price, count);
  },
  increaseCount(count) {
    this.count += count;
  },

  calculateItemPrice(price, count) {
    return this.totalPrice += price * count;
  },

  clear() {
    this.totalPrice = 0;
    this.count = 0;
    this.items = [];
  },
  print() {
    console.log(JSON.stringify(cart));
    this.getTotalPrice();
  },
};

cart.add('cup', 100, 5);
cart.add('cup', 300, 2);
cart.add('pancakes', 50, 5);
cart.print();