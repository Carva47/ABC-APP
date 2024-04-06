import styles from './CardCircle.module.css';

export function CardCircle(){
    return(
        <section className={styles.sectionCards}>

            <div className= {styles.cards}>
                
                <div className={styles.cardCircle}>
                    <img src='/images/mao.jpg' alt='mao'/>
                </div>
                <h2> Marketing </h2>
                <p> lorem lorem lorem lorem lore </p>
            </div>
            <div className= {styles.cards}>
                <div className={styles.cardCircle}>
                    <img src='/images/mao.jpg' alt='mao'/>
                </div>
                <h2> Importação e Exportação </h2>
                <p> lorem lorem lorem lorem lore </p>
            </div>
            <div className= {styles.cards}>
                <div className={styles.cardCircle}>
                    <img src='/images/mao.jpg' alt='mao'/>
                </div>
                <h2> Contabilidade </h2>
                <p> lorem lorem lorem lorem lore </p>
            </div>
            <div className= {styles.cards}>
                <div className={styles.cardCircle}>
                    <img src='/images/mao.jpg' alt='mao'/>
                </div>
                <h2> Tecnologia </h2> 
                <p> lorem lorem lorem lorem lore </p>
            </div>

        </section>      
    );
}