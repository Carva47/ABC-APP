import React from 'react';
import { PrincipalPage } from '../../layout/principalPage';
import "./userpage.css";
import Carex1 from "../../assets/img/carex.png";
import CarexLogo from "../../assets/img/carex_logo.png";
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { MainPost } from '../../components/MainPost/MainPost';

export function UserPage() {

    return (
        <PrincipalPage>
            <div className="home-page-cards flex flex-col lg:flex-row justify-between rounded-md">
                <div className="home-page-col-one bg-gray-800 rounded-md hidden lg:block w-full lg:w-1/5 h-96">
                    <div className="col-card-one-img1 mb-4">
                        <img src={Carex1} alt="" className="w-full h-32 object-cover"/>
                    </div>
                    <div className="col-card-onde-img2 relative flex justify-center items-center mb-4">
                        <img src={CarexLogo} alt="" className="w-20 h-20 rounded-full absolute -top-10"/>
                    </div>
                    <div className="parte-name-empresa text-center text-white font-bold mt-5 mb-1">
                        <h1>CAREX ANGOLA</h1>
                    </div>
                    <div className="parte-descricao-empresa text-center text-white mb-2">
                        <p>Importação e exportação de produtos diversos</p>
                    </div>
                    <div className="hr-line w-full h-px bg-gray-600 my-2"></div>
                    <div className="whoviewurprofilesec text-white">
                        <div className="flex justify-between text-blue-400 mb-2 px-2">
                            <span>Visualização do Perfil</span>
                            <span>40</span>
                        </div>
                        <div className="flex justify-between text-blue-400 px-2 hover:cursor-pointer">
                            <span>Conexões</span>
                            <span>60</span>
                        </div>
                    </div>
                    <div className="hr-line w-full h-px bg-gray-600 my-2"></div>
                   
                        <div className="flex justify-center text-blue-400 mb-2 px-2 hover:cursor-pointer">
                            <span>Dashboard de Análise</span>
                                      
                    </div>
                </div>

                <div className="home-page-col-two w-full lg:w-3/5 bg-gray-900 flex flex-col p-4">
                  <CreatePost />
                  <MainPost />
                </div>

                <div className="home-page-col-three bg-gray-800 rounded-md hidden lg:block w-full lg:w-1/5 h-96 p-4">
                    <div className="text-white text-lg font-bold mb-4">Filtrar Postagens</div>
                    <div className="flex flex-col space-y-2">
                        <button className="py-2 px-4 rounded bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white">
                            StartUp
                        </button>
                        <button className="py-2 px-4 rounded bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white">
                            Salas de Negócios
                        </button>
                    </div>
                </div>
            </div>
        </PrincipalPage>
    );
}
