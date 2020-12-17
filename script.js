
const cafeItems = [

    { name: "Drip Coffee", category:  "Coffee", description: "Regular drip style coffee", price:  2.5 },
    { name: "Espresso", category:  "Coffee", description: "A double shot of espresso", price:  2.5 },
    { name: "Americano", category:  "Coffee", description: "Espresso with hot water", price:  3 },
    { name: "Latte", category:  "Coffee", description: "Espresso with steamed milk", price:  4 },
    { name: "Cappucino", category:  "Coffee", description: "Espresso with foamed milk", price:  4 },
    { name: "Tea", category:  "Hot Drink", description: "Your choice of hot <br>black or green tea", price:  2.5 },
    { name: "Hot Chocolate", category:  "Hot Drink", description: "Chocolate syrup with <br>steamed milk", price:  2 },
    { name: "Mocha", category: "Hot Drink", description: "Espresso with chocolate <br>syrup and steamed milk", price: 3 },
    { name: "Iced Tea", category:  "Cold Drink", description: "Sun-brewed black iced tea", price:  2.5 },
    { name: "Sparkling Water", category:  "Cold Drink", description: "A bottle of San Pellegrino", price:  3 },
    { name: "Mate", category: "Cold Drink", description: "A South American strong tea", price: 3},
    { name: "Salad", category:  "Food", description: "Mixed greens with your choice <br>of dressing", price:  5 },
    { name: "Soup", category:  "Food", description:  "Bowl of soup. Varies daily.", price:  4 },
    { name: "Pastry", category:  "Food", description: "Rotating pastry", price:  3},

]

let image = document.querySelectorAll('img');
let deleteButton = document.querySelectorAll('.delete');
let checkout = document.querySelector('.checkoutItems');
let checkoutOutside = document.getElementById('checkout');
checkoutOutside.style.width = "0px";
let cartButton = document.querySelector('.cart');
let cost = document.querySelector('.totalCost');
let checkoutButton = document.querySelector('.checkoutButton');
let cart = [];
let totalCost = 0;
let newCartItem;
let index;

//Toggle cart open or close
const toggleCart = () => {

    if (checkoutOutside.style.width == '0px') {
        checkoutOutside.style.width = '150px';
        checkoutOutside.style.padding = '10px';
        checkoutOutside.style.transition = 'width 1s'
        checkout.style.display = 'block';
        cost.style.display = 'block';
        checkoutButton.style.display = 'block';
    } else {
        checkoutOutside.style.height = 'auto';
        checkoutOutside.style.width = '0px';
        checkoutOutside.style.padding = '0px';
        checkout.style.display = 'none';
        cost.style.display = 'none';
        checkoutOutside.style.transition = 'width 1s'
        checkoutButton.style.display = 'none';
    }
}

//Add to cart function
image.forEach((image) => {
    image.addEventListener("click", (addToCart) => {
        let imageParent = image.parentNode;
        let imageId = imageParent.id;
        index = cart.length;
        let idNum = imageId.substring(1);
        cart.push(cafeItems[idNum]);

        newCartItem = document.createElement("div");
        let itemDetails = document.createTextNode(`${cafeItems[idNum].name} • ${cafeItems[idNum].price}`);
        newCartItem.appendChild(itemDetails);
        checkout.appendChild(newCartItem);
        newCartItem.innerHTML = `${newCartItem.innerHTML} <button id=I${index} class ="delete" onclick='removeFromCart()'>X</button>`;
        totalCost = cafeItems[idNum].price + totalCost;
        newCartItem.style.display = 'flex';
        newCartItem.style.justifyContent = 'space-between';
        cost.innerHTML = (`<strong>Total Cost: </strong>${totalCost}`);
        cartButton.innerHTML = `${cart.length} items in your cart`;
    })

})

//Remove items from cart function

