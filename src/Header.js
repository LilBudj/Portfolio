import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.nav}>
                    <a href='' className={style.link}>Main</a>
                    <a href='' className={style.link}>Skills</a>
                    <a href='' className={style.link}>Projects</a>
                    <a href='' className={style.link}>Contacts</a>
                </div>
            </div>
        </div>
    );
};

export default Header
