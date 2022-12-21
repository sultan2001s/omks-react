import React from 'react';

import canyon from '../images/canyon.png'
import south from '../images/south.png'
import karakol from '../images/karakol.png'
import city from '../images/city.png'
import kygyz from '../images/kygyz.png'

const Tours = () => {
    return (
        <section className="tours">
            <div className="container">
                <div className="tours__content">
                    <div className="tours__top">
                        <h1 className="tours__title">Самые <br/> горячие</h1>
                        <p className="tours__text">
                            Здесь собраны самые залайканные <br/>
                            туры, которые мы проводим каждый <br/>
                            день. Тебе не придется ждать выходных <br/>
                            или пока наберется группа. Хочешь, <br/>
                            можешь сегодня? Поехали!
                        </p>
                    </div>
                    <div className="tours__all">
                        <a className="tours__link" href="#">Hot tours</a>
                        <a className="tours__link" href="#">All tours</a>
                    </div>
                </div>

                <div className="tours__info">
                    <div className="tours__cart">
                        <img className="image" src={canyon} alt="canyon"/>
                        <div className="tours__overlay">
                            <div className="tours__canyon">Каньон “Сказка” <br/> 800 сом <br/> Туда в 12:00 <br/> Сюда в 23:00 <br/> <span className="tours__span"></span></div>
                        </div>
                    </div>
                    <div className="tours__cart">
                        <img className="image" src={south} alt="canyon"/>
                        <div className="tours__overlay">
                            <div className="tours__canyon">Юг Ыссык-Куля <br/> 800 сом <br/> Туда в 12:00 <br/> Сюда в 23:00 <br/> <span className="tours__span"></span><span><button className="tours__tur">Записаться на тур</button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                                fill="white" fill-opacity="0.8"/></svg></span></div>
                        </div>
                    </div>
                    <div className="tours__cart">
                        <img className="image" src={karakol} alt="canyon"/>
                        <div className="tours__overlay">
                            <div className="tours__canyon">Каракол <br/> 800 сом <br/> Туда в 12:00 <br/> Сюда в 23:00 <br/> <span className="tours__span"><a href="" >Записаться на тур</a><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                      fill="white" fill-opacity="0.8"/>
                  </svg></span></div>
                        </div>
                    </div>
                    <div className="tours__cart">
                        <img className="image" src={city} alt="canyon"/>
                        <div className="tours__overlay">
                            <div className="tours__canyon">Городская фотосессия <br/> 800 сом <br/> Туда в 12:00 <br/> Сюда в 23:00 <br/> <span className="tours__span"><a href="#" >Записаться на тур</a><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
                      fill="white" fill-opacity="0.8"/>
                  </svg></span></div>
                        </div>
                    </div>
                </div>

                <div className="tours__card">
                    <div>
                        <h2 className="tours__card-title">Всё самое важное о нас</h2>
                        <h3 className="water__title">“Without water”</h3>
                        <p className="tours__card-text">
                            Мы находимся и работаем в столице <span>Кыргызстана</span>,
                            но предоставляем туры в <span>любой уголок</span> нашей страны.
                            А вот <a href="#">Shop</a> находится только в Бишкеке.
                        </p>
                        <p className="tours__card-text">
                            Немного по цифрам, мы уже более <span>7 лет</span> на рынке,
                            все клиенты <span>счастливы</span> и целы. У нас работают
                            <span>профессионалы</span>, которые всем сердцем влюблены
                            в нашу страну, а это самое <span>важное</span>!</p>
                    </div>
                    <img className="kyrgyzstan" src={kygyz} alt="kygyz"/>
                </div>
            </div>
        </section>
    );
};

export default Tours;