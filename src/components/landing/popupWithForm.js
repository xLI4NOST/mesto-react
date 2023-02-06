import React, { useEffect, useState } from "react";
function PopupWithForm(props) {
    return (
        <div onClick={props.closeAll} className={`popup  ${props.isOpen ? 'popup_active' : ''}`}  >
            <div className="menu" onClick={e => e.stopPropagation()}>
                <button className="menu__close-icon close-icon" type="button" onClick={props.closeAll} />
                <h2 className="menu__title">{props.title}</h2>
                <form className="form" onSubmit={props.onSubmit} name={`${props.name}`}>
                    {props.children}
                    <button type="submit" className={props.className}>
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm

// function closeAllPopups() {
//     const allPopup = document.querySelectorAll('.popup')
//     allPopup.forEach((elem) => {
//       elem.classList.add('animation-close')
//       setTimeout(() => elem.classList.remove('popup_active')
//         , 500);
//         setTimeout(() => elem.classList.remove('animation-close')
//         , 500); 
//     })
//   }