import React from 'react';
import headerLogo from '../../images/vector/header__logo.svg'

function Header (){
    return(
        <div className='header'>
        <img className='header__logo' alt='logo' src ={headerLogo}/>
        </div>
    )
}
export default Header