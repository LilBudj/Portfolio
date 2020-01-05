import React from 'react';
import style from './OneSkill.module.css';

const Skill = (props) => {
    return(
        <div className={style.skill}>
            <div className={style.name}>
                <div className={style.img}>
                    <img className={style.icon} src={props.icon} alt={"icon"}/>
                </div>
                <div>{props.name}</div>
            </div>
            <div className={style.describe}>
                {props.description}
            </div>
        </div>
    );
};

export default Skill
