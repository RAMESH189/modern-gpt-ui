import React from "react";
import "./app.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatsGPT3,
  Header,
} from "./containers";
import { Cta, NavBar, Brand } from "./components";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatsGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}
