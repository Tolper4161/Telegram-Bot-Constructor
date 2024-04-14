import React from "react"
import logo from "../img/logo.png"

const Navbar = ({toggleModal}) => {
    return (
        <nav id="top-navbar" className="container">
            <img src={logo} alt="logotype" className="logo" />
            <div className="links">
                <a href="#header">Главная</a>
                <a href="#features">Наши преимущества</a>
                <a href="#tariffs">Тарифы</a>
                <a href="#footer">Контакты</a>
            </div>
            <button className="log-in-btn" onClick={() => toggleModal(1)}>
                <span className="icon user"></span>
                <label for="log-in-btn">Войти</label>
            </button>
        </nav>
    )
}

export default Navbar