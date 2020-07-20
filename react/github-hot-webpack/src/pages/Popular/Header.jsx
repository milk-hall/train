import React, { useState } from 'react';

const Header = (props) => {
  const { setType } = props;
  const [active, setActive] = useState(0);
  const [typeArr, setTypeArr] = useState([
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'Python',
  ]);
  const activeStyle = {
    color: '#c04539',
    margin: '0 10px',
    fontSize: '24px',
    cursor: 'pointer',
  };
  const commonStyle = {
    margin: '0 10px',
    fontSize: '24px',
    cursor: 'pointer',
  };
  const handleClick = (index) => {
    setActive(index);
    setType(typeArr[index]);
  };
  return (
    <div>
      <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}>
        {typeArr.map((item, index) => (
          <span
            style={index === active ? activeStyle : commonStyle}
            onClick={() => handleClick(index)}
            key={item}>
            {item}
          </span>
          ))}
      </div>
    </div>
  );
};

export default Header;
