import React, { useEffect, useState } from "react";
import { api } from "../../utils/Api";
import Card from "./card";
// const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
//     headers: {
//         authorization: '33d68f8a-3b24-4840-804d-6b0ee1010dc9',
//         'Content-Type': 'application/json'
//     }
// });
function Main(props) {
    const [isUserName, setIsUserName] = useState()
    const [isUserDesctiption, setIsUserDesctiption] = useState()
    const [isUserAvatar, setIsUserAvatar] = useState()
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setIsUserName(userData.name)
                setIsUserDesctiption(userData.about)
                setIsUserAvatar(userData.avatar)
                setCards(cards)
            })
    }, [])
    return (
        <div className="main">
            <section className="profile">
                <div className="profile__avatar-block">
                    <button type="button" onClick={props.changeAvatar} className="profile__avatar-edit-button" />
                    <img className="profile__avatar" src={isUserAvatar} alt="Кусто" />
                </div>
                <article className="profile__info">
                    <div className="profile__heading">
                        <h1 className="profile__name">{isUserName}</h1>
                        <button type="button" onClick={props.onEditProfile} className="profile__edit-button" />
                    </div>
                    <p className="profile__subtitle">{isUserDesctiption}</p>
                </article>
                <button type="button" onClick={props.addNewCard} className="profile__add-button" />
            </section>
            <section className="elements">
                {cards.map((x) => 
                <Card
                    key={x._id}
                    card= {x}
                    likes = {x.likes.length}
                    click = {props.onCardClick}
                />
                )}
            </section>
        </div>
    )
}
export default Main
