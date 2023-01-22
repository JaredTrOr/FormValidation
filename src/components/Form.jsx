import {useState} from 'react';
import Data from './Data';
import '../styles/Form.css';

import {
    emailValidation, 
    emptyField, 
    nameValidation, 
    passwordValidation, 
    usernameValidation
} from '../auth/validation';

function Form(){
    const [data,setData] = useState([]);
    //State of the messages
    const [nameMessage, setNameMessage] = useState();
    const [emailMessage, setEmailMessage] = useState();
    const [usernameMessage, setUsernameMessage] = useState();
    const [passwordMessage, setPasswordMessage] = useState();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(nameMessage === '' && emailMessage === '' 
        && usernameMessage === '' && passwordMessage === ''){
            setData([
                e.target[0].value,e.target[1].value,
                e.target[2].value,e.target[3].value
            ]);
            cleanInputs(e);
        }
    }

    const nameOnChange = (e) => {
        const name = e.target.value;
        if(!emptyField(name)) setNameMessage(nameValidation(name));
        else setNameMessage('Campo vacio, Ingrese su nombre');
    }

    const emailOnChange = (e) => {
        const email = e.target.value;
        if(!emptyField(email)) setEmailMessage(emailValidation(email));
        else setEmailMessage('Campo vacio, Ingrese su email');
    }   

    const usernameOnChange = (e) => {
        const username = e.target.value;
        if(!emptyField(username)) setUsernameMessage(usernameValidation(username));
        else setUsernameMessage('Campo vacio, Ingrese su usuario');
    }

    const passwordOnChange = (e) => {
        const password = e.target.value
        if(!emptyField(password)) setPasswordMessage(passwordValidation(password));
        else setPasswordMessage('Campo vacio, Ingrese su contraseña');
    }

    const handleOnClean = () =>{
        setData([]);
        setNameMessage(null); setEmailMessage(null); 
        setUsernameMessage(null); setPasswordMessage(null);  
    } 

    const cleanInputs = (e) => {
        e.target[0].value = null;
        e.target[1].value = null;
        e.target[2].value = null;
        e.target[3].value = null;
    }

    return (
        <>
            <form className="form" onSubmit={handleOnSubmit}>
                <h1>Formulario</h1>
                <div className="input-container"> 
                    <label htmlFor="">Escriba su nombre:</label>
                    <span 
                        id='message-name-validation'
                        className='message-validation'
                    >
                        {nameMessage}
                    </span>
                    <input 
                        className='input-data'
                        name="input-name" 
                        type="text" 
                        placeholder="(Ejem, Juan...)"
                        onChange={nameOnChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="">Escriba su email:</label>
                    <span 
                        id='message-email-validation'
                        className='message-validation'
                    >
                        {emailMessage}
                    </span>
                    <input 
                        className='input-data'
                        name="input-email" 
                        type="text" 
                        placeholder="(Ejem, mail@email.com...)"
                        onChange={emailOnChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="">Escriba su usuario:</label>
                    <span 
                        id='message-username-validation'
                        className='message-validation'
                    >
                        {usernameMessage}
                    </span>
                    <input 
                        className='input-data'
                        name="input-username" 
                        type="text" 
                        placeholder="(Ejem, user123...)"
                        onChange={usernameOnChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="">Escriba su contraseña:</label>
                    <span 
                        id='message-password-validation'
                        className='message-validation'
                    >
                        {passwordMessage}
                    </span>
                    <input 
                        className='input-data'
                        name="input-password" 
                        type="text" 
                        placeholder="(Ejem, 123...)"
                        onChange={passwordOnChange}
                    />
                </div>
                {
                    data.length === 0 &&
                    <div>
                        <button type="submit" className="btn">Enviar</button>
                    </div>
                }    
            </form>

            {data.length > 0 && <Data dataInput={data} handleOnClean={handleOnClean}/>}
        </>
    );
}

export default Form;