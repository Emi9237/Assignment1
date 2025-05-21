# Assignment 1: Shopee Web Application

A node module that displays a list of items and prices in the online store, and handles the customer order processing based on the items in their cart.

## Functions

- #1: Displays order details
- #2: Calculates subtotal
- #3: Calculates shipping fee based on subtotal
- #4: Calculates grand total based on subtotal and shipping fee
- #5: Displays selected payment method

## Set-up

**Install Node JS (LTS ver)**  
- [Download Node JS application](https://nodejs.org/en/)

At the top of a new file (e.g. app.js), type in the following code:
```js
const store = require("./LeeMeiQi_cart.js");
```

To start using the node module, type in the following text in the terminal:
```
node app.js
```

## Usage

**Edit the order array to select different items to be placed in the cart.**

*Sample order data:*
```js
const order = [
    {name: "Dress", price: 14, qty: 1},
    {name: "T-shirt", price: 8, qty: 3},
]
```

**Display the welcome message with list of items**

```js
console.log("==================== " + store.description + " ====================");
console.log("============================================================");
store.items.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});
```

**Function #1 displays order details based on the item name and quantity parameters.**

*Example of calling function #1:*
```js
console.log("============================================================");
order.forEach(item => {
    console.log(store.orderDetails(item.name, item.qty));
})
console.log("\nProceeding to make payment...");
```

**Function #2 calculates subtotal of items in the cart based on the item parameter. The subtotal variable stores the subtotal price of items which will be used in function #3.**

*Example of calling function #2:*
```js
console.log("============================================================");
let subtotal = 0;
order.forEach(item => {
    console.log(store.subTotal(item));
    subtotal += item.price * item.qty;
});
```

**Function #3 calculates shipping fee based on the subtotal parameter. The shipping variable stores the shipping fee which will be used in function #4.**

*Example of calling function #3:*
```js
console.log(store.shippingFee(subtotal));
shipping = subtotal * 0.05;
```

**Function #4 calculates final total based on the shipping and subtotal parameter.**

*Example of calling function #4:*
```js
console.log(store.finalTotal(shipping, subtotal));
```

**Function #5 displays selected payment method based on the payment name parameter.**

*Example of calling function #5:*
```js
console.log("============================================================");
console.log("Please choose one of these payment methods:")
store.methods.forEach((method, index) => {
    console.log((index + 1) + ". " + method);
});
console.log(store.paymentMethod("paynow"));

console.log("============================================================");
console.log("Your order has been placed successfully!");
```

## References
Web application link: [Shopee Home Page](https://shopee.sg/)