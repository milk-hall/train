import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const BattleResult = () => {
  const { battle } = useParams();
  const [infoArr, setInfoArr] = useState([]);
  useEffect(() => {
    const user1 = battle.split("&battle&")[0];
    const user2 = battle.split("&battle&")[1];
    const p1 = axios
      .get(`https://api.github.com/users/${user1}`)
      .then(({ data }) => data);
    const p2 = axios
      .get(`https://api.github.com/users/${user2}`)
      .then(({ data }) => data);
    Promise.all([p1, p2]).then((res) => setInfoArr(res));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {infoArr.map((item,index) => {
        return <div key={item.login+index}>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
};

export default BattleResult;
