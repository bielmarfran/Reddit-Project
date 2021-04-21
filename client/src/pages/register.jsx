import React from "react";
import {withRouter , useHistory} from 'react-router-dom';


function Register(){
    let history = useHistory();

    return(
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="md:mt-6">
                  <div className="text-5xl text-center font-semibold text-black">
                    Social
                  </div>
                  <div className="text-3xl text-center font-base text-black mt-4">
                    Registro
                  </div>
                  <div id="alert" className="hidden">
                    <div
                      className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-full"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                      >
                        <path
                          fill="currentColor"
                          d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                        ></path>
                      </svg>
                      <span className="text-red-800" id="alertMessage"> Erro </span>
                    </div>
                  </div>
                  <form className="mt-8">

                  <div className="py-1">
                    <label forHtml="usernameUser" className="block text-xs font-semibold text-gray-600 uppercase">
                        Nome do Usuario
                    </label> 
                    <input id="usernameUser" type="text" name="username" placeholder="Username" autoComplete="username" className="inputRegister" required/>
                  </div>


                  <div className="py-1">
                    <label forHtml="email" className="block text-xs font-semibold text-gray-600 uppercase">
                        Email
                    </label> 
                    <input id="email" type="email" name="email" placeholder="email" autoComplete="email" className="inputRegister" required/>
                  </div>

                  <div className="py-1">
                    <label forHtml="password" className="block text-xs font-semibold text-gray-600 uppercase">
                         Senha
                    </label> 
                    <input id="password" type="password" name="password" placeholder="password" autoComplete="current-password" className="inputRegister" required/>
                  </div>

                  <div className="py-1">
                    <label forHtml="password_confirm" className="block text-xs font-semibold text-gray-600 uppercase">
                        Confimar Senha
                    </label> 
                    <input id="password_confirm" type="password" name="password" placeholder="password" autoComplete="current-password" className="inputRegister" required/>
                  </div>
                    <div className="flex justify-start mt-4">
                        <span className="text-red-500 hidden" id="errorEmail"
                          >O email esta incorreto</span
                        >
                        <span className="text-red-500 hidden" id="errorPassword"
                          >As senhas sao diferentes</span
                        >
                    </div>
                    <button id="performRegister" type="button" className="button">
                        Registrar
                    </button>
                
                  </form>
              
                  <div className="flex justify-start mt-4">
                    <a onClick={handleClick} className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">
                        Você já tem uma conta?
                        <span className="text-black font-semibold"> Login </span>
                    </a>
                  </div>

                  <div
                    className="text-sm font-semibold block sm:hidden py-6 flex justify-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    function handleClick() {
        history.push("/login")
    }
}

export default withRouter(Register);