import React from 'react';
import LazyImg from '../../components/LazyImg';

const ResultCard = ({ userInfo }) => {
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
      <LazyImg src={userInfo.avatar_url} alt="" width="200px" height="200px" />
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
