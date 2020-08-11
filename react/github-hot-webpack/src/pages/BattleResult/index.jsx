import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import request from '@/utils/request';
import ResultCard from './ResultCard';

const BattleResult = () => {
  const battle = useLocation();
  const [infoArr, setInfoArr] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setTimeout(async () => {
      const arrArrReg = /[^?].+/;
      const userReg = /(?<==).+/;
      const userArr = battle.search.match(arrArrReg)[0].split('&');
      const user1 = userArr[0].match(userReg)[0];
      const user2 = userArr[1].match(userReg)[0];
      const p1 = await request.get(`https://api.github.com/users/${user1}`);
      const p2 = await request.get(`https://api.github.com/users/${user2}`);
      setInfoArr([p1, p2]);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
      {infoArr.map((item, index) => (
        <ResultCard key={item.login + index} userInfo={item} />
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
