# Assignment 1: Shopee Web Application

A node module that displays a list of items and prices in the online store, and handles the customer order processing based on the items in their cart.

## Functions

- Function #1: Displays order details
- Function #2: Calculates subtotal
- Function #3: Calculates shipping fee based on subtotal
- Function #4: Calculates grand total based on subtotal and shipping fee
- Function #5: Displays selected payment method

## Set-up

**Install Node JS (LTS ver)**  
- [Download Node JS application](https://nodejs.org/en/)

To start using the node module, enter the following text in the terminal:
```
node LeeMeiQi_Cart.js
```

## Usage

**Users can edit the order array to select different items to be placed in the cart.**

*Sample order data:*
```
const order = [
    {name: "Dress", price: 14, qty: 1},
    {name: "T-shirt", price: 8, qty: 3},
]
```

**Function #1 displays order details based on the item name and quantity parameters.**

*Example of calling function #1:*
```
order.forEach(item => {
    console.log(store.orderDetails(item.name, item.qty));
})
```

**Function #2 calculates subtotal of items in the cart based on the item parameter. The subtotal variable stores the subtotal price of items which will be used in function #3.**

*Example of calling function #2:*
```
let subtotal = 0;
order.forEach(item => {
    console.log(store.subTotal(item));
    subtotal += item.price * item.qty;
});
```

**Function #3 calculates shipping fee based on the subtotal parameter. The shipping variable stores the shipping fee which will be used in function #4.**

*Example of calling function #3:*
```
console.log(store.shippingFee(subtotal));
shipping = subtotal * 0.05;
```

**Function #4 calculates final total based on the shipping and subtotal parameter.**

*Example of calling function #4:*
```
console.log(store.finalTotal(shipping, subtotal));
```

**Function #5 displays selected payment method based on the payment name parameter.**

*Example of calling function #5:*
```
console.log(store.paymentMethod("paynow"));
```

## References
Web application link: [Shopee Home Page](https://shopee.sg/)