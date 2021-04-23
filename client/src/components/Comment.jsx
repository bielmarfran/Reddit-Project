import React from "react";
import getTime from "../helpers/getTime";

export default function Comment({ commentData }) {
  //console.log(commentData);
  commentData = {
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
  const uuid = commentData.uuid;
  const topic = commentData.topic;
  const autor = commentData.user.username;
  const title = commentData.title;
  const body = commentData.body;
  const comments = commentData.countComments;
  const profile = "commentData.countComments";
  var t = getTime(commentData.updatedAt);
  var time = t;
  const removePost = "";
  return (
    <div id="comment">
      <div className="mb-5 mt-5">
        <hr></hr>
      </div>
      <div className="flex items-center text-xs ">
        <a
          href="#"
          className="font-semibold no-underline hover:underline text-black flex items-center"
        >
          <img
            id={profile}
            className="rounded-full border h-5 w-5"
            src="../../img/profile_default.svg"
          />
          <span className="ml-2">{autor}</span>
        </a>
        <span className="text-grey ml-2">${time}</span>
        {commentData.owner ? "edit" : ""}
      </div>
      {commentData.owner ? "tet" : ""}
      <div className="ml-7 mb-5 mt-5 ">{body}</div>
    </div>
  );
}
