import style from './Form.module.css';
import logo from '../../images/Rick-And-Morty-Transparent-Images.png'
import { useState } from 'react';
import validaciones from './validation';

const Forms = ({login}) => {
    let [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    let [ errors, setErrors ] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setErrors(validaciones(userData));
    };

    return (
        <div className={style.container}>
        <form className={style.formulario}>
            <img src={logo} className={style.imagen} alt="" />
            <label>Email: </label>
            <input className={style.input} type="text" placeholder='Email' name="email" onChange={handleChange}></input>
            { errors.email && <span className={style.errores}>{errors.email}</span>}
            <label>Password: </label>
            <input className={style.input} type="password" placeholder='Password' name="password" onChange={handleChange}></input>
            { errors.password && <span className={style.errores}>{errors.password}</span>}
            <button className={style.boton} type='submit' onClick={() => login(userData)}>Submit</button>
        </form>
        </div>
    )
}
export default Forms;