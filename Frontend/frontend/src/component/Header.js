import React from "react";

const Header = ({toggleModal}) => {
    return (
        <header id="header" className="container">
            <div className="header-content">
                <h1>Конструктор Телеграм-ботов</h1>
                <p>Создавайте телеграм-ботов абсолютно no-code! Мы предоставляем<br />полноценную CRM-систему, благодаря которой вы сможете следить<br />за статистикой подписчиков и взаимодействовать с ними.</p>
                <button onClick={() => toggleModal(2)}>Создать бот</button>
            </div>
        </header>
    )
}

export default Header
