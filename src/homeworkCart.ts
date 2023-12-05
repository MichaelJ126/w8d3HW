
//not sure what I did but was able to run the code once then tried to open it up in Jupyter for whatever reason 
//and it hasnt worked since. Tried backspacing and refreshing the window which fixed the sqigs but still not able to run sucessfully

import { v4 as uuid } from "uuid";

type Item = {
id: string;
name: string;
price: number;
description: string;
quantity: number; 
};

type User = {
id: string;
name: string;
age: number;
cart: Item[];
};


const createUser = (name: string, age: number): User => ({
id: uuid(),
name,
age,
cart: [],
});

const createItem = (name: string, price: number, description: string, quantity: number = 1): Item => ({
id: uuid(),
name,
price,
description,
quantity,
});

const addToCart = (item: Item, user: User): void => {
user.cart.push(item);
};

const removeFromCart = (item: Item, user: User): void => {
user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
};

const removeQuantityFromCart = (item: Item, user: User, quantity: number): void => {
const itemIndex = user.cart.findIndex(cartItem => cartItem.id === item.id);

if (itemIndex !== -1) {
user.cart[itemIndex].quantity -= quantity;
if (user.cart[itemIndex].quantity <= 0) {
user.cart.splice(itemIndex, 1);
}
}
};

const cartTotal = (user: User): number => {
return user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const printCart = (user: User): void => {
console.log(`User: ${user.name}'s Cart`);
user.cart.forEach(item => console.log(`- ${item.name} (Quantity: ${item.quantity}): $${item.price * item.quantity}`));
console.log('---');
};


const user = createUser('Sammy Jenkins', 50);
const itemA = createItem('Item A', 10, 'Description for Item A');
const itemB = createItem('Item B', 15, 'Description for Item B');
const itemC = createItem('Item C', 20, 'Description for Item C');

addToCart(itemA, user);
printCart(user);
console.log('Total:', cartTotal(user));

addToCart(itemB, user);
addToCart(itemC, user);
printCart(user);
console.log('Total:', cartTotal(user));

removeQuantityFromCart(itemB, user, 2); 
printCart(user);
console.log('Total:', cartTotal(user));

removeFromCart(itemA, user); 
printCart(user);
console.log('Total:', cartTotal(user));

