import React from 'react';
import style from './Main.module.css';
import photo from './assets/photo_2020-02-06_16-17-46.jpg'

const Main = () => {
    return(
        <div className={style.main} id={'Main'}>
            <div className={style.container}>
                <div className={style.greetings}>
                    <span>Hi there!</span>
                    <span className={style.intro}>I am front-end developer</span>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>
                        <img src={photo} alt={'main'} className={style.mainPhoto}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main
