import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import { getApi } from "../helpers/apiCalls";
import PostCard from "../components/PostCard";
import MenuDrop from "../components/MenuDrop";
import Header from "../components/header";
import Footer from "../components/footer";

function Feed({ data }) {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);
  //console.log(data);
  var numbers = [1, 2, 3, 4, 5];

  useEffect(() => {
    getApi("").then((response) => {
      console.log(response);
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
