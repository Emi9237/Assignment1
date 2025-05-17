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
}