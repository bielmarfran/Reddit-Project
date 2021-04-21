import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";

function Feed({ data }) {
  let history = useHistory();
  console.log(data);
  return (
    <div className="bg-gray-200">
      <div class="flex flex-col h-screen justify-between">
        <nav class="bg-white w-full flex relative justify-between items-center mx-auto py-6 px-8 h-20 sm:px-10 ">
          <div class="flex">
            <a class="_o6689fn" href="/">
              <div class="md:block">
                <svg
                  enable-background="new 0 0 55 55"
                  height="55px"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="55px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="reddit">
                    <path
                      d="M16.105,11.077c-0.055,0-0.11-0.008-0.166-0.026c-0.289-0.092-0.45-0.401-0.358-0.69l2.084-6.585   c0.088-0.273,0.367-0.436,0.65-0.369l5.668,1.334c0.296,0.069,0.479,0.366,0.409,0.661c-0.069,0.295-0.364,0.481-0.661,0.409   L18.56,4.594l-1.93,6.099C16.556,10.927,16.339,11.077,16.105,11.077z"
                      fill="#263238"
                    />
                    <g>
                      <path
                        d="M26.171,8.518c-1.535,0-2.784-1.249-2.784-2.784s1.249-2.784,2.784-2.784s2.784,1.249,2.784,2.784    S27.706,8.518,26.171,8.518z M26.171,4.05c-0.929,0-1.685,0.756-1.685,1.685s0.756,1.684,1.685,1.684s1.685-0.755,1.685-1.684    S27.1,4.05,26.171,4.05z"
                        fill="#263238"
                      />
                    </g>
                    <path
                      d="M15.938,28.05c-7.382,0-13.388-4.005-13.388-8.928c0-2.319,1.313-4.512,3.699-6.176   c0.247-0.173,0.591-0.114,0.766,0.137c0.174,0.249,0.112,0.592-0.137,0.766C4.797,15.3,3.65,17.173,3.65,19.122   c0,4.316,5.513,7.828,12.288,7.828s12.287-3.512,12.287-7.828s-5.512-7.828-12.287-7.828c-1.892,0-3.707,0.269-5.396,0.799   c-0.288,0.09-0.599-0.07-0.689-0.36c-0.092-0.29,0.07-0.598,0.359-0.689c1.796-0.563,3.722-0.849,5.726-0.849   c7.382,0,13.387,4.005,13.387,8.928S23.32,28.05,15.938,28.05z"
                      fill="#263238"
                    />
                    <g>
                      <path
                        d="M11.491,15.397c-1.152,0.013-2.084,0.944-2.097,2.097c0,1.14,0.957,2.065,2.097,2.065    c1.141,0,2.065-0.925,2.065-2.065S12.632,15.397,11.491,15.397z M20.54,15.397c-1.153,0.012-2.086,0.944-2.1,2.097    c0,1.141,0.959,2.065,2.1,2.065s2.065-0.925,2.065-2.065C22.605,16.353,21.681,15.397,20.54,15.397L20.54,15.397z"
                        fill="#263238"
                      />
                      <path
                        d="M16.016,24.862c-0.013,0-0.021,0-0.032,0c-2.229,0-3.802-0.489-4.807-1.494    c-0.215-0.214-0.215-0.563,0-0.777c0.215-0.215,0.563-0.215,0.777,0c0.789,0.789,2.106,1.172,4.029,1.172c0.011,0,0.02,0,0.032,0    c1.923,0,3.241-0.384,4.03-1.172c0.215-0.215,0.563-0.214,0.777,0s0.215,0.563,0,0.778C19.817,24.374,18.244,24.862,16.016,24.862    z"
                        fill="#263238"
                      />
                    </g>
                    <g>
                      <circle cx="8.499" cy="12.5" fill="#263238" r="0.5" />
                    </g>
                    <g>
                      <path
                        d="M2.124,15.224c0-1.259,1.024-2.284,2.284-2.284c0.686,0,1.294,0.31,1.713,0.789    c0.283-0.219,0.585-0.427,0.901-0.627c-0.621-0.763-1.556-1.262-2.614-1.262c-1.866,0-3.384,1.518-3.384,3.384    c0,1.424,0.887,2.64,2.135,3.139c0.051-0.37,0.142-0.732,0.265-1.086C2.657,16.907,2.124,16.13,2.124,15.224z"
                        fill="#263238"
                      />
                      <path
                        d="M30.976,15.224c0-1.866-1.518-3.384-3.384-3.384c-1.082,0-2.035,0.519-2.655,1.311    c0.314,0.202,0.615,0.412,0.896,0.634c0.419-0.512,1.048-0.845,1.759-0.845c1.26,0,2.284,1.025,2.284,2.284    c0,0.947-0.579,1.761-1.402,2.107c0.117,0.349,0.198,0.706,0.246,1.069C30.029,17.934,30.976,16.693,30.976,15.224z"
                        fill="#263238"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="">
              <button
                id="openModal"
                class="inline-block px-6 py-2 text-md font-bold leading-6 text-center text-white uppercase transition bg-blue-400 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
              >
                Criar Post
              </button>
            </div>
            <div className="">
              {" "}
              <button
                id="performLogout"
                class="inline-block bg-transparent hover:bg-gray-200 text-blue-400 font-semibold hover:text-gray-800 ml-4 py-1 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Logout
              </button>
            </div>
            <div className="pl-3.5 pt-1.5">
              <img
                id="profile"
                class="rounded-full border ml-4 h-12 w-12"
                src="/img/profile_default.svg"
              />
            </div>
          </div>
        </nav>

        <div id="app" class="mb-auto"></div>

        <nav class="bg-white w-full flex relative items-center justify-center mx-auto py-6 px-12 h-20">
          <div class="flex mx-auto text-black text-center">
            Copyright Business Name © 2021
          </div>
        </nav>
      </div>
    </div>
  );
}

export default withRouter(Feed);
