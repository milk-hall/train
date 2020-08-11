import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import request from '@/utils/request';
import LazyImg from '../../components/LazyImg';

const Battle = () => {
  const [userInfo1, setUserInfo1] = useState({});
  const [userInfo2, setUserInfo2] = useState({});
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const history = useHistory();
  const arr = [
    {
      name: 'Enter two Github users',
      className: 'fa fa-users',
      style: { color: '#ffbf74', fontSize: '128px' },
    },
    {
      name: 'Battle',
      className: 'fa fa-plane',
      style: { color: '#727272', fontSize: '128px' },
    },
    {
      name: 'See the winner',
      className: 'fa fa-trophy',
      style: { color: '#ffd701', fontSize: '128px' },
    },
  ];
  const inputStyle = {
    height: '30px',
    width: '220px',
  };
  const submitStyle = {
    width: '120px',
    height: '36px',
  };

  const handleSubmit = async (index) => {
    const data = await request.get(
      `https://api.github.com/users/${index === 1 ? input1 : input2}`,
    );
    index === 1 ? setUserInfo1(data) : setUserInfo2(data);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Instructions</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {arr.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <div
              style={{
                margin: '20px',
                padding: '20px',
                background: '#ebebeb',
                width: '180px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <i className={item.className} style={item.style} />
            </div>
          </div>
        ))}
      </div>
      <h2>Players</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {userInfo1.avatar_url ? (
          <div
            style={{
              width: '348px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              background: '#DDDDDD',
              padding: '20px',
            }}>
            <LazyImg
              src={userInfo1.avatar_url}
              alt="user1"
              style={{
                width: '50px',
                height: '50px',
              }} />
            <span style={{ margin: '0 40px' }}>{userInfo1.login}</span>
            <i
              className="fa fa-close"
              style={{ fontSize: '24px', cursor: 'pointer' }}
              onClick={() => setUserInfo1({})} />
          </div>
        ) : (
          <div>
            <input
              type="text"
              style={inputStyle}
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode !== 13) return;
                handleSubmit(1);
              }} />
            <button
              style={submitStyle}
              disabled={!input1}
              onClick={() => handleSubmit(1)}
              onSubmit={() => handleSubmit(1)}>
              submit
            </button>
          </div>
        )}
        {userInfo2.avatar_url ? (
          <div
            style={{
              width: '348px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              background: '#DDDDDD',
              padding: '20px',
              marginLeft: '200px',
            }}>
            <LazyImg
              src={userInfo2.avatar_url}
              alt="user2"
              style={{
                width: '50px',
                height: '50px',
              }} />
            <span style={{ margin: '0 40px' }}>{userInfo2.login}</span>
            <i
              className="fa fa-close"
              style={{ fontSize: '24px', cursor: 'pointer' }}
              onClick={() => setUserInfo2({})} />
          </div>
        ) : (
          <div style={{ marginLeft: '200px' }}>
            <input
              type="text"
              style={inputStyle}
              value={input2}
              onChange={(e) => setInput2(e.target.value)} />
            <button
              style={submitStyle}
              disabled={!input2}
              onClick={() => handleSubmit(2)}>
              submit
            </button>
          </div>
        )}
      </div>
      {userInfo1.avatar_url && userInfo2.avatar_url && (
        <button
          style={{ ...submitStyle, marginTop: '50px' }}
          onClick={() => {
            history.push({
              pathname: '/battle/result',
              search: `?user1=${userInfo1.login}&user2=${userInfo2.login}`,
            });
          }}>
          BATTLE
        </button>
      )}
    </div>
  );
};

export default Battle;
