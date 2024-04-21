import React, { useState } from "react";

const Autorisation = ({ toggleModal, isOpened }) => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [animation, setAnimation] = useState("float-from-left");
    const [isButtonActive, setButtonActive] = useState(false);

    const closeModal = async (func, data, ms) => {
        setAnimation("float-to-right");
        await new Promise(r => setTimeout(r, ms));
        return func(data);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    
        const response = fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword, 
            }), 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    }

    const setValue = (setter, value) => {
        setter(value);
        if (inputEmail.length > 1 && inputPassword.length > 1) {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
        console.log(inputEmail, inputPassword);
    }

    return (
        <div className="shadow modal" id="modal-window">
            <div className={"modal-content " + animation}>
                <div className="window">
                    <form onSubmit={submitHandler} method="POST">
                        <h2>Авторизация</h2>
                        <input type="email" name="email" placeholder="Почта" required="required" onChange={(event) => setValue(setInputEmail, event.target.value)} />
                        <input type="password" name="password" placeholder="Пароль" required="required" onChange={(event) => setValue(setInputPassword, event.target.value)} />
                        <a className="form-link" onClick={() => closeModal(toggleModal, 2, 750)}>Регистрация</a>
                        <div className="btn-group">
                            <input className={isButtonActive ? "" : "unactive"} type="submit" value="Отправить" disabled={!isButtonActive} />
                        </div>
                    </form>
                    <button className="close-btn" onClick={() => closeModal(toggleModal, 0, 750)}><span class="icon close"></span></button>
                </div>
            </div>
        </div>
    )
}

export default Autorisation;
