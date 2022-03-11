import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AlbumsByYearPage } from "./pages/AlbumsByYearPage";
import { HomePage } from "./pages/HomePage";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<AlbumsByYearPage />} />
      </Routes>
    </Router>
  );
};
