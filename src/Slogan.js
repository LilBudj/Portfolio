import React from 'react';
import style from './Slogan.module.css';
import Mark from "./RedMark";
import Button from "./Button";
import Fade from "react-reveal";

const Slogan = () => {
    return (
        <Fade bottom>
        <div className={style.slogan}>
            <Mark mark={`I'm avaliable for freelance`}/>
            <div className={style.container}>
                <div>
                    <Button content={'Hire me!'}/>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default Slogan
