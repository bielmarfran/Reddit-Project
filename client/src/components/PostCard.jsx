import React from "react";

export default function PostCard({ postData }) {
  const uuid = "Teste";
  const topic = "Teste";
  const autor = "Teste";
  const title = "Teste";
  const comments = "Teste";
  const time = `2 hours ago`;
  const removePost = "";
  return (
    <div class="w-full sm:w-10/12 md:8/12 lg:w-7/12 my-2 mx-auto py-2 px-10">
      <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer hover:shadow-lg">
        <div class="w-11/12 pt-2 pl-5" id="openPost">
          <div class="flex items-center text-xs mb-2">
            <a
              href="#"
              class="font-semibold no-underline hover:underline text-black flex items-center"
            >
              <img class="rounded-full border h-5 w-5" src="/img/Outros.svg" />
              <span class="ml-2">{topic}</span>
            </a>
            <span class="text-grey-light mx-1 text-xxs">•</span>
            <span class="text-grey">Posted by</span>
            <a href="#" class="text-grey mx-1 no-underline hover:underline">
              {autor}
            </a>
            <span class="text-grey">{time}</span>
          </div>
          <div>
            <h2 class="text-lg font-medium mb-1">{title}</h2>
          </div>
          <div class="inline-flex items-center my-1">
            <a class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
              <svg
                class="inline fill-current"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
              </svg>
              ${comments}
              <span class="hidden md:inline">&nbsp;comments</span>
            </a>
          </div>
        </div>
      </div>
      <div class="w-1/12 pt-2"></div>
    </div>
  );
}
