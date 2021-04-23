import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import * as Yup from "yup";

function Login({ location }) {
  let history = useHistory();
  console.log(location);

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (data) => {
    console.log(data);
    performLogin(data);
  };
  const validationMsg = {
    email: "Insira um email valido!",
    emailRequired: "Insira um email!",
    passwordRequired: "Insira uma senha!",
    passwordMin: "Mínimo 8 caracteres!",
    passwordMax: "Máximo de 32 caracteres!",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(validationMsg.emailRequired)
      .email(validationMsg.email),

    password: Yup.string()
      .required(validationMsg.passwordRequired)
      .min(8, validationMsg.passwordMin)
      .max(32, validationMsg.passwordMax),
  });
  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Login
            </h2>
            {typeof location.state !== "undefined"
              ? callAlert(location.state)
              : ""}

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form className="mt-10">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>

                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  autoComplete="email"
                  className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 my-3"
                />

                <label
                  htmlFor="password"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="current-password"
                  className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 my-3"
                />

                <button
                  id="performLogin"
                  type="submit"
                  className="w-full py-3 mt-10 bg-blue-400 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-blue-500 hover:shadow-none"
                >
                  Login
                </button>

                <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <a onClick={handleClick} className="flex-2 underline">
                    Criar Conta
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
  function handleClick() {
    history.push("/register");
  }
  function performLogin(data) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    //const usernameUser = document.getElementById("usernameUser").value;
    const emailUser = data.email;
    const passwordUser = data.password;

    fetch("http://localhost:8080/auth", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify({ email: emailUser, password: passwordUser }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.response == "Logado com Sucesso") {
          history.push("/", { message: json.response });
        } else if (json.error == "Acesso não autorizado") {
          showAlert(json.error);
        }
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }
}

export default withRouter(Login);
