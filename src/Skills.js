import React from 'react';
import style from './Skills.module.css';
import Skill from "./OneSkill";
import Mark from "./RedMark";

const Skills = () => {
    return(
        <div className={style.skills}>
            <div className={style.container}>
                <Mark mark={"My Skills"}/>
                <div className={style.abilities}>
                    <Skill name="React" description="Components class/functional, state, props, hooks"/>
                    <Skill name="NodeJS" description="ES5/ES6+, TypeScript, startServer"/>
                    <Skill name="Redux" description="Reducers, actions, subscriber,  context API, thunk"/>
                </div>
            </div>
        </div>
    );
};

export default Skills
