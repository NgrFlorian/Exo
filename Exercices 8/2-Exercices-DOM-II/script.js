const data = [
    {
        content: "Lait",
        category: "Diary"
    },
    {
        content: "Fromage",
        category: "Diary"
    },
    {
        content: "Savon",
        category: "Wellness"
    },
    {
        content: "Pommes",
        category: "Fruits"
    },
    {
        content: "Poulet",
        category: "Meat"
    },
]

/*
    1. Écrivez une fonction fillList(list, data) qui transforme les données data en <li>.

    Un <li> par objet doit être créé.

    Chaque <li> contiendra un <p> avec le contenu de la propriété .content et un autre <p> avec le contenu de la propriété .category.

    Ajoutez ensuite chaque <li> dans la liste <ul>
*/

const shoppingListll = document.querySelector("ul")

function fillList(list, data) {
    data.forEach(element => {
        const li = document.createElement("li"); // crée li // puis crée balises <p></p>
        const licontent = `            
        <p></p>
        <p></p>
        `
        li.innerHTML = licontent // remplace tout le txt (pas encore existant) par => la const licontent

        li.querySelector("p:nth-child(1)").textContent=element.content // selectionne le premier <p>
        li.querySelector("p:nth-child(2)").textContent=element.category  // selectionne le deuxieme <p>

        list.appendChild(li)

    }); 
    
}

fillList(shoppingList, data);

console.log(shoppingList);

// CORRIGÉ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const shoppingList = document.querySelector("ul")

function fillList(list, data) {
    data.forEach(obj => {
        const li = document.createElement("li")
        const liContent = `
        <p></p>
        <p></p>
        `

        li.innerHTML = liContent

        li.querySelector("p:nth-child(1)").textContent = obj.content
        li.querySelector("p:nth-child(2)").textContent = obj.category

        list.appendChild(li)
    })
}
fillList(shoppingList, data)

/*
    2. Supprimez maintenant le premier et dernier élément de la liste.
*/

// shoppingList.removeChild(shoppingList.firstElementChild)
// shoppingList.removeChild(shoppingList.lastElementChild)