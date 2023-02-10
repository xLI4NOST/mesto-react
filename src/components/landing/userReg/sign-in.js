import React from "react";
import { useState } from "react";
import AuthApi, { authApi } from "../../../utils/AuthApi";
function SignIn (props){
    const [email, setIsEmail] = useState('')
    const [password, setIsPassword] = useState('')
    function handleSetEmail(e) {
        setIsEmail(e.target.value)
    }

    function handleSetPassword(e) {
        setIsPassword(e.target.value)
    }

    function handleSubmit (e){
        e.preventDefault()
        props.onSignin(email, password)
        
    }
    return(
        <section className="register">
        <h2 className="register__text">Вход</h2>
        <form onSubmit={handleSubmit} className="form form-register">
        <input type="email" onChange={handleSetEmail} placeholder="Email" className=" form__ input form-register__input  form-register__input_type_email"/>
        <input type="Password" onChange={handleSetPassword} placeholder="Пароль" className="form__ input form-register__input form-register_input_type_pass"/>
        <button type="submit" className="form__button form-register__button">Войти</button>
        </form>
    </section>
    )
}

export default SignIn