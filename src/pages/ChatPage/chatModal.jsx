import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Definindo o elemento raiz para acessibilidade

function ChatModal({ chat, onClose }) {
  if (!chat) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel={`Conversa com ${chat.user}`}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="text-white font-bold mb-4">{chat.user}</h2>
        <ul className="divide-y divide-gray-700">
          {chat.messages.map((message, index) => (
            <li key={index} className="py-2">
              <p className="text-white">{message}</p>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-500 text-white py-1 px-3 rounded-md" onClick={onClose}>Fechar</button>
      </div>
    </Modal>
  );
}

export default ChatModal;
