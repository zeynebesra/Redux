import React from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { contactSelectors } from "../redux/contactSlice";
import EditForm from "./EditForm";
function Edit() {
  const { id } = useParams();
  console.log(id);
  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );
  if (!contact) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
