import styles from './Banner.module.css';

export function Banner({image}){
    return(
        <div 
            className={styles.banner}
            style={{backgroundImage: `url('/images/${image}.jpg')`}}>

            <div className={styles.informacao}> 
                <h1> ABC </h1>              
                <h3> A<span>NGOLA</span> B<span>USINESS</span> C<span>ONNECT</span> </h3>               
                <p> Conectando o mundo dos negócios </p>     
                <h4> Conecta-se com os melhores profissionais do mercado nacional </h4>
                <span>Compra e venda direitamente os seus serviços</span>
                
            </div>
                            
        </div>
    );
}