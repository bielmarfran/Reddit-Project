import React from "react";
import { useState } from "react";
import { withRouter, useHistory, Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import * as Yup from "yup";

function Register() {
  var [msg, setMsg] = useState("");
  let history = useHistory();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  };

  const onSubmit = (data) => {
    console.log(data);
    performRegister(data);
  };
  const validationMsg = {
    usernameMin: "Mínimo 4 caracteres!",
    usernameRequired: "Insira um username!",
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

    username: Yup.string()
      .required(validationMsg.usernameRequired)
      .min(4, validationMsg.usernameMin),

    password: Yup.string()
      .required(validationMsg.passwordRequired)
      .min(8, validationMsg.passwordMin)
      .max(32, validationMsg.passwordMax),

    password_confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(validationMsg.passwordRequired)
      .min(8, validationMsg.passwordMin)
      .max(32, validationMsg.passwordMax),
  });

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
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
                  {msg === "" ? "" : callAlert(msg)}
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    <Form className="mt-8">
                      <div className="py-1">
                        <label
                          htmlFor="usernameUser"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Nome do Usuario
                        </label>
                        <Field
                          id="usernameUser"
                          type="text"
                          name="username"
                          placeholder="Username"
                          autoComplete="username"
                          className="inputRegister"
                          required
                        />
                        <ErrorMessage
                          name="username"
                          component="span"
                          className="text-red-500 my-3"
                        />
                      </div>

                      <div className="py-1">
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Email
                        </label>
                        <Field
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email"
                          autoComplete="email"
                          className="inputRegister"
                          required
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="text-red-500 my-3"
                        />
                      </div>

                      <div className="py-1">
                        <label
                          htmlFor="password"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Senha
                        </label>
                        <Field
                          id="password"
                          type="password"
                          name="password"
                          placeholder="password"
                          autoComplete="current-password"
                          className="inputRegister"
                          required
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="text-red-500 my-3"
                        />
                      </div>

                      <div className="py-1">
                        <label
                          htmlFor="password_confirm"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Confimar Senha
                        </label>
                        <Field
                          id="password_confirm"
                          type="password"
                          name="password_confirm"
                          placeholder="password"
                          autoComplete="current-password"
                          className="inputRegister"
                          required
                        />
                        <ErrorMessage
                          name="password_confirm"
                          component="span"
                          className="text-red-500 my-3"
                        />
                      </div>
                      <div className="flex justify-start mt-4">
                        <span className="text-red-500 hidden" id="errorEmail">
                          O email esta incorreto
                        </span>
                        <span
                          className="text-red-500 hidden"
                          id="errorPassword"
                        >
                          As senhas sao diferentes
                        </span>
                      </div>
                      <button
                        id="performRegister"
                        type="submit"
                        className="button"
                      >
                        Registrar
                      </button>
                    </Form>
                  </Formik>

                  <div className="flex justify-start mt-4">
                    <a
                      onClick={handleClick}
                      className="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                    >
                      Você já tem uma conta?
                      <span className="text-black font-semibold"> Login </span>
                    </a>
                  </div>

                  <div className="text-sm font-semibold block sm:hidden py-6 flex justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function handleClick() {
    history.push("/login");
  }
  function performRegister(data) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    const usernameUser = data.username;
    const emailUser = data.email;
    const passwordUser = data.password;

    fetch("http://localhost:8080/auth/register", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify({
        username: usernameUser,
        email: emailUser,
        password: passwordUser,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.response === "Conta Criada com sucesso") {
          history.push("/login", { message: json.response });
        } else if (json.error == "Email ja existe!") {
          setMsg(json.error);
        } else if (json.error == "Username ja existe!") {
          setMsg(json.error);
        }
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
    // debugger;
  }
}

export default withRouter(Register);
