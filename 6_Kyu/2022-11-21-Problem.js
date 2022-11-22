// 6 Kyu Problem - November 21st 2022
// New Cashier Does Not Know About Space or Shift
// .slice(), .toUpperCase(), .indexOf(), .sort(), .match(), new RegExp(menu.join("|"),"ig"), regexp, .map(), .charAt(), Objects.keys(obj)

/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

// making separate functions for capitalize and comparisons
let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
let capitalize = word => word.slice(0,1).toUpperCase() + word.slice(1);
let compareArr = (a,b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(compareArr).join(" ")
}

function getOrder(input) {
  let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
  return input.match(new RegExp(menu.join("|"), "ig"))
              .map(item => item.slice(0,1).toUpperCase() + item.slice(1))
              .sort((a,b) => menu.indexOf(a) - menu.indexOf(b))
              .join(" ")
}


// Using objects, Objects.keys(obj)
const MENU = {
  Burger:     1,
  Fries:      2,
  Chicken:    3,
  Pizza:      4,
  Sandwich:   5,
  Onionrings: 6,
  Milkshake:  7,
  Coke:       8,
};

let REG_CMD = new RegExp(Object.keys(MENU).join("|"), "ig")

function getOrder(cmd) {
  return cmd.match(REG_CMD)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .sort((x,y) => MENU[x] - MENU[y])
            .join(" ")
}