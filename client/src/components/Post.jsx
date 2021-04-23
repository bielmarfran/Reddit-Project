import React from "react";
import getTime from "../helpers/getTime";
import Comment from "../components/Comment";

export default function Post({ postData }) {
  //console.log(postData);
  postData = {
    uuid: "9e289a2e-6a26-449f-a49c-45b6106a15a7",
    topic: "Comida",
    title: "Post X2",
    body: "Post X2",
    countComments: 0,
    commentsOrder: 0,
    createdAt: "2021-04-22T20:17:14.000Z",
    updatedAt: "2021-04-22T20:17:14.000Z",
    user: {
      username: "bielmarfran@gmail.com",
      email: "bielmarfran@gmail.com",
      profilePicture: null,
    },
    username: "bielmarfran@gmail.com",
    owner: true,
  };
  const uuid = postData.uuid;
  const topic = postData.topic;
  const autor = postData.user.username;
  const title = postData.title;
  const body = postData.body;
  const comments = postData.countComments;
  var t = getTime(postData.updatedAt);
  var time = t;
  const removePost = "";
  return (
    <div className="w-full sm:w-10/12 md:8/12 lg:w-7/12  mx-auto py-2 px-10">
      <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white ">
        <div class="w-full pr-4">
          <div class="w-full pt-2 pl-4" id="bodyPost">
            <div className="flex items-center text-xs mb-2">
              <a
                href="#"
                className="font-semibold no-underline hover:underline text-black flex items-center"
              >
                <img
                  className="rounded-full border h-5 w-5"
                  src="/img/Outros.svg"
                />
                <span className="ml-2">{topic}</span>
              </a>
              <span className="text-grey-light mx-1 text-xxs">•</span>
              <span className="text-grey">Posted by</span>
              <a
                href="#"
                className="text-grey mx-1 no-underline hover:underline"
              >
                {autor}
              </a>
              <span className="text-grey">{time}</span>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-1">{title}</h2>
            </div>
            <div class="ml-7 mb-5 mt-5 ">{body}</div>
            <div className="inline-flex items-center my-1">
              <a className="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                <svg
                  className="inline fill-current"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                </svg>
                {comments}
                <span className="hidden md:inline">&nbsp;comments</span>
              </a>
            </div>
            <div class="mb-5 mt-5">
              <hr></hr>
            </div>

            <div class="w-full md:w-full px-3  mt-2">
              <div class="p-0 m-0"></div>
              <p class="text-xs ml-0.5 mb-0.5">
                Comentar como <a class="text-blue-500">{autor}</a>
              </p>
              <textarea
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                id="commentBody"
                placeholder="'Type Your Comment' required"
              ></textarea>
              <div
                class="modal-footer py-3 px-5 border0-t text-right"
                id="commentButton"
              >
                <button
                  id="postComment-{post.uuid}"
                  class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
                >
                  Commentar
                </button>
              </div>
              {/*dsds*/}
              <Comment commentData={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
