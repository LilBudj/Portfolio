import React from 'react';
import style from './Contacts.module.css';
import Mark from "./RedMark";
import Button from "./Button";

const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={style.container}>
                <Mark mark={"Contacts"}/>
               <form className={style.form}>
                   <input className={style.formArea} placeholder={'Email'}/>
                   <input className={style.formArea} placeholder={'Name'}/>
                   <textarea className={style.inputArea} placeholder={'Your message'}/>
                   <Button content={'Submit'}/>
               </form>
            </div>
        </div>
    );
};

export default Contacts
