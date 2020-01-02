import React from 'react';
import style from './Slogan.module.css';
import Mark from "./RedMark";
import Button from "./Button";

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <Mark mark={`I'm avaliable for freelance`}/>
            <div className={style.container}>
                <div>
                    <Button content={'Hire me!'}/>
                </div>
            </div>
        </div>
    );
};

export default Slogan
