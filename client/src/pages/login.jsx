import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import AlertWarningRed  from "../components/AlertWarningRed";


function Login({ location }) {
  let history = useHistory();
  console.log(location);
  return (

    
    <div>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Login
            </h2>
            {typeof location.state  !== 'undefined' ?  <AlertWarningRed errorMsg={location.state.error} /> : ""}
          

            <form className="mt-10" method="POST">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e-mail address"
                autoComplete="email"
                className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />

              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                autoComplete="current-password"
                className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />

              <button
                id="performLogin"
                type="button"
                className="w-full py-3 mt-10 bg-blue-400 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-blue-500 hover:shadow-none"
              >
                Login
              </button>

              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a onClick={handleClick} className="flex-2 underline">
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
