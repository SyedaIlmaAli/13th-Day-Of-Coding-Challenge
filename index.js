"use strict";
//Day 13
//Question 37
function customizeShirts(size = "small", message = "Coding is life") {
    console.log(`I would like to have ${size} shirt with ${message} printed on it.`);
}
;
customizeShirts();
customizeShirts("medium");
customizeShirts("small", "I LOVE CODING");
//Questin 38
function city(country = "Pakistan", city = "Karachi") {
    console.log(`I am born in ${city}. It is present in ${country}`);
}
city();
city("America", "Los Angeles");
city("Italy");
//Question 39
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("Los angeles", "America"));
