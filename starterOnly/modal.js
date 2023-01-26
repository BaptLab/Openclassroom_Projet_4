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
const firstNameUser = document.getElementById("first-name");
const lastNameUser = document.getElementById("last-name");
const emailUser = document.getElementById("email");
const birthDateUser = document.getElementById("birth-date");
const numberOfTournamentAttendances = document.getElementById("quantity-of-tournaments");

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


//ISSUE n°3 - Ajouter des messages de validation et/ou d'erreur

/* Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

"Veuillez entrer 2 caractères ou plus pour le champ du nom."
"Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance." */

//QUESTION - Est-il attendu qu'une classe relative au message d'erreur soit crée en css puis ajouter aux élements ?

// 1er message - First Name
//création du paragraphe affichant le msg d'erreur
const errorFirstName = document.createElement('p');
//insertion du texte d'erreur dans le paragraphe
errorFirstName.textContent = "Veuillez renseigner au minimum 2 caractères pour ce champ";
//ajout du code css relatif au msg d'erreur
errorFirstName.style.color ="#FF4E60";
errorFirstName.style.fontSize ="10px";
errorFirstName.style.fontFamily ="var(--font-default)";
errorFirstName.style.paddingLeft ='0px';
errorFirstName.style.paddingBottom ='0px';
//ajout de l'élement au DOM via le parent correspondant à la zone d'input concernée
document.getElementById("formData-first-name").appendChild(errorFirstName);
//ajout du code css pour la bordure rouge
firstNameUser.style.border = "solid 2px #FF4E60";

// 2e message - Last Name
const errorLastName = document.createElement('p')
errorLastName.textContent = "Veuillez renseignez au minimum 2 caractères pour ce champ";
//version contracté du css pour le message d'erreur
errorLastName.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-left: 0px; padding-bottom: 0px;';
document.getElementById('formData-last-name').appendChild(errorLastName);
lastNameUser.style.border = "solid 2px #FF4E60";

// 3e message - Email
const errorEmail = document.createElement('p');
errorEmail.textContent = "Veuillez entrer une adresse au format valide (exemple : prenom.nom@gmail.com)";
errorEmail.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-left: 0px; padding-bottom: 0px;';
document.getElementById('formData-email').appendChild(errorEmail);
emailUser.style.border = "solid 2px #FF4E60";

//4e message - Date de naissance
const errorBirthDate = document.createElement('p');
errorBirthDate.textContent = "Veuillez entrer une adresse au format valide (exemple : prenom.nom@gmail.com)";
errorBirthDate.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-left: 0px; padding-bottom: 0px;';
document.getElementById('formData-birth-date').appendChild(errorBirthDate);
birthDateUser.style.border = "solid 2px #FF4E60";



//6e message - Choix d'une localisation
const errorLocation = document.createElement('p');
errorLocation.textContent = "Veuillez sélectionner une ville";
errorLocation.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-left: 0px; padding-bottom: 5px;';
document.getElementById('formData-location').appendChild(errorLocation);


//7e message - Choix d'une localisation
const errorCgu = document.createElement('p');
errorCgu.textContent = "Vous devez accepter les conditions d'utilisations pour envoyer le formulaire";
errorCgu.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-bottom :15px; padding-left : 0px; padding-top:3px;';
document.getElementById('formData-cgu').appendChild(errorCgu);


/* numberOfTournamentAttendances.addEventListener("blur",isEmpty(numberOfTournamentAttendances));

function isEmpty (input) {
  if (input.value.length == 0) {
    setErrorTournamentAttendances()
  }
}
 */

function setErrorTournamentAttendances(){
  //5e message - Nombre de tournoi participé
  const errorTournamentAttendances = document.createElement('p');
  errorTournamentAttendances.textContent = "Veuillez renseignez une valeur";
  errorTournamentAttendances.style.cssText = 'color: rgb(255, 78, 96); font-size: 10px; font-family: var(--font-default); padding-left: 0px; padding-bottom: 0px;';
  document.getElementById('formData-tournament-attendances').appendChild(errorTournamentAttendances);
  numberOfTournamentAttendances.style.border = "solid 2px #FF4E60";
}


numberOfTournamentAttendances.addEventListener("blur", () => {
    if (numberOfTournamentAttendances.value.length == 0) {
    setErrorTournamentAttendances()
  }
});
