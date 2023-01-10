export const page = document.querySelector('.page');
export const wrapper = page.querySelector('.wrapper');
export const buttonEditProfile = wrapper.querySelector('.profile__edit-button');
export const popupEditProfile = page.querySelector('.popup_type_profile');
export const menu = document.querySelector('.menu');
export const textName = document.querySelector('.form__input_type_name');
export const textSubtitle = document.querySelector('.form__input_type_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__subtitle');
export const formElement = popupEditProfile.querySelector('.form');
export const popupCards = document.querySelector('.popup_type_cards');
export const cardCloseButton = document.querySelector('.menu__card-close');
export const container = document.querySelector('.elements');
export const mestoName = document.querySelector('.form-cards__input_type_text');
export const mestoLink = document.querySelector('.form-cards__input_type_link');
export const formCardsElement = document.querySelector('.form-cards');
export const formAddCard = popupCards.querySelector('.form');
export const ImageclosePopupButton = document.querySelector('.image-container__close-icon')
export const closeButton = document.querySelector('.menu__close-icon');
export const avatarForm = document.querySelector ('.form-avatar');
export const profileImg = document.querySelector('.profile__avatar');
export const avatarInput = document.querySelector('.form-avatar__input');
export const avatar = document.querySelector('.profile__avatar');
export const likeScore = document.querySelectorAll ('.like-info');
export const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.menu__submit',
    activeButtonClass: 'form__button_active',
    inputErrorClass: 'form__input_error',
    errorClass: 'error-span_visible'
};

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];