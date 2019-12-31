import React from 'react';
import style from './Contacts.module.css';
import Mark from "./RedMark";

const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={style.container}>
                <Mark mark={"Contacts"}/>
               <form className={style.form}>
                   <input placeholder={'Email'}/>
                   <input placeholder={'Name'}/>
                   <textarea placeholder={'Your message'}/>
                   <button>Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Contacts
