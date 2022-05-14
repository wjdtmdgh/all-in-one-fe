import React from "react";
import BasicPage from "../components/BasicPage";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import Home from "../components/Home";
import { Layout } from "antd";
function Allcontrol() {
  return (
    <Layout>
      <BasicPage />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default Allcontrol;
