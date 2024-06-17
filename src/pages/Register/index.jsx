
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../../components/logo";
import styles from "./Register.module.css";
import axios from 'axios';


export function Register() {

  const [gestorName, setGestorName] = useState('');
  const [password, setPassword] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [nifEmpresa, setNifEmpresa] = useState('');
  const [actuacao, setActuacao] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

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

    axios.post('http://localhost:3001/register', user)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        alert('Erro ao registrar: ' + error.response.data);
      });
  };

  return (
    <>
    <section className={styles.containerLogin}>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900  opacity-90 ">
      <div className="max-w-3xl mx-auto px-4 ">
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="mt-10 sm:mx-auto sm:w-full">
            <form>
             <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base font-semibold leading-7 text-white ">Faça o Registro da sua conta </h1>
          <p className="mt-1 text-sm leading-6 text-white"> Por favor, use um endereço permanente onde você possa receber as correspondências.</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="Nome-do-Rpresentante" className="block text-sm font-medium leading-6 text-white">
                Nome do Representante
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="gestorName"
                  id="gestorName"
                  value={gestorName}
                  onChange={(e) => setGestorName(e.target.value)}
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Palavra-passe
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="nameEmpresa" className="block text-sm font-medium leading-6 text-white">
                Nome da Empresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nameCompany"
                  id="nameCompany"
                  value={nameCompany}
                  onChange={(e) => setNameCompany(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Endereço Email
              </label>
              <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                Província
              </label>
              <div className="mt-2">
                <select
                  id="province"
                  name="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  required
                  autoComplete="province-name"
                  className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm focus:ring-transparent sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option> </option>
                  <option>Luanda</option>
                  <option>Benguela</option>
                  <option>Uíge</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
                Endereço rua
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  required
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
             NIF da Empresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nifEmpresa"
                  id="nifEmpresa"
                  value={nifEmpresa}
                  onChange={(e) => setNifEmpresa(e.target.value)}
                  minLength={14}
                  maxLength={14}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="actuacao" className="block text-sm font-medium leading-6 text-white">
                Área de Actuação
              </label>
              <div className="mt-2">
                <select
                  type="text"
                  name="actuacao"
                  id="actuacao"
                  autoComplete="organization"
                  value={actuacao}
                  onChange={(e) => setActuacao(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                >
                 <option> </option>
                  <option>Tecnologia</option>
                  <option>Marketing</option>
                  <option>Finanças</option> 
                </select>

              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white">
                Telefone
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  minLength={9}
                  maxLength={9}
                  autoComplete="tel-local"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-transparent sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/" className="text-sm  px-3 py-2 font-semibold leading-6 text-white hover:rounded-md hover:bg-gray-800">
          Cancelar
        </Link>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-bule-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
        </section>
      </>
  )
}
