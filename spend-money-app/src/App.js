import "./App.css";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Receipt from "./components/Receipt";
import Footer from "./components/Footer";
//react-router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container maxW="container.xl" className="app">
      <Navbar />
      <Products />
      <Receipt />
      <Footer />
    </Container>
  );
}

export default App;
