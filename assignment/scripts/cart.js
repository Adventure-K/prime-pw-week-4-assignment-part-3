console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// Function Definitions //

function isFull(basket) { // Function to set basket capacity at 5 items
    if (basket.length < maxItems) {
        return false;
    }
    else {
        return true;
    }
} //End function isFull

function addItem(item) { // Function to add items to basket
    if (isFull(basket) === false) {
        basket.push(item);
        console.log('Adding item:', item);
        return true;
    }
    else {
        console.log('Adding item:', item);
        console.log('The basket is full.', item, 'could not be added.');
        return false;
    }
} //End function addItem

function removeItem(item) { // Function to remove a specified item from the basket
    let removedItem = basket.indexOf(item);
    console.log('Removing item:', item);
    // console.log(removedItem);    
    if (removedItem === -1) {
        console.log('Item not found in basket.');
        return null;
    }
    basket.splice(removedItem, 1);
    console.log(item, 'removed.');
} //End function removeItem

function listItems(array) { // Function to display basket contents
    console.log("List of items in basket:");
    if (array.length === 0) {
        console.log('Your basket is empty!');
        return;
    } 
    for (x of array){
        console.log('   ', x);
    }
} //End function listItems

function empty(array) { // Function to clear the basket of items
    array.splice(0, array.length);
    console.log('Basket has been emptied.');
} //End function empty

// Implementation //

listItems(basket);

addItem('Avocados');
addItem('Bread');
addItem('Salt');
addItem('Butter');
addItem('Minced Garlic');
addItem('Cilantro');

// Moved dialog inside of function. Deprecated these lines
// console.log('function addItem: adding avocados to basket', addItem('avocados'));
// console.log('function addItem: adding bread to basket', addItem('bread'));
// console.log('function addItem: adding salt to basket', addItem('salt'));
// console.log('function addItem: adding butter to basket', addItem('butter'));
// console.log('function addItem: adding minced garlic to basket', addItem('minced garlic'));
// console.log('function addItem: adding cilantro to basket', addItem('cilantro')); 

listItems(basket);

removeItem('Salt');

listItems(basket);

removeItem('Cherries');

listItems(basket);

empty(basket);

console.log(basket);

listItems(basket);

