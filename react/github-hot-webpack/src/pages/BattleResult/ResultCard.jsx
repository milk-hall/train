import React, { useState, useEffect } from 'react';

const ResultCard = ({ userInfo }) => {
  const [lazySrc, setLazySrc] = useState(
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597134834153&di=f203e44246b76ccc349bf908593db36c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Da9714efaaf86c91708035231f93c70c6%2Fddd3ab59d109b3dea0394e6ac4bf6c81810a4c48.jpg',
  );
  console.log(userInfo);

  const commonStyle = {
    fontSize: '22px',
    lineHeight: '22px',
    margin: '5px 0',
  };
  const iconStyle = {
    height: '22px',
    width: '22px',
    textAlign: 'center',
    marginRight: '10px',
  };
  
  useEffect(() => {
    const img = new Image();
    img.src = userInfo.avatar_url;
    img.addEventListener('load', () => {
      setLazySrc(userInfo.avatar_url);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '230px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px',
        background: '#eee',
        padding: '10px',
      }}>
      <h3>{userInfo.name}</h3>
      <img src={lazySrc} alt="" width="200px" height="200px" />
      <div>
        score:
        {userInfo.score || 0}
      </div>
      <div style={{ textAlign: 'left', width: '100%' }}>
        <div style={commonStyle}>
          <i
            className="fa fa-user"
            style={{ ...iconStyle, color: '#ffbf74' }} />
          {userInfo.name}
        </div>
        <div style={commonStyle}>
          <i
            className="fa fa-star"
            style={{ ...iconStyle, color: '#ffd701' }} />
          {userInfo.followers}
        </div>
        <div style={commonStyle}>
          <i
            className="fa fa-code-fork"
            style={{ ...iconStyle, color: '#8dc6f3' }} />
          {userInfo.public_repos}
        </div>
        <div style={commonStyle}>
          <i
            className="fa fa-envelope-o"
            style={{ ...iconStyle, color: '#f18d95' }} />
          {userInfo.email}
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
