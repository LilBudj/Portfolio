import React from 'react';
import style from './Contacts.module.css';

const Contacts = () => {
    return(
        <div className={style.contacts}>
            <div className={style.container}>
               <form className={style.form}>
                   <p>Contacts</p>
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
