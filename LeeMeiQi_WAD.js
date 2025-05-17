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