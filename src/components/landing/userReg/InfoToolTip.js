import React from "react";

function InfpToolTip (){
return (
    <div className="infoToolTipOverlay">
        <div className=" menu infoToolTipOverlay__menu">
        <button className="menu__close-icon"/>
        <img className="infoToolTipOverlay__image"/>
        <h2 className="infoToolTipOverlay__text">Вы успешно зарегестрировались</h2>
        </div>
    </div>
)
}

export default InfpToolTip