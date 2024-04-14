import React from "react";

class Tariffs extends React.Component {
    render() {
        return (
            <section id="tariffs" class="container">
                <div class="tariff-panel">
                    <h2>Список тарифов</h2>
                    <div class="tariff-btns">
                        <button class="black-btn">за месяц</button>
                        <button class="black-btn">за 3 месяца</button>
                        <button class="black-btn">за 6 месяцев</button>
                        <button class="black-btn">за 12 месяцев</button>
                    </div>
                </div>
                <div id="tariff-content">
                    <div class="tariff-card stock" style={{text: '14 дней'}}>
                        <h5>Пробный</h5>
                        <h3 class="price">0 Р<br /><span>в месяц</span></h3>
                        <h6>До 1.000 сообщений на телеграм-бота</h6>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Do eiusmod tempor incididunt</li>
                            <li>Labore et dolore magna aliqua</li>
                        </ul>
                        <button>Выбрать</button>
                    </div>
                    <div class="tariff-card">
                        <h5>User</h5>
                        <h3 class="price">1 000 Р<br /><span>в месяц</span></h3>
                        <h6>От 1.000 до 5.000 сообщений на бота</h6>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Do eiusmod tempor incididunt</li>
                            <li>Labore et dolore magna aliqua</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                        </ul>
                        <button>Выбрать</button>
                    </div><div class="tariff-card stock" style={{text: 'Выгодно'}}>
                        <h5>Pro</h5>
                        <h3 class="price">5 000 Р<br /><span>в месяц</span></h3>
                        <h6>От 5.000 до 10.000 сообщений на бота</h6>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Do eiusmod tempor incididunt</li>
                            <li>Labore et dolore magna aliqua</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Do eiusmod tempor incididunt</li>
                            <li>Labore et dolore magna aliqua</li>
                        </ul>
                        <button>Выбрать</button>
                    </div><div class="tariff-card">
                        <h5>Production</h5>
                        <h3 class="price">10.000 Р<br /><span>в месяц</span></h3>
                        <h6>От 10.000 до 100.000 сообщений на бота</h6>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Do eiusmod tempor incididunt</li>
                            <li>Labore et dolore magna aliqua</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                        </ul>
                        <button>Выбрать</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tariffs
