import React from 'react';
import { Header } from '../../components/Header';
import styles from './SobreNos.module.css';


const people = [
    {
      name: 'Nvuala Carvalho',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQHgN3jnxesN9Q/profile-displayphoto-shrink_800_800/0/1699910773192?e=1720656000&v=beta&t=mwSC5OKMIQkwEk-H0U02M_bPVxHWFYXOgtGPDAu7ty8',
    },
    {
      name: 'Anderson Claúdio',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQGrnbkRmvZXsA/profile-displayphoto-shrink_800_800/0/1692366030427?e=1720656000&v=beta&t=0Roft7aAO7zk_BoKKqoZXvfV4A0u3ZFWfCdodLQZxv8'
    }
    ,
    {
      name: 'Manuel Bento',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVDMyVBRGNvbmUlMjBkbyUyMHVzdSVDMyVBMXJpb3xlbnwwfHwwfHx8MA%3D%3D'
    }
    // More people...
  ]
  export function SobreNos() {
    return (
      <>
      <Header/>
        <section className={styles.container}>

              <div className="bg-white py-10 sm:py-10 ">
                <div className="justify-center columns-1 mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                  <div className="mx-10 max-w-2xl text-center lg:max-w-none lg:text-left xl:col-span-2">
                    <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Angola Business Connect</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">

                  Bem-vindo à Angola Business Connect, uma plataforma dedicada a conectar empresas, 
                  empreendedores e startups digitais em Angola e além. Fundada com a missão de impulsionar a 
                  inovação, facilitar parcerias estratégicas e promover o crescimento econômico sustentável, 
                  nossa plataforma é um ponto de encontro dinâmico para profissionais visionários e 
                  líderes de negócios que buscam oportunidades de colaboração e desenvolvimento.
                                      </p>
                  </div>
                  <div className="max-w-2xl mx-10 text-center lg:max-w-none lg:text-left xl:col-span-2 my-5">
                    <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Nossa Visão e Missão</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">

                    Nossa jornada começou com a visão de construir uma comunidade vibrante e inclusiva, 
                    onde empreendedores e empresas podem se conectar, compartilhar conhecimentos e alcançar 
                    novos patamares de sucesso. Desde o seu lançamento, Angola Business Connect tem se destacado 
                    como um catalisador de transformação no cenário empresarial angolano, 
                    proporcionando um ambiente digital seguro e colaborativo para o florescimento de 
                    ideias inovadoras e parcerias estratégicas.
                                      </p>
                  </div>
                  <div className="max-w-2xl mx-10 text-center lg:max-w-none lg:text-left xl:col-span-2 my-5">
                    <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">Compromisso com a Excelência e Integridade</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">

                    Nosso compromisso com a excelência e a integridade guia cada aspecto de nossa plataforma. 
                    Trabalhamos incansavelmente para oferecer uma experiência excepcional aos nossos usuários, 
                    fornecendo ferramentas e recursos poderosos para facilitar a comunicação, promover a colaboração 
                    e impulsionar o crescimento dos negócios. Estamos empenhados em cultivar uma cultura de confiança, 
                    transparência e respeito mútuo,onde todos os membros da comunidade se sintam valorizados e capacitados 
                    a alcançar seu pleno potencial.
                                      </p>
                  </div>      
                  
                  <ul role="list" className="my-20 justify-center sm:flex sm:justify-center grid-cols-2 sm:gap-12 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-12 xl:col-span-1">
                  <h6 className="font-bold txt-center text-gray-900 ">Team: </h6>
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="flex items-center gap-x-6 ">
                          <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                          </div>
                        </div>
                      </li>
                    ))}           
                  </ul>


                  </div>
                </div>            
        </section>
      </>
    )
  }