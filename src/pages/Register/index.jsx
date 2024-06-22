import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css'; // Estilos específicos para o componente
import sucessgif from '../../assets/img/icons8-sucesso.gif'; // Imagem de sucesso
import errogif from '../../assets/img/icons8-erro.gif'; // Imagem de erro

// Importar os arquivos JSON para preencher os dados
import provinciasData from '../../JSON/provincias.json';
import areasAtuacaoData from '../../JSON/areasAtuacao.json';

export function Register() {
  // Estados para armazenar os dados do formulário e controle dos modais
  const [gestorName, setGestorName] = useState('');
  const [password, setPassword] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [nifEmpresa, setNifEmpresa] = useState('');
  const [actuacao, setActuacao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para controlar exibição do modal de sucesso
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para controlar exibição do modal de erro

  // Função para fechar o modal de sucesso
  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  // Função para fechar o modal de erro
  const handleCloseErrorModal = () => setShowErrorModal(false);

  useEffect(() => {
    // Exemplo de uso: preencher um select com as províncias de Angola
    console.log(provinciasData.provincias);
  }, []);

  // Função para lidar com o envio do formulário de registro
  const handleRegister = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    // Objeto com os dados do usuário a serem enviados
    const user = {
      gestorName,
      password,
      nameCompany,
      email,
      province,
      streetAddress,
      nifEmpresa,
      actuacao,
      telefone
    };

    // Requisição POST para o servidor com os dados do usuário
    axios.post('http://localhost:3001/register', user)
      .then(response => {
        setShowSuccessModal(true); // Exibe o modal de sucesso
        setTimeout(() => {
          setShowSuccessModal(false); // Fecha o modal de sucesso após 3 segundos
          // Aqui você pode redirecionar para a página de login ou fazer outra ação após o registro
        }, 3000);
      })
      .catch(error => {
        setShowErrorModal(true); // Exibe o modal de erro
        setTimeout(() => {
          setShowErrorModal(false); // Fecha o modal de erro após 2 segundos
        }, 2000);
      });
  };
  return (
    <>
      <section className={styles.containerLogin}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900  opacity-90 ">
          <div className="max-w-3xl mx-auto px-4 ">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
              <div className="mt-10 sm:mx-auto sm:w-full">
                <form onSubmit={handleRegister}>
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h1 className="text-base font-semibold leading-7 text-white">Faça o Registro da sua conta</h1>
                      <p className="mt-1 text-sm leading-6 text-white">Por favor, use um endereço permanente onde você possa receber as correspondências.</p>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label htmlFor="gestorName" className="block text-sm font-medium leading-6 text-white">Nome do Representante</label>
                          <div className="mt-2">
                            <input type="text" name="gestorName" id="gestorName" value={gestorName} onChange={(e) => setGestorName(e.target.value)} required autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Palavra-passe</label>
                          <div className="mt-2">
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="nameCompany" className="block text-sm font-medium leading-6 text-white">Nome da Empresa</label>
                          <div className="mt-2">
                            <input type="text" name="nameCompany" id="nameCompany" value={nameCompany} onChange={(e) => setNameCompany(e.target.value)} required autoComplete="organization" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Endereço Email</label>
                          <div className="mt-2">
                            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="province" className="block text-sm font-medium leading-6 text-white">Província</label>
                          <div className="mt-2">
                            <select id="province" 
                                    name="province" 
                                    value={province} 
                                    onChange={(e) => setProvince(e.target.value)} 
                                    required autoComplete="address-level1" 
                                    className="block w-full rounded-md border-0 py-1.5 bg-transparent text-white shadow-sm focus:ring-transparent sm:max-w-xs sm:text-sm sm:leading-6">
                            <option value=""></option>
                            {provinciasData.provincias.map((prov, index) => (
                              <option key={index} value={prov}>{prov}</option>
                            ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-white">Endereço da Empresa</label>
                          <div className="mt-2">
                            <input type="text" 
                                   name="streetAddress" 
                                   id="streetAddress" 
                                   value={streetAddress} 
                                   onChange={(e) => setStreetAddress(e.target.value)} 
                                   required autoComplete="street-address" 
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="nifEmpresa" className="block text-sm font-medium leading-6 text-white">NIF da Empresa</label>
                          <div className="mt-2">
                            <input type="text" 
                                   name="nifEmpresa" 
                                   id="nifEmpresa" 
                                   value={nifEmpresa} 
                                   onChange={(e) => setNifEmpresa(e.target.value)}
                                   minLength={14}
                                   maxLength={14} 
                                   required 
                                   autoComplete="tax-id" 
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400
                          focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="actuacao" className="block text-sm font-medium leading-6 text-white">Ramo de Actividade</label>
                          <div className="mt-2">
                            <select type="text" 
                                   name="actuacao" 
                                   id="actuacao" 
                                   value={actuacao} 
                                   onChange={(e) => setActuacao(e.target.value)} 
                                   required 
                                   autoComplete="off" 
                                   className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                                   >
                             <option value=""></option>
                            {areasAtuacaoData.areasAtuacao.map((area, index) => (
                              <option key={index} value={area}>{area}</option>
                            ))}
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label htmlFor="telefone" className="block text-sm font-medium leading-6 text-white">Número de Telefone</label>
                          <div className="mt-2">
                            <input type="text" 
                                   name="telefone" 
                                   id="telefone" 
                                   value={telefone} 
                                   onChange={(e) => setTelefone(e.target.value)} 
                                   minLength={9}
                                   maxLength={9}
                                   required 
                                   autoComplete="tel" 
                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-end gap-x-6">
                      <Link to="/" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Cancelar</Link>
                      <button type="submit" 
                              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >Guardar
                       </button>
                    </div>
                  </div>
                </form>
                <p className="mt-5 text-center text-sm text-white">
                  Já tens uma conta?{' '}
                  <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Entre</Link>
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
          <Link to="/login" className="text-lg text-gray-900"> Iniciar Sessão</Link>
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
