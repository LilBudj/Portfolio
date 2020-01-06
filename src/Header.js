import React from 'react';
import style from './Header.module.css';
import {Link, animateScroll as scroll} from 'react-scroll'

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.nav}>
                    <Link activeClass={'active'} to='Main' smooth={true} className={style.link} duration={500}>Main</Link>
                    <Link activeClass={'active'} to='Skills' smooth={true} className={style.link} duration={500}>Skills</Link>
                    <Link activeClass={'active'} to='Projects' smooth={true} className={style.link} duration={500}>Projects</Link>
                    <Link activeClass={'active'} to='Contacts' smooth={true} className={style.link} duration={500}>Contacts</Link>
                </div>
            </div>
        </div>
    );
};

export default Header