let removeFromCart = function () {
    let cartItems = checkout.childNodes;

    cartItems.forEach((newCartItem) => {
        const deleteItem = () => {
            let item = newCartItem.lastChild.id;
            let itemsIndex = document.getElementById(item);
            let str = itemsIndex.parentNode.innerText;
            let price = str.match(/[\d\.]+/);
            let priceNumber = parseFloat(price[0]);
            totalCost = totalCost - priceNumber;
            cost.innerHTML = `<strong>Total Cost: </strong>${totalCost}`;
            cart.splice(itemsIndex, 1);
            cartButton.innerHTML = `${cart.length} items in your cart`;
            if (cost.innerHTML == `<strong>Total Cost: </strong>0`) {
                cost.innerHTML = ``;
                checkoutOutside.style.height = 'auto';
                checkoutOutside.style.width = '0px';
                checkoutOutside.style.padding = '0px';
                checkout.style.display = 'none';
                cost.style.display = 'none';
                checkoutOutside.style.transition = 'width 1s'
            }
            itemsIndex.parentNode.remove();
        }
        newCartItem.addEventListener("click", deleteItem);
    })
}


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

//hides or shows sections of the menu in desktop version
let showMenu = () => {
    let coffeeLink = document.querySelector('.companyName2')
    let hotLink = document.querySelector('.companyName3')
    let coldLink = document.querySelector('.companyName4')
    let foodLink = document.querySelector('.companyName5')

    let coffeeMenu = document.querySelector('.coffees')
    let hotMenu = document.querySelector('.hotDrinks')
    let coldMenu = document.querySelector('.coldDrinks')
    let foodMenu = document.querySelector('.food')

    coffeeLink.addEventListener('click', () => {
        coffeeMenu.classList.add('show')
        hotMenu.classList.add('hide')
        coldMenu.classList.add('hide')
        foodMenu.classList.add('hide')
        hotMenu.classList.remove('show')
        coldMenu.classList.remove('show')
        foodMenu.classList.remove('show')
    });

    hotLink.addEventListener('click', () => {
        hotMenu.classList.add('show')
        coffeeMenu.classList.add('hide')
        coldMenu.classList.add('hide')
        foodMenu.classList.add('hide')
        coffeeMenu.classList.remove('show')
        coldMenu.classList.remove('show')
        foodMenu.classList.remove('show')
    });

    coldLink.addEventListener('click', () => {
        coldMenu.classList.add('show')
        coffeeMenu.classList.add('hide')
        hotMenu.classList.add('hide')
        foodMenu.classList.add('hide')
        coffeeMenu.classList.remove('show')
        hotMenu.classList.remove('show')
        foodMenu.classList.remove('show')
    });

    foodLink.addEventListener('click', () => {
        foodMenu.classList.add('show')
        coffeeMenu.classList.add('hide')
        hotMenu.classList.add('hide')
        coldMenu.classList.add('hide')
        coffeeMenu.classList.remove('show')
        hotMenu.classList.remove('show')
        coldMenu.classList.remove('show')
    });
}

showMenu();

let validationForm = document.querySelector('.validationForm');
validationForm.style.display = 'none';
let cardNumberInput = document.getElementById('cardNumber');
let cardNumberLabel = document.getElementById('cardNumberLabel');
let cardCVVInput = document.getElementById('CVV');
let cardCVVLabel = document.getElementById('cardCVVLabel');
let cardExpirationInput = document.getElementById('expiration');
let cardExpirationLabel = document.getElementById('expirationLabel');
let cashLabel = document.getElementById('cashLabel');
let cashInput = document.getElementById('cashInput');
let cashButton = document.querySelector('.cashButton');
let cardButton = document.querySelector('.cardButton');
let startOverButton = document.querySelector('.startOver');
let finalPaymentButton = document.querySelector('.finalPayment');
startOverButton.style.display = 'none';
cashLabel.style.display = 'none';
cardNumberLabel.style.display = 'none';
cardCVVLabel.style.display = 'none';
cardExpirationLabel.style.display = 'none';
cardNumberInput.style.display = 'none';
cardCVVInput.style.display = 'none';
cardExpirationInput.style.display = 'none';
cashInput.style.display = 'none';

let grandTotal = 0;

