const editProfile = document.querySelector(".profile__button-edit");
const popupCloseButton = document.querySelector(".popup__close-button")
const popup = document.querySelector(".popup");

editProfile.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
let aboutInput = document.querySelector(".popup__input-about");
let profileName = document.querySelector(".profile__title");
let profileAbout = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup__input-name");


function openPopup() {
  popup.classList.add("popup__opened");

  nameInput.placeholder = profileName.textContent;
  aboutInput.placeholder = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove("popup__opened");
}

let formElement = document.querySelector(".popup__edit-profile-form");

function handleProfileFormSubmit(submitEvent){
  submitEvent.preventDefault();


  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  nameInput.value = "";
  aboutInput.value = "";
  
  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);