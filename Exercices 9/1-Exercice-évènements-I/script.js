/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/

const form = document.querySelector("form")  

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault(); 
        // console.log("coucou");
  const firstname = document.getElementById("firstname").value
  const lastname = document.getElementById("lastname").value
        // console.log(firstname);
        // console.log(lastname);
  const paragrapheFirstName = document.querySelector(".firstname")
  const paragrapheLastName = document.querySelector(".lastname")
        // console.log(paragrapheFirstName);
        // console.log(paragrapheLastName);
  paragrapheFirstName.textContent = "Votre prénom : " + firstname;
  paragrapheLastName.textContent = "Votre nom : " + lastname;
}

/*
@@@@@@@@@@@@@@@@@@@ corigé @@@@@@@@@@@@@@@@@@@@@@@@@

const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const firstNametext = document.querySelector(".firstname");
const lastNameText = document.querySelector(".lastname");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  firstNametext.textContent = `Votre prénom : ${inputs[0].value}`;
  lastNameText.textContent = `Votre nom : ${inputs[1].value}`;

  // form.reset();

  // ou
  inputs.forEach(input => input.value = "")*/
