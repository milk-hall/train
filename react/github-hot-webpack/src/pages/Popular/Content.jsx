import React from "react";
import ProductCard from "./ProductCard";

const { useState } = require("react");

const Content = (props) => {
  const { data, loading } = props;
  const [allData, setAllData] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 20%",
      }}
    >
      {loading ? (
        <div>
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      ) : (
        data.map((item, index) => {
          const {
            forks,
            name,
            stargazers_count,
            open_issues_count,
            owner: { avatar_url, login },
          } = item;
          return (
            <div key={item.id}>
              <ProductCard
                name={name}
                author={login}
                starCount={stargazers_count}
                forkCount={forks}
                isussCount={open_issues_count}
                imgSrc={avatar_url}
                orderNumber={index}
                loading={loading}
              ></ProductCard>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Content;
