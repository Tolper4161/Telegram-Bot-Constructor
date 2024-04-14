import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="container">
                <table>
                    <td>
                        <span className="icon logotype"></span>
                    </td>
                    <td>
                        <h6>Контакты</h6>
                        <a href="#">Посты на vc.ru: architectbotvcru</a><br />
                        <a href="#">Новостной ТГ-канал: @architectbotchannel</a>
                    </td>
                    <td>
                        <h6>Пользователям</h6>
                        <a href="#">Политика конфиденциальности</a><br />
                        <a href="#">Пользовательское соглашение</a>
                    </td>
                    <td>
                        <h6>Материалы</h6>
                        <a href="#">Обучение</a><br />
                        <a href="#">О нас</a>
                    </td>
                    <td>
                        <h6>Помощь</h6>
                        <a href="#">Часто задаваемые вопросы</a><br />
                        <a href="#">Бот поддержки: @architectbot</a>
                    </td>
                </table>
                <p>© 2024 Bot Architect</p>
            </footer>
        )
    }
}

export default Footer
