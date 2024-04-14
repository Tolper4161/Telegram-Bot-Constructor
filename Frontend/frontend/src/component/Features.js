import React from "react";

class Features extends React.Component {
    render() {
        return (
            <section id="features" className="container">
                <div className="features-content">
                    <div className="features-right-column">
                        <h2>Преимущества проекта</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum:<br />
                        1. Lorem ipsum<br />
                        2. Dolor sit amet<br />
                        3. Consectetur<br />
                        4. Adipcing elit</p>
                        <div className="features-boxes">
                            <div className="features-box">
                                <span className="box-icon unpacking"></span>
                                <h5>Коробочные решения</h5>
                            </div>
                            <div className="features-box">
                                <span className="box-icon new-contact"></span>
                                <h5>Статистика пользователей</h5>
                            </div>
                            <div className="features-box">
                                <span className="box-icon circle-chart"></span>
                                <h5>Сегментация аудитории</h5>
                            </div>
                            <div className="features-box">
                                <span className="box-icon folded-booklet"></span>
                                <h5>Авто-реклама</h5>
                            </div>
                            <div className="features-box">
                                <span className="box-icon schedule-mail"></span>
                                <h5>Постинг и рассылки</h5>
                            </div>
                            <div className="features-box">
                                <span className="box-icon new-contact"></span>
                                <h5>Подробная статистика</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features
