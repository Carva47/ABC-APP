
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.header}>
            <Link to="/"> <span>ABC</span> </Link>

            <nav>             
                    <Link to="/"> SOBRE NÓS </Link>
                    <Link to="/"> SERVIÇOS </Link>
                    <Link to="/"> BENEFÍCIOS </Link>
                    <Link to="/"> PERGUNTAS FREQUENTES </Link>              
            </nav>

            <span className={styles.language}>
            PT | EN
            </span>
        </header>
    );    
};
