import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import { getApi } from "../helpers/apiCalls";
import PostCard from "../components/PostCard";
import Header from "../components/header";
import Footer from "../components/footer";

function Feed({ data }) {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    getApi("").then((response) => {
      console.log(response);
      if (typeof response.error !== "undefined")
        history.push("/login", { error: "Acesso não Autorizado" });
      setListOfPosts(response);
    });
  }, []);

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="flex flex-col h-screen justify-between">
        <div id="app" className="mb-auto grid">
          {Object.keys(listOfPosts).map((i) => (
            <PostCard postData={listOfPosts[i]} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Feed);
