import React from 'react';

import turImg from '../images/turImg.png'
import turImg1 from '../images/turImg1.png'
import turImg2 from '../images/turImg2.png'

const Mount = () => {
    return (
        <section className="mount">
            <div className="container">
                <div className="mount__content">
                    <div className="mount__left">
                        <div>
                            <h2 className="mount__title">
                                Хэй! Выбирай <br/>
                                тур и в путь!
                            </h2>
                            <p className="mount__canyon">Каньон “Сказка”</p>
                            <p className="mount__text">
                                Когда? 22.12.22 <br/>
                                Во сколько? 08:00 <br/>
                                Что взять с собой? Крем от загара, очки, деньги <br/>
                                на личные расходы <br/>
                                Во сколько домой? В Бишкеке будем в 20:00
                            </p>
                        </div>
                        <div className="mount__button">
                            <p className="mount__button-text">Мы встретимся на площади в 8:00 на “Ала-Тоо”, полчаса <br/>
                                на закуп и выезжаем, делаем остановку в Бооме в 11:00, в 13:00 <br/>
                                мы в каньоне “Сказка”, гуляем, фотографируемся, дышим <br/>
                                свежим воздухом до 15:00, потом гуляем по южному берегу <br/>
                                и выезжаем в 16:00. В 20:00 мы уже в Бишкеке.
                            </p>
                            <p className="mount__button-price">1300 сом</p>
                            <button className="mount__btn">Забронировать</button>
                        </div>
                    </div>
                    <div className="mount__right">
                        <div className="mount__row">
                            <p className="mount__tur">Тут ты найдешь все наши туры, которые <br/> у нас есть. Также мы
                                сразу подписали, <br/> что нужно обязательно взять с собой, <br/> чтобы путешествие было
                                    по максимому <br/> комфортное! С заботой)</p>
                            <p className="mount__one">Однодневные туры</p>
                        </div>
                        <button className="mount__right-btn">Далее <span><svg width="20" height="34" viewBox="0 0 20 34"
                                                                              fill="none"
                                                                              xmlns="http://www.w3.org/2000/svg">
<path d="M0.383301 30.7167L3.3333 33.6667L20 17L3.3333 0.333374L0.383301 3.28337L14.1 17L0.383301 30.7167Z" fill="black"
      fill-opacity="0.55"/>
</svg></span></button>
                        <div className="mount__images">
                            <img className="mount__img" src={turImg} alt="turImg"/>
                                <div>
                                    <img src={turImg1} alt="turImg1"/>
                                        <img src={turImg2} alt="turImg2"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mount;