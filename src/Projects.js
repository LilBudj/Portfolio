import React from 'react';
import style from './Projects.module.css';
import Project from "./Project";
import Mark from "./RedMark";

const Projects = () => {
    return(
        <div className={style.projects}>
            <div className={style.container}>
               <Mark mark={"My works"}/>
                <div className={style.works}>
                    <Project message="urguhdgudhfuhsoghh" name="White Square"/>
                    <Project message="rgdsgrethgjoyhkoth" name="Rectangle of Terror"/>
                </div>
            </div>
        </div>
    );
};

export default Projects
