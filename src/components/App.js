
import '../index.css'
import './landing/header.js'
import { useState } from 'react';
import Header from './landing/header.js';
import Footer from './landing/footer';
import PopupWithForm from './landing/popupWithForm';
import Main from './landing/main';
import ImagePopup from './landing/imagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false)
  const [isCardsPopupOpen, setIsCardsPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [selectedCard, setIsSelectedCard]= useState (null)

  const avatarInputChild = (
    <>
      <input
        id="avarat-link"
        type="url"
        name="link"
        required=""
        noValidate=""
        minLength={2}
        placeholder="Ссылка на картинку"
        className="form__input form-avatar__input"
      />
      <span
        id="avarat-link-error"
        className="error-span menu-avatar__error-span"
      />
      <button
        disabled
        type="submit"
        className="menu-avatar__button menu__button menu__submit"
      >
        Сохранить
      </button>
    </>
  )


  const cardInputChild = (
    <>
      <input
        id="cardName"
        type="text"
        name="name"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required=""
        noValidate=""
        className="form__input form-cards__input form-cards__input_type_text"
      />
      <span id="cardName-error" className="error-span" />
      <input
        id="link"
        type="url"
        name="link"
        required=""
        noValidate=""
        minLength={2}
        placeholder="Ссылка на картинку"
        className="form__input form-cards__input form-cards__input_type_link"
      />
      <span id="link-error" className="error-span" />
      <button
        disabled
        type="submit"
        className="menu__button menu-cards__buttonCreate menu__submit"
        value="Создать"
      >
        Создать
      </button>
    </>
  )

  const profileInputChild = (
    <>
      <input
        id="user-name"
        type="text"
        name="name"
        required=""
        minLength={2}
        maxLength={40}
        placeholder="Имя"
        className="form__input form__input_type_name"
      />
      <span id="user-name-error" className="error-span" />
      <input
        id="about"
        type="text"
        name="about"
        required=""
        minLength={2}
        maxLength={200}
        placeholder="Вид деятельности"
        className="form__input form__input_type_job"
      />
      <span id="about-error" className="error-span" />
      <button disabled type="submit" className="menu__button menu__submit">
        Сохранить
      </button>
    </>
  )



  function openEditProfile() {
    // document.querySelector('.popup_type_profile').classList.add('popup_active')
    setIsEditProfilePopupOpen(true)
  }
  function openAddNewCard() {
    // document.querySelector('.popup_type_cards').classList.add('popup_active')
    setIsCardsPopupOpen(true)
  }
  function openChangeAvatar() {
    // document.querySelector('.popup_type_avatar').classList.add('popup_active')
    setIsAvatarPopupOpen(true)
  }
  function openPopupConfirm() {
    // document.querySelector('.popup_type_confirm').classList.add('popup_active')
    setIsEditProfilePopupOpen(true)
  }
function handleCardClick (card) {
  setIsSelectedCard(card)
}

function closeState (){
  setIsEditProfilePopupOpen(false);
  setIsCardsPopupOpen(false);
  setIsAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsSelectedCard(null)
}

const allPopups = document.querySelectorAll('.popup')

  function closeAllPopups() {
  allPopups.forEach((elem)=>{
elem.classList.add('animation-close')
  })
   setTimeout(() => {
     closeState()
     allPopups.forEach((elem)=>{
      elem.classList.remove('animation-close')
        })
   }, 500);
   
  }

  return (
    <>

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Место</title>
      <div className='page'>
        <div className="wrapper">
          <Header />
          <Main
            onEditProfile={openEditProfile}
            addNewCard={openAddNewCard}
            changeAvatar={openChangeAvatar}
            confirm={openPopupConfirm}
            onCardClick={handleCardClick}
          >

          </Main>
          <Footer />
        </div>
      </div>
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        children={profileInputChild}
        closeAll={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
      />
      <PopupWithForm
        name='cards'
        title='Новое место'
        children={cardInputChild}
        closeAll={closeAllPopups}
        isOpen={isCardsPopupOpen}
        />
      <PopupWithForm
        name='avatar'
        title='Сменить Аватар'
        children={avatarInputChild}
        closeAll={closeAllPopups}
        isOpen={isAvatarPopupOpen}
      />
      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        closeAll={closeAllPopups}
        isOpen={isConfirmPopupOpen}
      />
      <ImagePopup
      card = {selectedCard}
      closeAll={closeAllPopups}
      />
    </>

  );
}

export default App;
