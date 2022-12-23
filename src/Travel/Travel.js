import React from 'react';

import travelBlog from '../images/travelBlog.png'
import logo from '../images/logo.png'

const Travel = () => {
    return (
        <section className="travel">
            <div className="container">
                <div className="travel__top">
                    <h1 className="travel__title">Travel Blog <br/> <span className="travel__span">С картинками</span>
                    </h1>
                    <p className="travel__text">Тут мы рассказываем про волшебные <br/> места в нашей стране и
                        показываем <br/> фотографии с прошлых путешествий.</p>
                </div>
                <div className="travel__blog">
                    <img src={travelBlog} alt=""/>
                        <div className="travel__row">
                            <h3 className="travel__row-title">Сон-Кёль</h3>
                            <p className="travel__row-text">Сон-Куль находится на высоте 3000 метров в большой
                                межгорной долине, ограниченной с севера хребтом
                                Сонкуль-Тоо и хребтом Молдо-Тоо с юга. Озеро пресное
                                и довольно глубокое — максимальная глубина озера
                                14 метров. Примерно в середине ноября Сон-Куль замерзает
                                и оттаивает только к середине апреля.
                                Местность вокруг озера весьма живописна, особенно
                                в летний период. </p>
                        </div>
                        <div className="travel__logo">
                            <img src={logo} alt=""/>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Travel;