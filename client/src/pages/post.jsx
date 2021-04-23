import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { callAlert } from "../helpers/callAlert";
import PostCard from "../components/PostCard";
import MenuDrop from "../components/MenuDrop";

function Post({ data }) {
  let history = useHistory();
  console.log(data);
  return tete;
}

export default withRouter(Post);
