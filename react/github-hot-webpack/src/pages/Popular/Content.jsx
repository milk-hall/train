import React from 'react';
import { Row, Col } from 'antd';
import ProductCard from './ProductCard';

const Content = (props) => {
  const { data, loading } = props;
  return (
    <div
      style={{
        padding: '0 15%',
      }}>
      <Row justify="space-around" Row gutter={[8, 8]}>
        {data?.map((item, index) => {
          const {
            forks,
            name,
            stargazers_count,
            open_issues_count,
            owner: { avatar_url, login },
          } = item;
          return (
            <Col
              key={item.name + item.id + index}
              xs={24}
              sm={24}
              md={12}
              lg={10}
              xl={7}
              xxl={6}>
              <ProductCard
                name={name}
                author={login}
                starCount={stargazers_count}
                forkCount={forks}
                isussCount={open_issues_count}
                imgSrc={avatar_url}
                orderNumber={index}
                loading={loading} />
            </Col>
          );
        })}
      </Row>
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
    </div>
  );
};

export default Content;
