import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OutLet } from "./OutLet/OutLet";
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OutLet />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
