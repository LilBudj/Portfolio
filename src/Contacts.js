import React, {useState} from 'react';
import style from './Contacts.module.css';
import Mark from "./RedMark";
import Fade from "react-reveal";
import axios from "axios";

const Contacts = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage] = useState(null);
    const [isSent, setIsSent] = useState(false);

    const sendMessage = () => {
        if (email && name) {
            axios.post('https://smtp-nodejs.herokuapp.com/', {email, name, message}).then(
                (res) => {console.log(res)}
            );
            setIsSent(true)
        }
    };

    return(
        <div className={style.contacts} id={'Contacts'}>
            <Fade bottom>
            <div className={style.container}>
                <Mark mark={"Contacts"}/>
                {!isSent ? <form id={"contact"} className={style.form}>
                   <input className={style.formArea} placeholder={'Email'} name={"email"} form={"#contact"} value={email} onChange={(e) => {setEmail(e.currentTarget.value)}}/>
                   <input className={style.formArea} placeholder={'Name'} name={"name"} form={"#contact"} value={name} onChange={(e) => {setName(e.currentTarget.value)}}/>
                   <textarea className={style.inputArea} placeholder={'Your message'} name={"message"} form={"#contact"} value={message} onChange={(e) => {setMessage(e.currentTarget.value)}}/>
                   <button className={style.button} onClick={() => {sendMessage()}} form={"#contact"}>Submit</button>
                </form> : <h1 className={style.thanksgiving}>Thank You!</h1>}
            </div>
            </Fade>
        </div>
    );
};

export default Contacts
