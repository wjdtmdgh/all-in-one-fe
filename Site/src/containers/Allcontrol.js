import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import Home from "../components/about/Home";
import { Layout } from "antd";
import VideoChatHome from "../components/videochat/VideoChatHome";
import InCodeWithMe from "../components/utils/InCodeWithMe";
import SignUp from "../components/auth/SignUp";
import ArticleList from "../components/board/article/ArticleList";
import ArticleDetail from "../components/board/article/ArticleDetail";
import ArticleRegister from "../components/board/article/ArticleRegister";
import ArticleModify from "../components/board/article/ArticleModify";
import VideoChatDetail from "../components/videochat/VideoChatDetail";
function Allcontrol() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/board" element={<ArticleList />} />
        <Route path="/board/new" element={<ArticleRegister />} />
        <Route path="/board/:articleId" element={<ArticleDetail />} />
        <Route path="/board/:articleId/modify" element={<ArticleModify />} />
        <Route path="/video" element={<VideoChatHome />} />
        <Route path="/video/room/:roomId" element={<VideoChatDetail />} />
      </Routes>
    </Layout>
  );
}

export default Allcontrol;
