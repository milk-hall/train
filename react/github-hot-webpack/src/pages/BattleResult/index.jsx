import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const BattleResult = () => {
  const { battle } = useParams();
  const [infoArr, setInfoArr] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const user1 = battle.split('&battle&')[0];
    const user2 = battle.split('&battle&')[1];
    const p1 = axios
      .get(`https://api.github.com/users/${user1}`)
      .then(({ data }) => data);
    const p2 = axios
      .get(`https://api.github.com/users/${user2}`)
      .then(({ data }) => data);
    Promise.all([p1, p2]).then((res) => setInfoArr(res));
  }, []);
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
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
      {infoArr.map((item, index) => (
        <div
          key={item.login + index}
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
          <h3>{item.name}</h3>
          <img src={item.avatar_url} alt="" width="200px" height="200px" />
          <div>
            score:
            {item.score || 0}
          </div>
          <div style={{ textAlign: 'left', width: '100%' }}>
            <div style={commonStyle}>
              <i
                className="fa fa-user"
                style={{ ...iconStyle, color: '#ffbf74' }} />
              {item.name}
            </div>
            <div style={commonStyle}>
              <i
                className="fa fa-star"
                style={{ ...iconStyle, color: '#ffd701' }} />
              {item.followers}
            </div>
            <div style={commonStyle}>
              <i
                className="fa fa-code-fork"
                style={{ ...iconStyle, color: '#8dc6f3' }} />
              {item.public_repos}
            </div>
            <div style={commonStyle}>
              <i
                className="fa fa-envelope-o"
                style={{ ...iconStyle, color: '#f18d95' }} />
              {item.email}
            </div>
          </div>
        </div>
        ))}
      {infoArr.length && (
        <div
          style={{
            width: '100%',
            textAlign: 'center',
          }}>
          <button
            style={{ width: '120px', height: '36px' }}
            onClick={() => {
              history.goBack();
            }}>
            reset
          </button>
        </div>
      )}
    </div>
  );
};

export default BattleResult;
