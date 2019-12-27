import React from 'react';
import style from './Project.module.css';
import Button from "./Button";

const Project = (props) => {
    return(
      <div className={style.project}>
          <div className={style.image}>
              <Button content={'Watch'}/>
          </div>
          <div className={style.describe}>
              <div className={style.name}>{props.name}</div>
              <div className={style.message}>{props.message}</div>
          </div>
      </div>
    );
};

export default Project