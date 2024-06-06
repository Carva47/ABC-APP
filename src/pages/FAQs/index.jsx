import React from 'react';
import { Header } from '../../components/Header';
import styles from './FAQs.module.css';
import { Link } from 'react-router-dom';
 
  export function Faqs() {
    return (
      <>
      <Header/>
        <section className={styles.container}>

        <div className="bg-white py-10 sm:py-10 ">

        <div className=" grid justify-center columns-1 mx-auto  gap-x-8 gap-y-20 px-6 lg:px-5 xl:grid-cols-2">
                     
                      <div className=" text-center my-10">
                         <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Perguntas frequentes</h2>
                         <p className="mt-6 text-lg leading-8 text-gray-600">
                         Não consegue encontrar a resposta que procura?
                         Entre em contato com nossa equipe de <Link to="" className='text-blue-500'> suporte ao cliente </Link>.
                                      </p>
                       </div>            
                <div>
                     <div className="my-10">
                         <h5 className="font-medium tracking-tight text-gray-900 sm:text-xl">Como posso me cadastrar?</h5>
                         <p className="mt-6 text-lg leading-8 text-gray-600">
                          Para se cadastrar, basta clicar no no link a seguir <Link to="/signup" className='text-blue-500'> Registrar-se </Link>.
                                      </p>
                    </div> 
                    <div className="my-6">
                         <h5 className=" font-medium tracking-tight text-gray-900 sm:text-xl">Preciso ter um NIF?</h5>
                         <p className="mt-6 text-lg leading-8 text-gray-600">
                            Sim, para cadastrar na plataforma, precisas ser um empresário ou representante de uma empresa e com NIF válido.
                                      </p>
                    </div>
                    <div className="my-6">
                         <h5 className="font-medium tracking-tight text-gray-900 sm:text-xl"> Como funciona a plataforma?</h5>
                         <p className="mt-6 text-lg leading-8 text-gray-600">
                            A plataforma tem como principal objetivo conectar empresas, empreendedores e startups digitais em Angola e outras partes do mundo.
                                      </p>
                    </div>
                    <div className="my-6">
                         <h5 className="font-medium tracking-tight text-gray-900 sm:text-xl"> Quais são os tipos de serviços encontrados? </h5>
                         <p className="mt-6 text-lg leading-8 text-gray-600"> 
                            Os tipos de negócios encontrados são: startups, empreendedores e empresas.</p>
                    </div>
                    <div className="my-6">
                         <h5 className="font-medium tracking-tight text-gray-900 sm:text-xl"> Preciso fazer algum pagamento para registrar-se? </h5>
                         <p className="mt-6 text-lg leading-8 text-gray-600"> Não, não precisa ser feito nenhum pagaemnto para poder registrar-se na plataforma,
                         basta ser apenas um empreendedor ou representante de uma empresa com NIF válido.
                            </p>
                    </div>
                </div>     
            </div>
         </div>            
    </section>
      </>
    )
  }