import { FormLogin } from "../../components/Form";
import styles from "./LoginPage.module.css";

export function Login(){

    return(
        <section className={styles.containerLogin}>
            <FormLogin/>
        </section>
    );
}