import React from 'react';
import style from './Skills.module.css';
import Skill from "./OneSkill";
import Mark from "./RedMark";
import Fade from "react-reveal"
import reactIcon from "./assets/react.png"
import reduxIcon from "./assets/redux.png"
import nodeJSIcon from "./assets/nodejs.svg"
import graphqlIcon from "./assets/GraphQL_Logo.png"
import apolloIcon from "./assets/apollo.png"
import nextJSIcon from "./assets/nextJS.svg"
import NodeJS from "./assets/nodeJS.png"
import MongoDB from "./assets/mongoDB.png"

const Skills = () => {
    return (
        <div className={style.skills} id={'Skills'}>
            <Fade bottom>
                <div className={style.container}>
                    <Mark mark={"My Skills"}/>
                    <div className={style.abilities}>
                        <Skill name="React" icon={reactIcon}/>
                        <Skill name="ES5 - ES9" icon={nodeJSIcon}/>
                        <Skill name="Redux" icon={reduxIcon}/>
                        <Skill name="GraphQL" icon={graphqlIcon}/>
                        <Skill name="Node.js" icon={NodeJS}/>
                        <Skill name="MongoDB" icon={MongoDB}/>
                        <Skill name="Apollo.js" icon={apolloIcon}/>
                        <Skill name="Next.js" icon={nextJSIcon}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills
