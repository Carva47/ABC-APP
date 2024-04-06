import styles from "./Register.module.css";
import styls from "./Login.module.css";
import userIcon from "./icons8-chamada-em-conferência-100.png";
import passIcon from "./830718_preview-removebg-preview.png";
import { Link } from 'react-router-dom';

export function FormRegister() {

    return(
        <div className={styles.container}>
            <div className={styles.divForm}>
                 <h2> Login</h2> 
                <form>
                    <div className={styles.formulario}>
                    <div>
                    <div className={styles.divInputName}>
                        <label> 
                            <img src={userIcon} alt="userIcon" />
                            <input type="text" minLength={4} placeholder=" Nome do Representante" required="required" /> 
                        </label>
                    </div>

                    <div className={styles.divInputPass}>
                        <label> 
                            <img src={passIcon} alt="passIcon" /> 
                            <input type="password" minLength={8} placeholder=" Criar Palavra-passe" required="required" /> 
                        </label>
                    </div>
                    <div className={styles.divCategory} >
                        <label> 
                        <img src={passIcon} alt="passIcon" /> 
                            <select id="selected">
                                <option value="/"> Empreendedor </option>
                                <option value="/"> Empresa </option>
                            </select>
                        </label>
                    </div> 
                    </div>
                    <div>
                    <div className={styles.divInputName}>
                        <label> 
                            <img src={userIcon} alt="userIcon" />
                            <input type="text" minLength={4} placeholder=" Nome da Empresa" required="required" /> 
                        </label>
                    </div>
                    <div className={styles.divInputName}>
                        <label> 
                            <img src={userIcon} alt="userIcon" />
                            <input type="email" minLength={4} placeholder=" Email válido" required="required" /> 
                        </label>
                    </div>

                    <div className={styles.divInputPass}>
                        <label> 
                            <img src={passIcon} alt="passIcon" /> 
                            <input type="text" minLength={14} maxLength={14} placeholder=" NIF válido" required="required" /> 
                        </label>
                    </div>
                    <div className={styles.divCategory} >
                        <label> 
                        <img src={passIcon} alt="passIcon" /> 
                            <select id="selected">
                            <option value="/"> Escolher área de actuação </option>
                                <option value="/"> Tecnologia </option>
                                <option value="/"> Marketing </option>
                            </select>
                        </label>
                    </div> 
                    </div>
                    </div>
                    <div className={styles.buttonForm}>
                        <input type="submit" value="Registrar"/>
                    </div>
                </form> 
                <div className={styles.InforForm}>
                         <p> Já tenho uma conta.<Link to="/login"> Fazer login!</Link></p>
                    </div>               
            </div>  
        </div>
    );
};

export function FormLogin() {

    return(
        <div className={styls.container}>
            <div className={styls.divForm}>
                 <h2> Login</h2> 
                <form>
                    <div className={styls.divInputName}>
                        <label> 
                            <img src={userIcon} alt="userIcon" />
                            <input type="text" minLength={4} placeholder=" Introduza o e-mail" required="required" /> 
                        </label>
                    </div>

                    <div className={styls.divInputPass}>
                        <label> 
                            <img src={passIcon} alt="passIcon" /> 
                            <input type="password" minLength={8} placeholder=" Palavra-passe" required="required" /> 
                        </label>
                    </div>
                    <div className={styls.buttonForm}>
                        <input type="submit" value="Entrar"/>
                    </div>
                    
                </form> 
                <div className={styls.InforForm}>
                        <p><Link to="/">esqueci a palavra-passe</Link></p>
                    
                       <p> Não tenho uma conta.<Link to="/register"> Criar Aqui!</Link></p>
                    </div>               
            </div>  
        </div>
    );
}