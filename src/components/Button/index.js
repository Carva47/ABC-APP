import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export function Buttons(){
   return ( 
        <div className={styles.buttons}> 

            <Link to="/login"><button className={styles.buttonOne}> Iniciar Sessão </button></Link>
            <Link to="/register"><button className={styles.buttonTwo}> Criar uma Conta </button></Link>
                
        </div>
    )
}