import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Select, Row } from 'antd';

const Header = () => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const { search } = useLocation();
  const typeArr = ['All', 'JavaScript', 'Ruby', 'Java', 'Python'];
  const handleClick = (index) => {
    history.push({
      pathname: '/popular',
      search: `language=${typeArr[index]}`,
    });
  };
  useEffect(() => {
    const type = (search.length > 0 && search?.match(/(?<=language=).+/)[0]) || 'All';
    setActive(typeArr.findIndex((item) => item === type));
  }, [search]);
  return (
    <div>
      <Row>
        <Col xs={0} sm={0} md={24}>
          <div style={{ textAlign: 'center' }}>
            {typeArr.map((item, index) => (
              <span
                style={
                  index === active ? { color: '#c04539' } : { color: '#3D4455' }
                }
                onClick={() => handleClick(index)}
                key={item}
                className="type-span">
                {item}
              </span>
            ))}
          </div>
        </Col>
        <Col sm={24} xs={24} md={0}>
          <Select value={active} defaultOpen={0} onChange={handleClick} style={{ marginLeft: '10%' }}>
            {typeArr.map((item, index) => (
              <Select.Option key={`${item}select`} value={index}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
