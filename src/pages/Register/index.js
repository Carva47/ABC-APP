import { FormRegister } from "../../components/Form";
import styles from "./Register.module.css";

export function Register(){

    return(
        <section className={styles.containerRegister}>
            <FormRegister/>
        </section>
    );
}