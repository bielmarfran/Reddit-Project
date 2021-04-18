import React from "react";
import { useHistory, withRouter } from "react-router-dom";


function Login() {
  let history = useHistory();

  return (

    
    <div>
      <div class="flex flex-col h-screen bg-gray-100">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Login
            </h2>
            <div
              id="alert"
              class="hidden transition-all duration-500 ease-in-out"
            >
              <div class="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-full">
                <svg
                  viewBox="0 0 24 24"
                  class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
                  ></path>
                </svg>
                <span class="text-red-800" id="alertMessage">
                  {" "}
                  Erro{" "}
                </span>
              </div>
            </div>

            <form class="mt-10" method="POST">
              <label
                for="email"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e-mail address"
                autocomplete="email"
                class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />

              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                autocomplete="current-password"
                class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />

              <button
                id="performLogin"
                type="button"
                class="w-full py-3 mt-10 bg-blue-400 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-blue-500 hover:shadow-none"
              >
                Login
              </button>

              <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a onClick={handleClick} class="flex-2 underline">
                  Criar Conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
  function handleClick() {
    history.push("/register")
}
}

export default withRouter(Login);
