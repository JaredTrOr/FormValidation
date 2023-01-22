import '../styles/Data.css'

function Data({dataInput, handleOnClean}){

    const [name, email, username, password] = dataInput;
    
    return(
        <div className="input-data-container">
            <h3>Información del usuario:</h3>
            <p>Nombre: {name}</p>
            <p>Email: {email}</p>
            <p>Usuario: {username}</p>
            <p>Contraseña: {password}</p>
            <div>
                <button 
                    className='btn'
                    type='button' 
                    onClick={handleOnClean}
                >
                    Limpiar
                </button>
            </div>
        </div>
    );
}

export default Data;