import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import { getPost } from "../helpers/getPost";
import PostInfo from "../components/Post";

function Post({ data }) {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  let history = useHistory();

  console.log(id);

  useEffect(() => {
    getPost(id).then((response) => {
      console.log(response);
      setPost(response);
    });
  }, []);
  /**
   * if (typeof response.error !== "undefined")
        history.push("/login", { error: "Acesso não Autorizado" });
      if (response == "TypeError: Failed to fetch")
        history.push("/login", { error: "Servidor Off" });
  */
  console.log(post);
  return <PostInfo postData={post} />;
}

export default withRouter(Post);
