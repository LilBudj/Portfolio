import React from 'react'
import style from './Skills.module.css'

const Mark = (props) => {
    return (
        <div className={style.desryption}>
            <span> {props.mark} </span>
            <div className={style.line}/>
        </div>
    )
};

export default Mark