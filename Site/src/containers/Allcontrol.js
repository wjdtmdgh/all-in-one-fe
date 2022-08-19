import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import Home from "../components/about/Home";
import { Layout } from "antd";
import CodeWithMe from "../components/codewithme/CodeWithMe";
import InCodeWithMe from "../components/codewithme/InCodeWithMe";
import SignUp from "../components/auth/SignUp";
import ArticleList from "../components/board/article/ArticleList";
import ArticleDetail from "../components/board/article/ArticleDetail";
import ArticleRegister from "../components/board/article/ArticleRegister";
function Allcontrol() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<ArticleList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/video" element={<CodeWithMe />} />
        <Route path="/video/incodewithme" element={<InCodeWithMe />} />
        <Route path="/board-in/:articleId" element={<ArticleDetail />} />
        <Route path="/register" element={<ArticleRegister />} />
      </Routes>
    </Layout>
  );
}

export default Allcontrol;
