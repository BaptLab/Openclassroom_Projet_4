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
  document.querySelector(".content").style.display ="block";
  
}


/////////////////////////////////////////////MON CODE/////////////////////////////////////////////


/*MODALES*/


  /*Modale d'inscription*/

  //SI clique sur bouton 'X' de la modale
  const modalCloseBtn = document.querySelector(".close");
  modalCloseBtn.addEventListener('click', closeModal);
  
  //--> La modale se ferme
  function closeModalContent() {
    document.querySelector(".content").style.display ="none";
  }
  

  /*Modale de confirmation*/

  //Modale de confirmation invisible par défault
  document.querySelector(".modal-confirmation").style.display ="none";

  //fonction pour faire apparaître la modale de confirmation
  function openConfirmation() {
    document.querySelector(".modal-confirmation").style.display ="flex";
  }
  
 
  /*Fermetures de toutes les modales*/
  
  //SI l'utilisateur clique sur le bouton 'close' de la modale de confirmation
  const confirmationBtnClose = document.querySelector("#js-confirmation-close-btn");
  confirmationBtnClose.addEventListener("click", closeModal);
  
  //--> Toutes les modales disparaissent + clean du formulaire
  function closeModal() {
    modalbg.style.display = "none";
    document.querySelector(".modal-confirmation").style.display ="none";
    cleanForm();
  }

   //fonction qui vide le formulaire
   function cleanForm() {
    document.getElementById('from').reset();
  }



/*IMPLEMENTER ET CONTOLER LES ENTREES + DISPLAY LES MSG D'ERREURS*/


  /*Tournament attendances*/

  //valeur de l'input initié à false (incorrect pour le formulaire)
  let numberOfTournamentInputCheck = false;

  //récupération input et ajout d'un évènement lors du remplissage
  const numberOfTournamentAttendances = document.getElementById("quantity-of-tournaments");
  numberOfTournamentAttendances.addEventListener('blur', numberOfTournamentInputChecking);
  
  //fonction de vérification de l'input 
  function numberOfTournamentInputChecking () {
    const inputValue = numberOfTournamentAttendances.value;
    if (inputValue === null || inputValue === undefined || inputValue.trim() === "") 
    {
      //si incorrect --> msg d'erreur + valeur input = false
      document.getElementById("formData-tournament-attendances").setAttribute("data-error-visible", "true");
      numberOfTournamentInputCheck = false;
    }
    else 
    {
      //si correct --> suppresion msg d'erreur + valeur input = true
      document.getElementById("formData-tournament-attendances").setAttribute("data-error-visible", "false");
      numberOfTournamentInputCheck = true;
    }
  }


  /*BirthDate*/

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


  /*Email*/

  let emailUserInputCheck = false;

  const emailUser = document.getElementById("email");
  emailUser.addEventListener('blur', emailInputChecking);
  
  function emailInputChecking () {
    const inputValue = emailUser.value;
    //ajout d'une comparaison avec une REGEX
    if (inputValue === null || inputValue === undefined || !inputValue.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) 
    {
      document.getElementById("formData-email").setAttribute("data-error-visible", "true");
      emailUserInputCheck = false;
    }
    else 
    {
      document.getElementById("formData-email").setAttribute("data-error-visible", "false");
      emailUserInputCheck = true;
    }
  }


  /*Last name check*/

  let lastNameInputCheck = false;

  const lastNameUser = document.getElementById("last-name");
  lastNameUser.addEventListener('blur', lastNameInputChecking); 
  
  function lastNameInputChecking() {
    const inputValue = lastNameUser.value;
    if (inputValue === null || inputValue === undefined || !inputValue.trim().match(/^[a-zA-Z]{2,}$/)) 
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


  /*First name check*/

  let firstNameInputCheck = false;

  const firstNameUser = document.getElementById("first-name");
  firstNameUser.addEventListener('blur', firstNameInputChecking);
  
  function firstNameInputChecking() {
      const inputValue = firstNameUser.value;
      if (inputValue === null || inputValue === undefined || !inputValue.trim().match(/^[a-zA-Z]{2,}$/)) 
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


  /*Location check*/

  let locationInputCheck = false;
  const locationBtn = document.getElementsByName('location');

  //valeur initiale du choix radio
  let locationValue = null;

    //Boucle qui ajoute un écouteur d'évenement pour chaque élement radio
    for(i = 0; i<locationBtn.length; i++) {
      locationBtn[i].addEventListener('change', (e) =>{
        //a chaque changement de radio, on attribue la valeur du choix à la variable locationValue
        locationValue = e.target.value;
        //appel de la fonction de vérification de l'input avec la valeur récupérée comme argument
        locationInputChecking(locationValue);
      } ) }

      function locationInputChecking(locationValue)  {
        if(locationValue === null || locationValue === undefined || locationValue === false)
        {
          document.getElementById("formData-location").setAttribute("data-error-visible", "true");
        }
        else
        {
          locationInputCheck = true;
          document.getElementById("formData-location").setAttribute("data-error-visible", "false");
        }
      };
  

  /*Check CGU*/

  let cguInputCheck = false;
  const cguAccepted = document.querySelector("#checkbox1");
  cguAccepted.addEventListener('change', cguInputChecking);
    
  function cguInputChecking() {
    if(cguAccepted.checked) {
      cguInputCheck = true;
      document.getElementById("formData-cgu").setAttribute("data-error-visible", "false");
    }
    else
    {
      cguInputCheck = false;
      document.getElementById("formData-cgu").setAttribute("data-error-visible", "true");
    }
  }
  

  /*Formulaire submition*/

  const btnSubmit = document.querySelector(".btn-submit");
  btnSubmit.addEventListener("click", (event) => {

    //suprression du comportement par défault du bouton//
    event.preventDefault();

    //SI : tous les input sont corrects 
    if (
    firstNameInputCheck === true && 
    lastNameInputCheck === true && 
    emailUserInputCheck === true &&
    birthDateInputCheck === true &&
    numberOfTournamentInputCheck === true &&
    locationInputCheck === true &&
    cguInputCheck === true) 

    // --> Ferme la modale d'incription + ouvre la modale de confirmation
    {
      closeModalContent();
      openConfirmation();
    }

    //SINON : -->Lance les fonctions de vérification sur chaque inputs (affichera les msg d'erreur si nécessaire)
    else 
    {
      firstNameInputChecking()
      lastNameInputChecking()
      emailInputChecking ()
      birthDateInputChecking()
      numberOfTournamentInputChecking ()
      locationInputChecking(locationValue)
      cguInputChecking()
     } 
    })
 
