import React, { useState } from 'react';
import { PrincipalPage } from '../../layout/principalPage';

export function ChatsPage() {
  // Estado inicial das conversas
  const [chats, setChats] = useState([
    { id: 1, user: 'User1', messages: ['Olá!', 'Tudo bem?', 'Sim, e você?'] },
    { id: 2, user: 'User2', messages: ['Oi!', 'Como vai?', 'Vou bem, obrigado!'] },
    { id: 3, user: 'User3', messages: ['E aí?', 'Como está?'] },
    // Adicione mais conversas conforme necessário
  ]);

  return (
    <PrincipalPage>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Chats</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chats.map(chat => (
            <div key={chat.id} className="bg-gray-800 p-4 rounded-md shadow-md">
              <p className="text-white font-bold">{chat.user}</p>
              <p className="text-gray-400">{chat.messages[chat.messages.length - 1]}</p>
            </div>
          ))}
        </div>
      </div>
    </PrincipalPage>
  );
}
