import React from 'react';
import ProductCard from './ProductCard';

const Content = (props) => {
  const { data, loading } = props;
  return (
    <>
      {' '}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 20%',
        }}>
        {data?.map((item, index) => {
          const {
            forks,
            name,
            stargazers_count,
            open_issues_count,
            owner: { avatar_url, login },
          } = item;
          return (
            <div
              key={item.name + item.id + index}>
              <ProductCard
                name={name}
                author={login}
                starCount={stargazers_count}
                forkCount={forks}
                isussCount={open_issues_count}
                imgSrc={avatar_url}
                orderNumber={index}
                loading={loading} />
            </div>
          );
        })}
      </div>
      {' '}
      {loading && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '0 20%',
            margin: '40px',
          }}>
          <i className="fa fa-spinner fa-spin" />
        </div>
      )}
    </>
  );
};

export default Content;
