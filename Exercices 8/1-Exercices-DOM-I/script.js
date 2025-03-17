/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/

const geth1 = document.querySelector ("h1")
geth1.style.backgroundColor = "plum"
geth1.style.color = "white"



/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/

const un = document.querySelector ("p")
un.style.backgroundColor = "green"
const deux = document.getElementById ("subtitle")
deux.style.textShadow = "2px 2px 2px black"

/*
    3. Loggez le texte du troisième <li> dans la console.
*/

const trois = document.querySelector(".list li:nth-child(3)")

console.log(trois);

/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/

const quatre = document.querySelector("img")
// const quatre = document.querySelector("img".src)
console.log(quatre);



/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/


const list = document.querySelector(".list")

const li = document.createElement("li"); // On crée un élément li
    li.textContent = "Nouveau élément"; // On lui ajoute du texte
    list.appendChild(li); // On ajoute l'élément à la liste