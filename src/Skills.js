import React from 'react';
import style from './Skills.module.css';
import Skill from "./OneSkill";

const Skills = () => {
    return(
        <div className={style.skills}>
            <div className={style.container}>
                <div className={style.desryption}>
                    <span> My Skills </span>
                </div>
                <div className={style.abilities}>
                    <Skill name="React" description="Govno"/>
                    <Skill name="NodeJS" description="Manda"/>
                    <Skill name="MongoDB" description="Drysnya"/>
                </div>
            </div>
        </div>
    );
};

export default Skills
