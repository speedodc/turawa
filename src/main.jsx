import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./pages/blog";
import WhatWeDo from "./pages/whatwedo";
import OwuWaterfall from "./blogs/owu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/owu" element={<OwuWaterfall />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
