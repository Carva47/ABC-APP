import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Logo } from '../../components/logo';
import styles from './LoginPage.module.css';
import sucessgif from '../../assets/img/icons8-sucesso.gif';
import errogif from '../../assets/img/icons8-erro.gif';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseSuccessModal = () => setShowSuccessModal(false);
  const handleCloseErrorModal = () => setShowErrorModal(false);

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(response => {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          navigate('/userpage');
        }, 3000); // Fecha o modal após 3 segundos e redireciona para a página do usuário
      })
      .catch(error => {
        setShowErrorModal(true);
        setTimeout(() => {
          setShowErrorModal(false);
        }, 2000); // Fecha o modal de erro após 2 segundos
      });
  };

  return (
    <>
      <section className={styles.containerLogin}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 opacity-90">
          <div className="max-w-3xl mx-auto px-4">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <Logo className={styles.logo}/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
              Faça login em sua conta
            </h2>
          </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Endereço Email</label>
                    <div className="mt-2">
                      <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Palavra-passe</label>
                    <div className="mt-2">
                      <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                  </div>
                </form>
                <p className="mt-10 text-center text-sm text-white">
                  Não tens uma conta?{' '}
                  <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Faça o seu Registro</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Sucesso */}
      {showSuccessModal &&
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src={sucessgif} alt="" />
          <p className="text-lg text-gray-900">Login bem-sucedido!</p>
        </div>          
        </div>
      }

      {/* Modal de Erro */}
      {showErrorModal &&
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src={errogif} alt="" />
               <p className="text-lg text-gray-900">Credenciais inválidas.</p>
           </div>
        </div>
      }
    </>
  );
}
