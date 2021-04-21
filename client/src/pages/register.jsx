import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  let history = useHistory();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  };

  const onSubmit = (data, errors) => {
    console.log(data);
    console.log(data);
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

                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                  >
                    <Form className="mt-8">
                      <div className="py-1">
                        <label
                          forHtml="usernameUser"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Nome do Usuario
                        </label>
                        <input
                          id="usernameUser"
                          type="text"
                          name="username"
                          placeholder="Username"
                          autoComplete="username"
                          className="inputRegister"
                          required
                        />
                      </div>

                      <div className="py-1">
                        <label
                          forHtml="email"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email"
                          autoComplete="email"
                          className="inputRegister"
                          required
                        />
                      </div>

                      <div className="py-1">
                        <label
                          forHtml="password"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Senha
                        </label>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="password"
                          autoComplete="current-password"
                          className="inputRegister"
                          required
                        />
                      </div>

                      <div className="py-1">
                        <label
                          forHtml="password_confirm"
                          className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                          Confimar Senha
                        </label>
                        <input
                          id="password_confirm"
                          type="password"
                          name="password"
                          placeholder="password"
                          autoComplete="current-password"
                          className="inputRegister"
                          required
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
                        type="button"
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
}

export default withRouter(Register);
