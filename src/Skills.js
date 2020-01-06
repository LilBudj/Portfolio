import React from 'react';
import style from './Skills.module.css';
import Skill from "./OneSkill";
import Mark from "./RedMark";
import Fade from "react-reveal"
import reactIcon from "./assets/react.png"
import reduxIcon from "./assets/redux.png"
import nodeJSIcon from "./assets/nodejs.svg"

const Skills = () => {
    return (
        <div className={style.skills} id={'Skills'}>
            <Fade bottom>
                <div className={style.container}>
                    <Mark mark={"My Skills"}/>
                    <div className={style.abilities}>
                        <Skill name="React" description="Components class/functional, state, props, hooks" icon={reactIcon}/>
                        <Skill name="JavaScript" description="ES5/ES6+, TypeScript, startServer" icon={nodeJSIcon}/>
                        <Skill name="Redux" description="Reducers, actions, subscriber,  context API, thunk" icon={reduxIcon}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills
