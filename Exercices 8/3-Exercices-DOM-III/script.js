/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

const scrollToTop = document.querySelector (".push-top-button") // selectiopn du bouton
scrollToTop.addEventListener("click", topBTN)  //  ajout de la fonction au bouton

function topBTN () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// function topBTN () {document.documentElement.scrollTop = 0;}
// function topBTN () {document.documentElement.scrollIntoView({behavior: 'smooth', block: 'start'})}



/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/

const scrollToNews = document.querySelector (".scroll-to-newsletter") // selectiopn du bouton
scrollToNews.addEventListener("click", newsBTN)  //  ajout de la fonction au bouton



//créer une function newsBTN pour scroller jusqu'au millieu de la page entiere, pile poil au milieru de la section newsletter

function newsBTN () {
    window.scrollTo({
        top: document.querySelector("input").offsetTop,
        behavior: 'smooth'
    })}



// function newsBTN () {
//     window.scrollTo({
//         top: 
//         behavior: 'smooth'
//     })}

//@@@@@@@@@@@@Corrigé@@@@@@@@@@@@@@@@

const scrollToNewsletterBtn = document.querySelector(".scroll-to-newsletter");

scrollToNewsletterBtn.addEventListener("click", slideToMidNewsletter);

function slideToMidNewsletter() {
  const newsletterDimensions = document.querySelector(".newsletter").getBoundingClientRect();
  const newsletterTopPosition = window.scrollY + newsletterDimensions.top;

  console.log(newsletterTopPosition);

  window.scrollTo({
    top: newsletterTopPosition + (newsletterDimensions.height / 2),
    behavior: "smooth"
  });
}