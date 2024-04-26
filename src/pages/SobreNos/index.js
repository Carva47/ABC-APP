import { Header } from "../../components/Header";
import styles from "./SobreNos.module.css";

export function SobreNos(){
    return(
        <>
            <Header/>
            <section className={styles.containerPrincipal}>

                <h1> Sobre nós </h1>

                <div>
                    <p> Somos uma StartUp, voltada para área de teclonogia, com desenvolvimento de softwares e muito mais.</p>
                    <p> A Angola Business Connect - ABC, é uma plataforma web, desenvolvida com objectivo de conectar empresas e 
                    empreendedores do mercado nacional de modo a comercializarem seus serviços direitamentes umas com as outras. 
                    </p>
                </div>
                <div>
                    <h3> Equipe de desenvolvimento </h3>
                    <div>
                        <img src='/images/mao.jpg' alt="" />
                        <img src='/images/mao.jpg' alt=""/>
                    </div>
                </div>

            </section>
        </>  
    );
}