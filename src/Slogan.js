import React from 'react';
import style from './Slogan.module.css';
import Mark from "./RedMark";
import Button from "./Button";
import Fade from "react-reveal";
import {Link} from "react-scroll";

const Slogan = () => {
    return (
        <Fade bottom>
        <div className={style.slogan}>
            <Mark mark={`I'm avaliable for freelance`}/>
            <div className={style.container}>
                <Link activeClass={'active'} to='Contacts' smooth={true} className={style.link} duration={500}>
                    <Button content={'Hire me!'} action={() => {}}/>
                </Link>
            </div>
        </div>
        </Fade>
    );
};

export default Slogan
