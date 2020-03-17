import React from 'react';
import style from './Projects.module.css';
import Project from "./Project";
import Mark from "./RedMark";
import {Fade} from "react-reveal";
import socialNetwork from "./assets/reactCode1.jpg";
import todoList from "./assets/reactCode3.jpg"

const Projects = () => {
    return(
        <div className={style.projects} id={'Projects'}>
            <Fade bottom>
            <div className={style.container}>
               <Mark mark={"My works"}/>
                <div className={style.works}>
                    <Project message="Social Network" name="Social Network" background={socialNetwork} href="https://github.com/LilBudj/Social-Network"/>
                    <Project message="To do list" name="To do list" background={todoList} href="https://github.com/LilBudj/TodoList"/>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Projects
