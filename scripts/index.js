const editProfile = document.querySelector(".profile__button-edit");
const popupCloseButton = document.querySelector(".popup__close-button")
const popup = document.querySelector(".popup");

editProfile.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);


function openPopup() {
  popup.classList.add("popup__opened");
}

function closePopup() {
  popup.classList.remove("popup__opened");
}

