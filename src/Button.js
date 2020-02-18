import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
    return(
        <button className={style.button} onClick={() => {props.action(props.event)}}>{props.content}</button>
    )
};

export default Button