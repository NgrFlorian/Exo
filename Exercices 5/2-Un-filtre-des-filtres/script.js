/* 
    La méthode .filter() est très importante à maîtriser, mais peut être assez complexe à appréhender au départ.
    
    Mettez votre chapeau de filtreur en chef et résolvez ces différents problèmes.
*/


/* 
    A. Vers l'infini et l'au delà.

    Filtrez les entreprises dont le revenue annuel est supérieur à 500 milliards de dollars dans un nouveau tableau appelé "filteredCompanies" et retournez le dans la console.
*/

const companies = [
  {
    name: "Walmart",
    revenue: 600
  },
  {
    name: "Saudi Aramco",
    revenue: 552
  },
  {
    name: "Amazon",
    revenue: 513
  },
  {
    name: "Sinopec",
    revenue: 480
  },
  {
    name: "PetroChina",
    revenue: 480
  },
  {
    name: "Exxon Mobil",
    revenue: 398
  },
]
console.log(companies);


filteredCompanies = companies.filter(index => index.revenue > 500);
console.log(filteredCompanies);


/* 
    B. Ménage de printemps.

    Supprimez toutes les valeurs falsy du tableau "values" ci-dessous.
    Retournez dans la console un tableau "truthyValues" contenant les valeurs restantes.
*/

const values = ["", undefined, "a", "a", 99, 0, true, false, 5, 5, 5];


values.forEach(element => {
  if (element !== "" || element !== undefined || element !== 0 || element !== false) {
    truthyValues = values.unshift(element);
}});
console.log(truthyValues);

// const truthyValues = values.filter(value => value);
// console.log(truthyValues);


/* 
    C. Nom de nom.

    Retournez un nouveau tableau "filteredNames" contenant seulement les prénoms commençant par la lettre A et ayant une longueur minimale de 5.
*/

const names = ["Adrien", "Paul", "Victor", "Alexandre", "Aurélie", "Antoine"];

const filteredNames = names.filter( index => index.charAt(0) === "A" && index.length >= 5);

console.log(filteredNames);