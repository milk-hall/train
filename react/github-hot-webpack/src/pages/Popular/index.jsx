import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";

const GitHubHot = () => {
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  window.addEventListener("scroll", () => {
    const height = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop + height >= scrollHeight - 5 && !loading) {
      setLoading(true);
      setPage(page + 1);
    }
  });

  useEffect(() => {
    setPage(1);
    setLoading(true);
    setData([]);
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1${
          type !== "all" ? `+language:${type}` : ""
        }&sort=stars&order=desc&type=Repositories`
      )
      .then(function ({ data: res }) {
        setData(res.items);
        setLoading(false);
        setPage(page + 1);
      })
      .catch(function (error) {
        alert("请求出错了！", error);
        setData([]);
        setLoading(false);
      });
  }, [type]);

  useEffect(() => {
    if (loading && data.length > 0) {
      axios
        .get(
          `https://api.github.com/search/repositories?q=stars:%3E1${
            type !== "all" ? `+language:${type}` : ""
          }&sort=stars&order=desc&type=Repositories&page=${page}`
        )
        .then(function ({ data: res }) {
          setData([...data, ...res.items]);
          setLoading(false);
        })
        .catch(function (error) {
          alert("请求出错了！", error);
          setData([]);
          setLoading(false);
        });
    }
  }, [loading]);

  return (
    <div>
      <Header setType={setType}></Header>
      <Content data={data} loading={loading}></Content>
    </div>
  );
};

export default GitHubHot;
