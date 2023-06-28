import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import { DataContextProvider } from "./DataContext.jsx";

const App = () => {
  axios.defaults.baseURL = "https://dttechserver.onrender.com";
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </DataContextProvider>
  );
};

export default App;
