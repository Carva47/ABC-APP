
import { Link } from 'react-router-dom';
import {MdMenu} from 'react-icons/md'
import { Container } from '../container';
import { Logo } from '../logo';
import { useEffect, useState } from 'react';

const links = [
    {
        title:"Sobre nós",
        path: ""
    },
    {
        title:"Serviços",
        path: ""
    },
    {
        title:"Benefícios",
        path: ""
    },
    {
        title:"Perguntas Frequentes",
        path: ""
    }
]

export function Header(){
    const [blur, setBlur] = useState(false);

    const followPageScroll = () => {
        setBlur(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", followPageScroll);
        return () => window.removeEventListener('scroll',followPageScroll);
    });

    return(
        <header className={`fixed overflow-hidden z-20 w-full bg-gray-950/0 ${blur && "backdrop-blur-xl"}`}>
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Logo/>
                    <nav className="md:flex md:items-center md:gap-12">
                        <ul className="hidden md:flex items-center gap-6 text-sm">
                            {links.map((item,index)=>(
                                <li key={index}>
                                    <Link to={item.path} className="text-white/95 transition hover:text-white">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link to="/login" className="border-0 px-5 py-2.5 text-sm font-medium text-white">
                                    Login
                                </Link>
                                <Link to="/register" className="hidden sm:block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">
                                    Registrar
                                </Link>
                            </div>
                            <button className="block md:hidden rounded p-2 text-white transition hover:text-white/75">
                                <MdMenu className='size-9'/>
                            </button>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    );    
};