import React, { useEffect, useState } from "react";

const Registration = ({ toggleModal }) => {
    return (
        <div class="shadow modal" id="modal-window">
            <div class="modal-content">
                <div class="window">
                    <form action="#" method="post">
                        <h2>Регистрация</h2>
                        <input type="email" name="email" placeholder="Почта" required="required" />
                        <input type="password" name="password" placeholder="Пароль" required="required" />
                        <input type="password" name="password2" placeholder="Подтвердите пароль" required="required" />
                        <input type="checkbox" name="confirm" id="confirm" className="custom-checkbox" />
                        <label for="confirm">Я принимаю <a href="#">условия пользования</a></label>
                        <a className="form-link" onClick={() => toggleModal(1)}>У вас есть аккаунт?</a>
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

export default Registration
