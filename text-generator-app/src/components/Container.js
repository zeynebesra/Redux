import React from "react";
import "../style.css";
import { Form } from "./Form";
import { Header } from "./Header";

function Container() {
  return (
    <div className="container">
      <Header />
      <Form />
    </div>
  );
}

export default Container;