const checkoutScreen = () => {
    let mainHead = document.querySelector('.mainHeader');
    let menuItems = document.querySelector('.menuItems');
    let receiptItems = document.querySelector('.receiptItems');
    let receiptTotal = document.querySelector('.receiptTotal');
    let newCart = [];
    let subtotal = totalCost;
    let tax = 0;
    let taxPercent = .06;

    for (i = 0; i < cart.length; i++) {
        newCart += `${cart[i].name} • ${cart[i].price}<br>`;
    }

    tax = totalCost * taxPercent;
    console.log(tax)

    grandTotal = tax + subtotal;

    receiptTotal.innerHTML = `<strong>Subtotal:</strong> $${subtotal}<br>
        <strong>Tax:</strong> $${tax}<br>
        <strong>Grand Total:</strong> $${grandTotal}`;

    receiptItems.innerHTML = newCart;
    if (validationForm.style.display == 'none') {
        validationForm.style.display = 'block';
    }
    mainHead.classList.remove('blurOff');
    mainHead.classList.add('blurOn');
    menuItems.classList.remove('blurOff');
    menuItems.classList.add('blurOn');
}

const cashOption = () => {
    cardNumberInput.style.display = 'none';
    cardCVVInput.style.display = 'none';
    cardExpirationInput.style.display = 'none';
    cashInput.style.display = 'block';
    cashLabel.style.display = 'block';
    cardNumberLabel.style.display = 'none';
    cardCVVLabel.style.display = 'none';
    cardExpirationLabel.style.display = 'none';

}

const cardOption = () => {
    cashInput.style.display = 'none';
    cardNumberInput.style.display = 'block';
    cardCVVInput.style.display = 'block';
    cardExpirationInput.style.display = 'block';

    cashLabel.style.display = 'none';
    cardNumberLabel.style.display = 'block';
    cardCVVLabel.style.display = 'block';
    cardExpirationLabel.style.display = 'block';

}

const finalPayment = () => {
    let cashTendered = cashInput.value;
    let lastMessage = document.querySelector('.lastMessage');
    let change = (cashTendered - grandTotal).toFixed(1);
    let remainder = (grandTotal - cashTendered).toFixed(1);
    if (cashTendered > grandTotal) {
        lastMessage.innerHTML = `Your change is $${change}. Thank you!`
        cashLabel.style.display = "none";
        cashInput.style.display = "none";
        cashButton.style.display = "none";
        cardButton.style.display = 'none';
        startOverButton.style.display = 'block';
        finalPaymentButton.style.display = 'none';
    } else if (cashTendered == grandTotal) {
        lastMessage.innerHTML = `No change needed. Thank you!`
        cashLabel.style.display = "none";
        cashInput.style.display = "none";
        cashButton.style.display = "none";
        cardButton.style.display = 'none';
        startOverButton.style.display = 'block';
        finalPaymentButton.style.display = 'none';
    } else {
        lastMessage.innerHTML = `That is not enough money. You still owe $${remainder}.`
    }

    if (cardNumberInput.value != "" && cardCVVInput.value != "" && cardExpirationInput.value != ""){
       lastMessage.innerHTML = "Thank you for your order!"
       cashButton.style.display = "none";
       cardButton.style.display = 'none';
       cardNumberInput.style.display = 'none';
       cardCVVInput.style.display = 'none';
       cardExpirationInput.style.display = 'none';
       cardNumberLabel.style.display = 'none';
       cardCVVLabel.style.display = 'none';
       cardExpirationLabel.style.display = 'none';
       startOverButton.style.display = 'block';
       finalPaymentButton.style.display = 'none';
    } 
}

const exitValidationForm = () => { 
    let mainHead = document.querySelector('.mainHeader');
    let menuItems = document.querySelector('.menuItems');
    mainHead.classList.add('blurOff');
    mainHead.classList.remove('blurOn');
    menuItems.classList.add('blurOff');
    menuItems.classList.remove('blurOn');
    validationForm.style.display = 'none';
}

const newOrder = () => {
    location.reload();
}