import React from 'react';
import LazyImg from '../../components/LazyImg';

const ResultCard = ({ userInfo }) => (
  <div
    className="result-card">
    <h3>{userInfo.name || '暂无'}</h3>
    <LazyImg src={userInfo.avatar_url} alt="" width="200px" height="200px" />
    <div>
      score:
      {userInfo.score || 0}
    </div>
    <div style={{ textAlign: 'left', width: '100%' }}>
      <div className="card-item">
        <i
          className="fa fa-user card-icon"
          style={{ color: '#ffbf74' }} />
        {userInfo.name || '暂无'}
      </div>
      <div className="card-item">
        <i
          className="fa fa-star card-icon"
          style={{ color: '#ffd701' }} />
        {userInfo.followers}
      </div>
      <div className="card-item">
        <i
          className="fa fa-code-fork card-icon"
          style={{ color: '#8dc6f3' }} />
        {userInfo.public_repos}
      </div>
      <div className="card-item">
        <i
          className="fa fa-envelope-o card-icon"
          style={{ color: '#f18d95' }} />
        {userInfo.email || '暂无'}
      </div>
    </div>
  </div>
  );
export default ResultCard;
