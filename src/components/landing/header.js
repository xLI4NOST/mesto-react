import React from 'react';
import headerLogo from '../../images/vector/header__logo.svg'

function Header(props) {
    return (
        <div className='header'>
            <img className='header__logo' alt='logo' src={headerLogo} />
            <button className='header__button'><a href='/sign-up'>Войти</a></button>
        </div>
    )
}
export default Header