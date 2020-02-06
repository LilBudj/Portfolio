import React from 'react';
import style from './Projects.module.css';
import Project from "./Project";
import Mark from "./RedMark";
import {Fade} from "react-reveal";
import socialNetwork from "./assets/istockphoto-1060210738-1024x1024.jpg";
import todoList from "./assets/todolist.jpg"

const Projects = () => {
    return(
        <div className={style.projects} id={'Projects'}>
            <Fade bottom>
            <div className={style.container}>
               <Mark mark={"My works"}/>
                <div className={style.works}>
                    <Project message="Social Network" name="White Square" background={socialNetwork} href="https://github.com/LilBudj/Social-Network"/>
                    <Project message="To do list" name="Rectangle of Terror" background={todoList} href="https://github.com/LilBudj/TodoList"/>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Projects
