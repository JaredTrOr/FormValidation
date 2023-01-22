const emptyField = value => value === '' ? true : false;

const nameValidation = name => {
    const validNameCharacters = /([a-zA-Z])$/
    return validNameCharacters.test(name) ? '' : 
    'Nombre no valido, por favor revise los caracteres';
}

const emailValidation = email => {
    const validEmailCharacters = 
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/
    return validEmailCharacters.test(email) ? '':
    'Email no valido, porfavor revise los caracteres';
}

const usernameValidation = username => {
    return username.includes('<') || username.includes('>') ? 
    'Usuario no valido, porfavor revise los caracteres' : ''
}

const passwordValidation = password => {
    if(password.length < 4){
        return 'La contraseña debe tener mínimo 4 caracteres';
    }
    else{
        if(password.includes('<') || password.includes('>')){
            return 'Contraseña no valida, porfavor revise los caracteres';
        }
        else{
            return '';
        }
    }
}

export {
    emptyField,
    nameValidation,
    emailValidation,
    usernameValidation,
    passwordValidation
}

