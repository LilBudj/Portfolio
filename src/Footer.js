import React from 'react';
import style from './Footer.module.css';
import Mark from "./RedMark";
import telegram from "./assets/telegram.svg"

const Footer = () => {
    return(
        <div className={style.footer}>
            <Mark mark={'Nikita Gurets'}/>
            <div className={style.container}>
                <div className={style.element}>
                    <a href=''>
                        <img src={telegram} alt={'icon'} className={style.icon}/>
                    </a>
                </div>
                <div className={style.element}>
                    <a href=''>
                        <img src='' alt={'icon'} className={style.icon}/>
                    </a>
                </div>
                <div className={style.element}>
                    <a href=''>
                        <img src='' alt={'icon'} className={style.icon}/>
                    </a>
                </div>
                <div className={style.element}>
                    <a href=''>
                        <img src='' alt={'icon'} className={style.icon}/>
                    </a>
                </div>
            </div>
            <div style={{fontSize: '16px', color: 'white', marginBottom:'40px', opacity: '0.6'}}>
                2020 (c) All rights reserved
            </div>
        </div>
    );
};

export default Footer
