import React from "react";
import BasicPage from "../components/BasicPage";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import Home from "../components/Home";
import Service from "../components/Service";
import { Layout } from "antd";
function Allcontrol() {
  return (
    <Layout>
      <BasicPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Layout>
  );
}

export default Allcontrol;
