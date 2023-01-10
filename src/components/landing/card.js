import React from "react"
function Card(props) {
    function handleClick() {
        props.click(props.card);
      } 
    return (
        <div className="card">
            <button className="card__button-delete" type="button" />
            <img src={props.card.link} onClick={handleClick} alt={props.card.name} className="card__image" />
            <div className="card__description">
                <h2 className="card__title">{props.card.name}</h2>
                <button className="card__button-like" type="button" />
                <span id="like-info" className="like-info">{props.likes}</span>
            </div>
        </div>
    )
}

export default Card