import React from 'react';
import style from './Main.module.css';

const Main = () => {
    return(
        <div className={style.main} id={'Main'}>
            <div className={style.container}>
                <div className={style.greetings}>
                    <span>Hi there!</span>
                    <span className={style.intro}>I am front-end developer</span>
                </div>
                <div className={style.photo}>
                    <div className={style.image}/>
                </div>
            </div>
        </div>
    );
};

export default Main
