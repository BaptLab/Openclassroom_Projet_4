function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//MON CODE


//ISSUE n°1 - Fermeture de la modale

//Récupération de l'élement "X"
const modalCloseBtn = document.querySelector(".close");

//Ajout d'un évènement au click
modalCloseBtn.addEventListener('click', closeModal);

// copie de la fonction launchmodal en inversant les paramètres 
function closeModal() {
  modalbg.style.display = "none";
}


//ISSUE N°2 - Implémenter les entrées du formulaire

  /* (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
  (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

  Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
  Les données doivent être saisies correctement :
  (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide. (cf.HTML) 
  (2) Le champ du nom de famille a un minimum de 2 caractères  / n'est pas vide. (cf.HTML)
  (3) L'adresse électronique est valide. (déjà fait cf. HTML)
  (4) Pour le nombre de concours, une valeur numérique est saisie. (déjà fait)
  (5) Un bouton radio est sélectionné. (required ajouté au HTML MAIS pas de message d'erreur si vide)
  (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée. (required ajouté au HTML MAIS pas de message d'erreur si vide)
  Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
  */

//Récupération des inputs selon le HTML
//MODIFS - précision des ID lorsque cela est possible

const cguAccepted = document.getElementById("checkbox1");
const eventAlert = document.getElementById("checkbox2");

//tournaments locations 
//QUESTION : la variable doit-elle porter le nom du lieu sachant que celui-ci est déjà dans la value ?
const nextTournamentLocation1 = document.getElementById("location1");
const nextTournamentLocation2 = document.getElementById("location2");
const nextTournamentLocation3 = document.getElementById("location3");
const nextTournamentLocation4 = document.getElementById("location4");
const nextTournamentLocation5 = document.getElementById("location5");
const nextTournamentLocation6 = document.getElementById("location6");


//Check des inputs + renvoi de valeur selon le check


  //Attendances Check

  let numberOfTournamentInputCheck = false;

  const numberOfTournamentAttendances = document.getElementById("quantity-of-tournaments");
  numberOfTournamentAttendances.addEventListener('blur', numberOfTournamentInputChecking);
  
  function numberOfTournamentInputChecking () {
    const inputValue = numberOfTournamentAttendances.value;
    if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
    {
      document.getElementById("formData-tournament-attendances").setAttribute("data-error-visible", "true");
      numberOfTournamentInputCheck = false;
    }
    else 
    {
      document.getElementById("formData-tournament-attendances").setAttribute("data-error-visible", "false");
      numberOfTournamentInputCheck = true;
    }
  }

  //BirthDate

  let birthDateInputCheck = false;

  const birthDateUser = document.getElementById("birth-date");
  birthDateUser.addEventListener('blur', birthDateInputChecking);
  
  function birthDateInputChecking(){
    const inputValue = birthDateUser.value;
    if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
    {
      document.getElementById("formData-birth-date").setAttribute("data-error-visible", "true");
      birthDateInputCheck = false;
    }
    else 
    {
      document.getElementById("formData-birth-date").setAttribute("data-error-visible", "false");
      birthDateInputCheck = true;
    }
  }


  //Email check

  let emailUserInputCheck = false;

  const emailUser = document.getElementById("email");
  emailUser.addEventListener('blur', emailInputChecking);
  
  function emailInputChecking () {
    const inputValue = emailUser.value;
    if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
    {
      document.getElementById("formData-email").setAttribute("data-error-visible", "true");
      emailUserInputCheck = false;
      //Si champ incorrect --> garde la valeur en false
    }
    else 
    {
      document.getElementById("formData-email").setAttribute("data-error-visible", "false");
      emailUserInputCheck = true;
      //Si champ remplit correctement --> change la valeur en true
    }
  }


  //Last name check

  let lastNameInputCheck = false;

  const lastNameUser = document.getElementById("last-name");
  lastNameUser.addEventListener('blur', lastNameInputChecking); 
  
  function lastNameInputChecking() {
    const inputValue = lastNameUser.value;
    if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
    {
      document.getElementById("formData-last-name").setAttribute("data-error-visible", "true");
      lastNameInputCheck = false;
    }
    else 
    {
      document.getElementById("formData-last-name").setAttribute("data-error-visible", "false");
      lastNameInputCheck = true;
    }
  }


  //First name check

  let firstNameInputCheck = false;

  const firstNameUser = document.getElementById("first-name");
  firstNameUser.addEventListener('blur', firstNameInputChecking);
  
  function firstNameInputChecking() {
      const inputValue = firstNameUser.value;
      if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
      {
        document.getElementById("formData-first-name").setAttribute("data-error-visible", "true");
        firstNameInputCheck = false;
      }
      else 
      {
        document.getElementById("formData-first-name").setAttribute("data-error-visible", "false");
        firstNameInputCheck = true;
      }
    }



//Formulaire submition

    const btnSubmit = document.querySelector(".btn-submit");
    btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      if (
      firstNameInputCheck === true && 
      lastNameInputCheck === true && 
      emailUserInputCheck === true &&
      birthDateInputCheck === true &&
      numberOfTournamentInputCheck === true) 
      {
        alert("Formulaire correctement rempli");
      }
      else 
      {
        firstNameInputChecking()
        lastNameInputChecking()
        emailInputChecking ()
        birthDateInputChecking()
        numberOfTournamentInputChecking ()
      }
      
    })
 

 


