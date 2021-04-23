import React from "react";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import { getPost } from "../helpers/getPost";
import PostInfo from "../components/Post";

function Post({ data }) {
  let history = useHistory();
  console.log(data);
  return <PostInfo postData={""} />;
}

export default withRouter(Post);
