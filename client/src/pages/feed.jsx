import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { getAllPosts } from "../helpers/api/postOperations";
import PostCard from "../components/PostCard";
import Header from "../components/header/header";
import Footer from "../components/footer";

function Feed() {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);
  //console.log(this.props);
  const getValue = (data) => {
    const newList = listOfPosts.filter((item) => item.uuid !== data);
    setListOfPosts(newList);
  };

  useEffect(() => {
    getAllPosts("").then((response) => {
      console.log(response);
      if (typeof response.error !== "undefined")
        history.push("/login", { error: "Acesso não Autorizado / Expirado" });
      if (response == "TypeError: Failed to fetch")
        history.push("/login", { error: "Servidor Off" });

      setListOfPosts(response);
    }); /**/
  }, []);

  return (
    <div className="bg-gray-200">
      <Header hide={true} />
      <div className="flex flex-col h-screen justify-between">
        <div id="app" className="mb-auto grid">
          {Object.keys(listOfPosts).map((i) => (
            <PostCard postData={listOfPosts[i]} key={i} getValue={getValue} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Feed);
