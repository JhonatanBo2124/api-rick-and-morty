const validaciones = (data) => {
    let errors = {}
    const regexCorreo = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var patt = new RegExp(/[A-Za-z0-9]+/g);
    if(data.email.length === 0){
        errors.email = 'Este campo no puede estar vacio'
    }
    if(!regexCorreo.test(data.email)){
        errors.email = 'No es un email';
    }
    if(data.email > 35){
        errors.email = 'El email es demasiado largo';
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.password = 'La password debe tener entre 6 y 10 caracteres';
    }
    if(!patt.test(data.password)){
        errors.password = 'La passwor debe tener al menos un numero';
    }
    return errors;
}
export default validaciones;