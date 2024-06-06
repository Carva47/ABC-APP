import React from "react";

import CarexLogo from "../../assets/img/carex_logo.png";
import { FaCamera, FaVideo, FaLine, FaCalendar} from 'react-icons/fa6';

export function CreatePost() {
  return (
            <div className="bg-gray-900 border border-gray-700 rounded-md p-4 mb-4">
                <div className="second-col-section-home flex items-center mb-4 bg-gray-900">
                    <img src={CarexLogo} alt="" className="w-14 h-14 rounded-full mr-4"/>
                    <input type="text" placeholder='Cria uma publicação' className="w-full h-10 focus-visible:ring-transparent rounded-full pl-4 border border-gray-700 bg-gray-700 text-white"/>
                </div>
                <div className="page-home-uploads-section justify-between">
                    <ul className="flex justify-between text-white font-semibold">
                        <li className="flex items-center mr-1"><FaCamera className="mr-1" /> Mídias</li>
                        <li className="flex items-center px-2 "><FaVideo className="mr-1" /> Meet</li>
                        <li className="flex items-center px-2"><FaLine className="mr-1" /> StartUp</li>
                        <li className="flex items-center "><FaCalendar className="mr-1" /> Evento</li>
                    </ul>
                </div>
            </div>
      
  );
}