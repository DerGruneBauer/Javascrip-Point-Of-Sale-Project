
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
let deleteButton = document.querySelectorAll('.delete');
let cart = [];
let totalCost = 0;


//Add to cart function
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
        cost.innerHTML = (`<strong>Total Cost: </strong>${totalCost}`);

    })
})

//Removal of items from cart

deleteButton.forEach((deleteButton) => {
    deleteButton.addEventListener('click', (removeFromCart) => {

    })
})


//Additions of names, descriptions and prices
document.querySelector('.dripCoffeeDes').innerHTML = `${cafeItems[0].name}<br>${cafeItems[0].description}<br>${cafeItems[0].price}`;
document.querySelector('.espressoDes').innerHTML = `${cafeItems[1].name}<br>${cafeItems[1].description}<br>${cafeItems[1].price}`;
document.querySelector('.americanoDes').innerHTML = `${cafeItems[2].name}<br>${cafeItems[2].description}<br>${cafeItems[2].price}`;
document.querySelector('.latteDes').innerHTML = `${cafeItems[3].name}<br>${cafeItems[3].description}<br>${cafeItems[3].price}`;
document.querySelector('.cappucinoDes').innerHTML = `${cafeItems[4].name}<br>${cafeItems[4].description}<br>${cafeItems[4].price}`;
document.querySelector('.teaDes').innerHTML = `${cafeItems[5].name}<br>${cafeItems[5].description}<br>${cafeItems[5].price}`;
document.querySelector('.hotChocoDes').innerHTML = `${cafeItems[6].name}<br>${cafeItems[6].description}<br>${cafeItems[6].price}`;
document.querySelector('.mochaDes').innerHTML = `${cafeItems[7].name}<br>${cafeItems[7].description}<br>${cafeItems[7].price}`;
document.querySelector('.icedTeaDes').innerHTML = `${cafeItems[8].name}<br>${cafeItems[8].description}<br>${cafeItems[8].price}`;
document.querySelector('.waterDes').innerHTML = `${cafeItems[9].name}<br>${cafeItems[9].description}<br>${cafeItems[9].price}`;
document.querySelector('.mateDes').innerHTML = `${cafeItems[10].name}<br>${cafeItems[10].description}<br>${cafeItems[10].price}`;
document.querySelector('.saladDes').innerHTML = `${cafeItems[11].name}<br>${cafeItems[11].description}<br>${cafeItems[11].price}`;
document.querySelector('.soupDes').innerHTML = `${cafeItems[12].name}<br>${cafeItems[12].description}<br>${cafeItems[12].price}`;
document.querySelector('.pastryDes').innerHTML = `${cafeItems[13].name}<br>${cafeItems[13].description}<br>${cafeItems[13].price}`;



