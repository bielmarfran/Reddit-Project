import React from "react";
import getTime from "../helpers/getTime";
import { deleteComment } from "../helpers/api/commentOperations";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Comment({ commentData, postUuid, removeCommentDOM }) {
  //console.log(commentData);

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
        <span className="text-grey ml-2">{time}</span>
        {commentData.owner ? editComment() : ""}
        {commentData.owner ? removeComment() : ""}
      </div>

      <div className="ml-7 mb-5 mt-5 ">{body}</div>
    </div>
  );
  async function handleClickRemoveComment() {
    const response = await deleteComment(uuid, postUuid);

    if (response.response == "Comment Deleted!") {
      console.log(response);
      removeCommentDOM(uuid);
    } else if (response.error == "Acesso não autorizado") {
      history.push("/login", { error: "Acesso não Autorizado / Expirado" });
    }
  }

  function removeComment() {
    return (
      <div className="ml-auto hover:shadow-lg">
        <a onClick={handleClickRemoveComment}>
          <RemoveIcon className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    );
  }
  function editComment() {
    return <EditIcon className="w-5 h-5 ml-2" aria-hidden="true" />;
  }
}

function EditIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
}

function RemoveIcon(params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
