import CapaDefault from "../../assets/img/CapaDefoult.jpg";
import ProfileDefault from "../../assets/img//profileDefoult.png";
import React, { useEffect, useState, useContext } from 'react';
import { PrincipalPage } from '../../layout/principalPage';
import "./userpage.css";
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { MainPost } from '../../components/MainPost/MainPost';
import { Link } from 'react-router-dom';
import aguardar from '../../assets/img/Spin@1x-1.0s-200px-200px (1).gif';
import { AuthContext } from '../../context/AuthContext'; // Importe o contexto de autenticação


export function UserPage() {
    const { user, userType } = useContext(AuthContext); // Obtenha o usuário e o tipo de usuário do contexto
    const [activeFilter, setActiveFilter] = useState('todos'); 

    if (!user) {
        return (
            <div className="loading-container flex justify-center items-center h-screen">
                <img src={aguardar} alt="Loading..." className="loading-gif" />
            </div>
        );
    }

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <PrincipalPage>
            <div className="home-page-cards flex flex-col lg:flex-row justify-between rounded-md h-screen"> 
                <div className="home-page-col-one bg-gray-800 border  border-gray-700 rounded-md hidden lg:block w-full lg:w-1/5 "> 
                    <div className="col-card-one-img1 mb-4">
                        <img src={user.FotoCapa ? user.FotoCapa : CapaDefault} alt="" className="w-full h-32 object-cover" /> 
                    </div>
                    <div className="col-card-onde-img2 relative flex justify-center items-center mb-4">
                        <img src={user.FotoPerfil ? user.FotoPerfil : ProfileDefault} alt="" className="w-20 h-20 rounded-full absolute -top-10" />
                    </div>
                    <div className="parte-name-empresa text-center text-white font-bold mt-5 mb-1">
                        <h1><Link to="/edit-profile" className="text-lg  hover:underline">
                            {/* Renderize o nome corretamente com base no tipo de usuário */}
                            {userType === 'empresa' ? user.company?.NomeEmpresa : user.entrepreneur?.Nome}
                        </Link></h1>
                    </div>
                    <div className="parte-descricao-empresa text-center text-white mb-2">
                        <p className="capitalize">{user.tipo}</p>
                    </div>
                    <div className="hr-line w-full h-px bg-gray-600 my-2"></div>
                    <div className="whoviewurprofilesec text-white">
                        <div className="flex justify-between text-blue-400 mb-2 px-2 hover:cursor-pointer">
                            <span className='text-white'>Área de Actuação:</span>
                            <span className='text-nowrap'>{user.AreaAtuacao}</span>
                        </div>
                        <div className="flex justify-between text-blue-400 mb-2 px-2 hover:cursor-pointer">
                            <span className='text-white'>Visualização do Perfil:</span>
                            <span>40</span>
                        </div>
                        <div className="flex justify-between text-blue-400 px-2 hover:cursor-pointer">
                            <span className='text-white'><Link to={"/connections"}>Conexões:</Link></span>
                            <span><Link to="/connections">60</Link></span>
                        </div>
                    </div>
                    <div className="hr-line w-full h-px bg-gray-600 my-2"></div>
                    <div className="flex justify-center text-blue-400 mb-2 px-2 hover:cursor-pointer">
                        <span><Link to="/dashboard">Dashboard de Análise </Link></span>
                    </div>
                    <div className="flex justify-center text-white hover:cursor-pointer">
                        <Link to="/profile">Ver mais</Link>
                    </div>
                </div>

                <div className="home-page-col-two w-full lg:w-3/5 bg-gray-800 rounded-md">
                    <CreatePost />
                    <MainPost  className="mt-4" filter={activeFilter} /> 
                </div>
                <div className="home-page-col-three w-full border border-gray-700 lg:w-1/5 bg-gray-800 rounded-md mt-4 lg:mt-0 p-4 hidden lg:block h-screen">
                    <h4 className="text-white text-lg font-medium mb-4">Filtrar Posts</h4>
                    <div className="flex flex-col gap-2">
                        <button
                            className={`bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 ${activeFilter === 'todos' ? 'bg-blue-500' : ''}`}
                            onClick={() => handleFilterChange('todos')}
                        >
                            Todos
                        </button>
                        <button
                            className={`bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 ${activeFilter === 'eventos' ? 'bg-blue-500' : ''}`}
                            onClick={() => handleFilterChange('eventos')}
                        >
                            Eventos
                        </button>
                        <button
                            className={`bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 ${activeFilter === 'startups' ? 'bg-blue-500' : ''}`}
                            onClick={() => handleFilterChange('startup')}
                        >
                            Startup
                        </button>
                        <button
                            className={`bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 ${activeFilter === 'salasDeNegocios' ? 'bg-blue-500' : ''}`}
                            onClick={() => handleFilterChange('salasDeNegocios')}
                        >
                            Salas de Negócios
                        </button>
                    </div>
                </div>
            </div>
        </PrincipalPage>
    );
}