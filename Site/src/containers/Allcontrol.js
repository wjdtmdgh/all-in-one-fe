import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import Home from "../components/about/Home";
import { Layout } from "antd";
import CodeWithMe from "../components/codewithme/CodeWithMe";
import InCodeWithMe from "../components/codewithme/InCodeWithMe";
import SignUp from "../components/auth/SignUp";
import BulletinBoard from "../components/board/BulletinBoard";
import BulletinBoardIn from "../components/board/BulletinBoardIn";
import BoardRegister from "../components/board/BoardRegister";
function Allcontrol() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BulletinBoard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/video" element={<CodeWithMe />} />
        <Route path="/video/incodewithme" element={<InCodeWithMe />} />
        <Route path="/board-in/:articleId" element={<BulletinBoardIn />} />
        <Route path="/register" element={<BoardRegister />} />
      </Routes>
    </Layout>
  );
}

export default Allcontrol;
