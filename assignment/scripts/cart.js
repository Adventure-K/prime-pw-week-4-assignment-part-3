console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item) { // Function to add items to basket
    basket.push(item);
    return true;
} //End function addItem

console.log('function addItem: adding avocados to basket', addItem('avocados'));
console.log('function addItem: adding bread to basket', addItem('bread'));
console.log('function addItem: adding salt to basket', addItem('salt'));
console.log('function addItem: adding butter to basket', addItem('butter'));
console.log('function addItem: adding minced garlic to basket', addItem('minced garlic'));

// console.log(basket);

function listItems(array) { // Function to display basket contents
    console.log("Function listItem's list of items in basket:");
    if (array.length === 0) {
        console.log('Your basket is empty!');
        return;
    } 
    for (x of array){
    console.log('   ', x);
    }
    console.log('End of list.');
} //End function listItems

listItems(basket);

function empty(array) { // Function to clear the basket of items
    array.splice(0, array.length);
    console.log('Basket has been emptied.');
} //End function empty

empty(basket);

console.log(basket);

listItems(basket);