import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Content from './Content';

const GitHubHot = () => {
  const [type, setType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  window.addEventListener('scroll', () => {
    const height = document.documentElement.clientHeight;
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
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
          type !== 'all' ? `+language:${type}` : ''
        }&sort=stars&order=desc&type=Repositories`,
      )
      .then(({ data: res }) => {
        setData(res.items);
        setLoading(false);
        setPage(page + 1);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert('请求出错了！', error);
        setData([]);
        setLoading(false);
      });
  }, [type]);

  useEffect(() => {
    if (loading && data.length > 0) {
      axios
        .get(
          `https://api.github.com/search/repositories?q=stars:%3E1${
            type !== 'all' ? `+language:${type}` : ''
          }&sort=stars&order=desc&type=Repositories&page=${page}`,
        )
        .then(({ data: res }) => {
          setData([...data, ...res.items]);
          setLoading(false);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert('请求出错了！', error);
          setData([]);
          setLoading(false);
        });
    }
  }, [loading]);

  return (
    <div>
      <Header setType={setType} />
      <Content data={data} loading={loading} />
    </div>
  );
};

export default GitHubHot;
