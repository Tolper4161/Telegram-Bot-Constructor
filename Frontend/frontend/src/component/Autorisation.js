import React from "react";

const Autorisation = ({ toggleModal }) => {
    return (
        <div class="shadow modal" id="modal-window">
            <div class="modal-content">
                <div class="window">
                    <form action="#" method="post">
                        <h2>Авторизация</h2>
                        <input type="email" name="email" placeholder="Почта" required="required" />
                        <input type="password" name="password" placeholder="Пароль" required="required" />
                        <a className="form-link" onClick={() => toggleModal(2)}>Регистрация</a>
                        <div className="btn-group">
                            <input type="submit" value="Отправить" />
                        </div>
                    </form>
                    <button class="close-btn" onClick={() => toggleModal(0)}><span class="icon close"></span></button>
                </div>
            </div>
        </div>
    )
}

export default Autorisation
