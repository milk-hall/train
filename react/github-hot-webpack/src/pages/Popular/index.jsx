import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Header from "./Header";
import Content from "./Content";

const GitHubHot = () => {
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1${
          type !== "all" ? `+language:${type}` : ""
        }&sort=stars&order=desc&type=Repositories`
      )
      .then(function ({ data }) {
        setData(data.items);
        setLoading(false);
      })
      .catch(function (error) {
        alert("请求出错了！", error);
        setData([]);
        setLoading(false);
      });
  }, [type]);
  return (
    <Layout>
      <Header setType={setType}></Header>
      <Content data={data} loading={loading}></Content>
    </Layout>
  );
};

export default GitHubHot;
