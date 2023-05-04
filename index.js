const coffeeMenu = require ('./coffee_data');

console.log (coffeeMenu);

//Print an array of all the drinks on the menu.

console.log("All drinks on the menu:");
const allDrinks = coffeeMenu.map (function (drink){
 return drink.name});

console.log(allDrinks);

//Print an array of drinks that cost 5 and under.

console.log ("drinks cost 5 and under");

const cheaperDrinks = coffeeMenu.filter ( function (drink, ){
return drink.price <=5 ;

});

const cheaperDrinksName = cheaperDrinks.map(function (drink){
return drink.name;
});

console.log(cheaperDrinksName);

//Print an array of drinks that are priced at an even number.

console.log ("Even number priced drinks")

const evenPriced = coffeeMenu.filter (function (drink) {
    return drink.price % 2 === 0;
})

const evenPricedDrinkName = evenPriced.map (function (drink){
    return drink.name;

})

console.log (evenPricedDrinkName);

//Print the total if you were to order one of every drink.

const totalOfDrinks= coffeeMenu.reduce(function (total, drink){
    return total + drink.price;
},0)

console.log ("Total cost of one of every drink:" + totalOfDrinks);

//Print an array with all the drinks that are seasonal.

console.log ("Seasonal Drinks");

const seasonalDrinks = coffeeMenu.filter (function (drink){
    return drink.seasonal;
})

const seasonalDrinkNames = seasonalDrinks.map ( function(drink){
return drink.name;
})

console.log (seasonalDrinkNames);

//Print all the seasonal drinks with the words "with imported beans" after the item name. 

console.log ("seasonal drinks with imported beans");

const importedBeans = seasonalDrinkNames.map (function (drink){
    return `${drink} with imported beans`;

})

console.log (importedBeans);