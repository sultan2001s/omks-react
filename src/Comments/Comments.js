import React from 'react';

import marina from '../images/marina.png'
import stars from '../images/stars.png'

const Comments = () => {
    return (
        <section className="comments">
            <div className="container">
                <h2 className="comments__title">Комментарии и отзывы</h2>
                <p className="comments__text">Всё, что мы так любим</p>
                <div className="comments__row">
                    <div className="comments__slider">
                        <img className="comments__image" src={marina} alt="marina"/>
                            <div className="comments__right">
                                <h2 className="comments__right-title">Марина</h2>
                                <img src={stars} alt="stars"/>
                                    <p className="comments__right-cool">Просто cool</p>
                                    <p className="comments__right-text">Путешествовала с ними вокруг ИКа, само озеро
                                        очень красивое.
                                        Мне очень повезло с группой, очень весёлые. Но больше всего,
                                        мне понравилась организация тура. Правда! Не было претензий,
                                        только восторг.
                                        Водитель ехал аккуратно, не быстро, хотя все знают,
                                        что на этой дороге многие едут быстро. Приехали в Чолпон-Ату,
                                        а там уже стол накрыт, номера готовы. В общем, очень круто,
                                        уже присмотрела новый тур. </p>
                            </div>
                    </div>
                    <button className="comments__btn">
                        <svg width="41" height="54" viewBox="0 0 41 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L39.9676 25.2332M40 24.8191L1.02579 53" stroke="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Comments;