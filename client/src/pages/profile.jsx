import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { getProfileInfo } from "../helpers/api/profileOperations";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/header/header";
import Footer from "../components/footer";

function Profile({ data }) {
  let { email } = useParams();
  let history = useHistory();
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getProfileInfo({ email: email }).then((response) => {
      if (typeof response.error !== "undefined")
        history.push("/login", { error: "Unauthorized access / Expirado" });
      if (response == "TypeError: Failed to fetch")
        history.push("/login", { error: "Servidor Off" });
      setProfileData(response);
    });
  }, []);
  return (
    <div className="bg-gray-200">
      <Header createPost={false} />
      <div className="flex flex-col h-screen justify-between">
        <div id="app" className="mb-auto grid">
          {<ProfileCard profileData={profileData} />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Profile);
