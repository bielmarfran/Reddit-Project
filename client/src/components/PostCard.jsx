import React from "react";
import getTime from "../helpers/getTime";

export default function PostCard({ postData }) {
  //console.log(postData);
  const uuid = postData.uuid;
  const topic = postData.topic;
  const autor = postData.user.username;
  const title = postData.title;
  const comments = postData.countComments;
  var t = getTime(postData.updatedAt);
  var time = t;
  const removePost = "";
  return (
    <div className="w-full sm:w-10/12 md:8/12 lg:w-7/12  mx-auto py-2 px-10">
      <div className="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer hover:shadow-lg">
        <div className="w-11/12 pt-2 pl-5" id="openPost">
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
            <a href="#" className="text-grey mx-1 no-underline hover:underline">
              {autor}
            </a>
            <span className="text-grey">{time}</span>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-1">{title}</h2>
          </div>
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
        </div>
      </div>
      <div className="w-1/12 pt-2"></div>
    </div>
  );
}
