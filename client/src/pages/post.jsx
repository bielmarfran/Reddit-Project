import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import { getPost } from "../helpers/postOperations";
import PostInfo from "../components/Post";
import Header from "../components/header";
import Footer from "../components/footer";

function Post({ data }) {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  let history = useHistory();
  var test = "tete";
  console.log(id);

  useEffect(() => {
    getPost(id).then((response) => {
      setPost(response);
      console.log(response);
    });
  }, []);
  /**
   * if (typeof response.error !== "undefined")
        history.push("/login", { error: "Acesso não Autorizado" });
      if (response == "TypeError: Failed to fetch")
        history.push("/login", { error: "Servidor Off" });
//
  */
  console.log(post);
  return (
    <div className="bg-gray-200">
      <Header hide={false} />
      <div className="flex flex-col h-screen justify-between">
        <div id="app" className="mb-auto grid">
          {Object.keys(post).map((i) => (
            <PostInfo postData={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withRouter(Post);
