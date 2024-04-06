
import { Header } from '../../components/Header';
import styles from './PageNotFound.module.css';
import Erro404 from './visuals-JpTY4gUviJM-unsplash.jpg';

export function PageNotFound() {

    return (
       <>
        <Header/>
            <section className={styles.container}>

                <h2> Ops! Conteúdo não localizado! </h2>
                <img src={Erro404} alt="Imagem de Erro 404"/>
       
            </section>
        </>
    );
}