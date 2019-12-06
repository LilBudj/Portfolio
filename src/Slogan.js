import React from 'react';
import style from './Slogan.module.css';

const Slogan = () => {
    return(
        <div className={style.slogan}>
            <div className={style.container}>
                <div className={style.message}>Sacramentum hoc revelatum</div>
                <div>
                <button className={style.hire}>Hire me!</button>
                </div>
            </div>
        </div>
    );
};

export default Slogan
