
import '../index.css'
import './landing/header.js'
import { React, useState, useEffect } from 'react';
import Header from './landing/header.js';
import Footer from './landing/footer';
import PopupWithForm from './landing/popupWithForm';
import Main from './landing/main';
import ImagePopup from './landing/imagePopup';
import { userContext } from '../contexts/CurrentUserContext.js'
import { api } from "../utils/Api";
import EditProfilePopup from "../components/landing/EditProfilePopup.js"
import EditAvatarPopup from "../components/landing/EditAvatrPopup.js"
import AddPlacePopup from './landing/AddPlacePopup';





function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false)
  const [isCardsPopupOpen, setIsCardsPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [selectedCard, setIsSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState([])


  useEffect(() => {
    Promise.all([api.getUserData()])
      .then(([userData]) => {
        setCurrentUser(userData)
      })
  }, [])

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCards(cards)
      })
      .catch(err => {
        console.log(err);
      });

  }, [])

  //Меняем профиль
  function handleUpdateUser({ name, about }) {
    api.changeUserInfo(name, about)
      .then((newInfo) => {
        setCurrentUser(newInfo)
      })
  }
  //Avatar
  function handleUpdateAvatar(link) {
    api.changeUserAvatar(link.avatar)
      .then((newInfo) => {
        setCurrentUser(newInfo)
      })
  }

//Создаем карточку 
function handleAddPlaceSubmit (value) {
  console.log();
  api.addNewCard (value.place, value.link) 
  .then ((newCard)=>{
    setCards([newCard, ...cards]);
    
  })
  
}



  // лайки на карточку 
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.setLikeCard(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  //Удаление карточки 
  function handleCardDelete(card) {
    if (card.owner._id === currentUser._id) {
      api.deleteMyCard(card._id)
      const newArr = cards.filter(
        function (elem) {
          return elem !== card
        }
      )
      setCards(newArr)
    } else {
      console.log(currentUser._id);
      console.log(card._id);
    }
  }


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
  // function openPopupConfirm() {
  //   // document.querySelector('.popup_type_confirm').classList.add('popup_active')
  //   setIsEditProfilePopupOpen(true)
  // }
  function handleCardClick(card) {
    setIsSelectedCard(card)
  }


  function closeState() {
    setIsEditProfilePopupOpen(false);
    setIsCardsPopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsSelectedCard(null)
  }

  const allPopups = document.querySelectorAll('.popup')

  function closeAllPopups() {
    allPopups.forEach((elem) => {
      elem.classList.add('animation-close')
    })
    setTimeout(() => {
      closeState()
      allPopups.forEach((elem) => {
        elem.classList.remove('animation-close')
      })
    }, 500);
  }

  return (

    <>
      <userContext.Provider value={currentUser}>
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
              // confirm={openPopupConfirm}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              cards={cards}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>
        </div>

        {/* <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          closeAll={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          buttonText={'Сохранить'}
          className="menu__button menu__submit"
        >
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
        </PopupWithForm> */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
         <AddPlacePopup isOpen={isCardsPopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit}/>

        <PopupWithForm
          name='confirm'
          title='Вы уверены?'
          closeAll={closeAllPopups}
          isOpen={isConfirmPopupOpen}
        />
        <ImagePopup
          card={selectedCard}
          closeAll={closeAllPopups}
        />
      </userContext.Provider>
    </>
  );
}

export default App;
