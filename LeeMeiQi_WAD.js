module.exports = {
    description : "Welcome to Shopee!",
    items : [
        "T-shirt, $8", 
        "Blouse, $12",
        "Pants, $9.90",
        "Skirt, $10.90",
        "Dress, $14"
    ],
    methods :[
        "PayNow",
        "Google Pay",
        "Credit Card/Debit Card"
    ],
    //Displays the customer's order details
    addOrder(name, qty) {
        if (qty > 1) {
            return "You have " + qty + " " + name + "s in your shopping cart.";
        }
        return "You have " + qty + " " + name + " in your shopping cart.";
    },
    //Calculates the price of all items
    subTotal(item) {
        const total = item.price * item.qty;
        if (item.qty > 1) {
            return "Total price of " + item.name + "s: $" + total.toFixed(2);
        }
        return "Total price of " + item.name + ": $" + total.toFixed(2);
    },
    //Calculates the shipping fee based on the sub total
    shippingFee(subtotal) {
        shipping = subtotal * 5/100
        return "Shipping fee: $" + shipping.toFixed(2);
    },
    //Calculates the final total by adding sub total and shipping fee together
    finalTotal(subtotal, shipping) {
        finalTotal = shipping + subtotal;
        return "\nFinal total: $" + finalTotal.toFixed(2);
    },
    //Displays the user's payment method
    paymentMethod(payment) {
        return "\nYou have used " + payment + " as your payment method.";
    },
}

const store = module.exports;
const order = [
    {name: "Dress", price: 14, qty: 1},
    {name: "T-shirt", price: 8, qty: 3},
]

//Calling the functions

console.log("==================== " + store.description + " ====================");
console.log("============================================================");
store.items.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});

console.log("============================================================");
order.forEach(item => {
    console.log(store.addOrder(item.name, item.qty));
})
console.log("\nProceeding to make payment...");

console.log("============================================================");
let subtotal = 0;
order.forEach(item => {
    console.log(store.subTotal(item));
    subtotal += item.price * item.qty;
});

console.log(store.shippingFee(subtotal));
shipping = subtotal * 0.05;
console.log(store.finalTotal(shipping, subtotal));

console.log("============================================================");
console.log("Please choose one of these payment methods:")
store.methods.forEach((method, index) => {
    console.log((index + 1) + ". " + method);
});
console.log(store.paymentMethod("paynow"));

console.log("============================================================");
console.log("Your order has been placed successfully!");