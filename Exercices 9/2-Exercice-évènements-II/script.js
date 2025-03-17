/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/


// document.addEventListener("mousemove",handleSubmit)
// let circle = document.querySelector("circle")

// function handleSubmit(e){
//     // console.log("Ca bouge !");
//       let currentMousePosx = e.pageX;
//       let currentMousePosy = e.pageY;
//     console.log(currentMousePosy);
//     console.log(currentMousePosx);
//     console.log("");
//         circle = document. elementFromPoint(currentMousePosx, currentMousePosy)
      
// }

const circle = document.querySelector('.circle');

document.addEventListener('mousemove', (e) => {
  const newX = e.clientX - circle.offsetWidth / 2; // Centre le cercle sur la souris
  const newY = e.clientY - circle.offsetHeight / 2;
  // Applique les nouvelles coordonnées
  circle.style.left = `${newX}px`;
  circle.style.top = `${newY}px`;
});



/*@@@@@@@@@@@@@@@@@@@@@@@@   CORRIGEEEEEEEEEE      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const circle = document.querySelector(".circle");
document.addEventListener("mousemove", handleCircle);

function handleCircle(e) {
  console.log(`${e.pageX}px, ${e.pageY}px`);
  circle.style.transform = `translate(calc(${e.pageX}px - 50%), calc(${e.pageY}px - 50%))`
  */
