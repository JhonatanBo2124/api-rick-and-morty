import style from './Error.module.css';
import image from '../../images/pngwing.com.png'

const Error = () => {
    return (
        <>
        <img className={style.imagen} src={image} alt=''/>
        <h1 className={style.container}>Error 404 Not found</h1>
        </>
    )
}
export default Error;