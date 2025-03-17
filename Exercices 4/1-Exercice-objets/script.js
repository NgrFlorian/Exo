/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute un console.log("Que desirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...)) et name avec les valeurs que vous souhaitez.
*/

const restaurant = {
    waiter: () => console.log("Que désirez-vous ?"),
    theme: "japonais",
    name: "yoko"
}

restaurant.waiter()


/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet ci-dessous.
  
*/

const dam = {
    name: "Grand Coulee Dam",
    capacity: 6.809,
    height: 168,
    length: 1592,
    volume: 9155942
  }
  

const prop1 = Object.keys(dam)
console.log(prop1);

const prop2 = []
for (const prop in dam) { 
    prop2.push(prop)
}
console.log(prop1);

  
    
   /* 
      3. Copie
  
      Copiez, à l'aide du spread operator, les valeurs du tableau names dans un nouveau tableau namesCopy.
      Changez la valeur du dernier prénom du tableau names en "Tom".
  
      Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
       */
  
  const names = ["Jack", "Paul", "Lucas"];

  const namesCopy = [...names]
  console.log(names);

  namesCopy[2] = "tom"
  
  console.log(namesCopy);
  