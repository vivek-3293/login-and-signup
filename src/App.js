import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./form/Login";
import Signup from "./form/Signup";
import Header from "./header";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
