import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const [pages] = useState(['popular', 'battle']);
  const [active, setActive] = useState(0);
  const history = useHistory();
  const { pathname } = useLocation();
  const handleClick = (name, index) => {
    if (pathname.includes(name)) return;
    setActive(index);
    history.push(`/${name}`);
  };
  useEffect(() => {
    setActive(pages.indexOf(pathname.replace('/', '')) !== -1 ? 0 : 1);
  }, [pathname]);
  return (
    <div>
      <div style={{ height: '60px', paddingLeft: '100px' }}>
        {pages.map((item, index) => (
          <span
            key={item}
            style={{
                fontSize: '24px',
                margin: '20px',
                lineHeight: '60px',
                cursor: 'pointer',
                ...(active === index
                  ? { color: '#c04539' }
                  : { color: '#3D4455' }),
              }}
            onClick={() => handleClick(item, index)}>
            {item}
          </span>
          ))}
      </div>
    </div>
  );
};
export default Header;
