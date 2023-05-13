import style from './About.module.css';
import perfil from '../../images/perfil.jpg';
import logo from '../../images/github-mark-white.png';

const About = () => {
    return (
        <div className={style.container}>
        <h1 className={style.titulo}>I´m Jhonatan Bolivar</h1>
        <div className={style.info}>
            <img src={perfil} className={style.imagen} alt="" />
            <div className={style.cuerpo}>
                <h2>I am a student of Henry's fullstack developer degree, I am currently 21 years old and I am passionate about technology</h2>
                <a href="https://github.com/JhonatanBo2124" target="blank">
                    <img className={style.boton} src={logo} alt="GitHub" />
                </a>
            </div>
        </div>
        </div>
    )
}
export default About;