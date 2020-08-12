import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

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
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          margin: '20px 0',
          overflowWrap: 'break-word',
        }}>
        {typeArr.map((item, index) => (
          <span
            style={index === active ? { color: '#c04539' } : { color: '#3D4455' }}
            onClick={() => handleClick(index)}
            key={item}
            className="type-span">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
