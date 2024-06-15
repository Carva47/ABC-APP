import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Logo } from "../../components/logo";


export function Login() {
    return (
      <>
      <section className={styles.containerLogin}>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900  opacity-90" >
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <Logo className={styles.logo}/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
              Faça login em sua conta
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6 brightness-150" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Endereço Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full font-bold rounded-md bg-gray-500 border-0 py-1.5 text-gray-900 shadow-sm ring-transparent placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gwhite">
                    Palavra-passe
                  </label>
                  <div className="text-sm">
                    <Link to="#" className="font-semibold text-blue-600 hover:text-indigo-500">
                      Esqueci a palavra-passe
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full font-bold rounded-md bg-gray-500 border-0 py-1.5 text-gray-900 shadow-sm  ring-transparent placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <Link to={"/userpage"}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
                >
                  Entrar
                </Link>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Não tem uma conta?{' '}
              <Link to="/register" className="font-semibold leading-6 text-blue-600 hover:text-indigo-500">
               Crar conta
              </Link>
            </p>
          </div>
          </div>
         
       </div>
        </section>
      </>
    )
  }