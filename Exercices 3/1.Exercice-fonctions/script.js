/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/


dividedBy10 = (num) => num * 10
console.log(dividedBy10(5));

function dividedBy2(a){
  return a / 2
}
console.log(dividedBy2(100));


// dividedBy10 = (a) => a / 10
// console.log(dividedBy10(100));


// function dividedBy2(a){
//   return a / 2
// }
// console.log(dividedBy2(100));





/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/


const weather = {
  getFahrenheit(celsius){return(celsius * 1.8) + 32}
}

console.log(weather.getFahrenheit(100));



// const weather = {
//   getFahrenheit: (celsius) => (celsius * 1.8) + 32
// }

// console.log(weather.getFahrenheit(30));




/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
{
  name: "Jean",
  nationality: "FR"
},
{
  name: "Victor",
  nationality: "FR"
},
{
  name: "Paul",
  nationality: "FR"
},
{
  name: "Jack",
  nationality: "EN"
},
{
  name: "Giulia",
  nationality: "IT"
},
]



function areFromNationality(arr, nationality) {
  return arr.every(arr2 => arr2.nationality === nationality);
}

console.log(areFromNationality(travelers, "FR")); // false
console.log(areFromNationality(travelers, "EN")); // false
console.log(areFromNationality([{ name: "Alice", nationality: "EN" }], "EN")); // true














// function areFromNationality(nation){
//     let result
//      if (!travelers.nationality === nation){
//      result = false
//      console.log(result);
//      }
//      else {
//       result = true
//     }
//     return result
// }

// console.log(areFromNationality("FR"));
























// function areFromNationality(arr, callback){
//   for (const value of arr) {
//     if (!callback(value)){
//       return false
//     }
//   }
//   return true
// }
 
// console.log(areFromNationality(travelers, travelers => travelers.nationality === "FR"));
// console.log(areFromNationality(travelers, travelers => travelers.nationality === "EN"));
// console.log(areFromNationality(travelers, travelers => travelers.nationality === "IT"));
