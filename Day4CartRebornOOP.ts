import { v4 as uuid } from 'uuid';

class Item {
public id: string;
public name: string;
public price: number;

constructor(name: string, price: number) {
this.id = uuid();
this.name = name;
this.price = price;
}
}

class User {
public id: string;
public name: string;
public cart: Item[] = [];

constructor(name: string) {
this.id = uuid();
this.name = name;
}

addToCart(item: Item) {
this.cart.push(item);
}

removeFromCart(itemId: string) {
this.cart = this.cart.filter(item => item.id !== itemId);
}

printCart() {
    console.log(`${this.name}'s Cart:`);
    this.cart.forEach(item => console.log(`- ${item.name}`));
    
}
}

class Shop {
public items: Item[] = [];

addItem(item: Item) {
this.items.push(item);
}

getItems() {
return this.items;
}
}

const shop = new Shop();

const user = new User('Michael');
const item1 = new Item('Laptop', 1200);
const item2 = new Item('Headphones', 150);

shop.addItem(item1);
shop.addItem(item2);

user.addToCart(item1);
user.addToCart(item2);


user.printCart();


user.removeFromCart(item1.id);
user.printCart();

