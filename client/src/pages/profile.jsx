import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { getAllPosts } from "../helpers/api/postOperations";
import Card from "../components/Card";
import Header from "../components/header/header";
import Footer from "../components/footer";

function Profile() {
  let history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);
  //console.log(this.props);
  const getValue = (data) => {
    const newList = listOfPosts.filter((item) => item.uuid !== data);
    setListOfPosts(newList);
  };

  useEffect(() => {
    getAllPosts("").then((response) => {
      if (typeof response.error !== "undefined")
        history.push("/login", { error: "Acesso não Autorizado / Expirado" });
      if (response == "TypeError: Failed to fetch")
        history.push("/login", { error: "Servidor Off" });

      setListOfPosts(response);
    });
  }, []);
  return (
    <div className="bg-gray-200">
      <Header createPost={false} />
      <div className="flex flex-col h-screen justify-between">
        <div id="app" className="mb-auto grid">
          {<Card />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Profile);
