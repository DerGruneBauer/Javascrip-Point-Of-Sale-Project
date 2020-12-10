
const cafeItems = [
    { name: "Drip Coffee", category:  "Coffee", description: "Regular drip style coffee", price:  2.5 },
    { name: "Espresso", category:  "Coffee", description: "A double shot of espresso", price:  2.5 },
    { name: "Americano", category:  "Coffee", description: "Espresso with hot water", price:  3 },
    { name: "Latte", category:  "Coffee", description: "Espresso with steamed milk", price:  4 },
    { name: "Cappucino", category:  "Coffee", description: "Espresso with foamed milk", price:  4 },
    { name: "Tea", category:  "Hot Drink", description: "Your choice of hot black or green tea", price:  2.5 },
    { name: "Hot Chocolate", category:  "Hot Drink", description: "Chocolate syrup with steamed milk", price:  2 },
    { name: "Mocha", category: "Hot Drink", description: "Espresso with chocolate syrup and steamed milk", price: 3 },
    { name: "Iced Tea", category:  "Cold Drink", description: "Sun-brewed black iced tea", price:  2.5 },
    { name: "Sparkling Water", category:  "Cold Drink", description: "A bottle of San Pellegrino", price:  3 },
    { name: "Mate", category: "Cold Drink", description: "A South American strong tea", price: 3},
    { name: "Salad", category:  "Food", description: "Mixed greens with your choice of dressing", price:  5 },
    { name: "Soup", category:  "Food", description:  "Bowl of soup. Varies daily.", price:  4 },
    { name: "Pastry", category:  "Food", description: "Rotating pastry", price:  3},
]

let image = document.querySelectorAll('img');
let cart = [];
let totalCost = 0;

image.forEach((image) => {
    image.addEventListener("click", (addToCart) => {
        //listen for click on specific image. collect ID/index number and return the object at that index to cart
        let imageParent = image.parentNode;
        let imageId = imageParent.id;
        let idNum = imageId.substring(1);
        console.log(idNum); 

        cart.push(cafeItems[idNum]);
        console.log(cart);

        //create new div with pertinent info to add to cart when image is clicked.
        let checkout = document.querySelector('.checkoutItems');
        let cost = document.querySelector('.totalCost');
        let newCartItem = document.createElement("div");
        let itemDetails = document.createTextNode(`${cafeItems[idNum].name} will cost ${cafeItems[idNum].price}`);
        newCartItem.appendChild(itemDetails);
        checkout.appendChild(newCartItem);

        totalCost = cafeItems[idNum].price + totalCost;
        cost.innerHTML = (`The total cost will be ${totalCost}`);

    })
})

