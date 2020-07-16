import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const Header = () => {
  const [pages, setPages] = useState(["battle", "popular"]);
  const { path } = useRouteMatch();
  const [active, setActive] = useState(0);
  const history = useHistory();
  const handleClick = (name, index) => {
    if (path.includes(name)) return;
    setActive(index);
    history.push(`/${name}`);
  };
  useEffect(() => {
    setActive(pages.indexOf(path.replace("/", "")));
  }, [path]);
  return (
    <div>
      <div style={{ height: "60px", paddingLeft: "100px" }}>
        {pages.map((item, index) => {
          return (
            <span
              key={item}
              style={{
                fontSize: "24px",
                margin: "20px",
                lineHeight: "60px",
                cursor: "pointer",
                ...(active === index
                  ? { color: "#c04539" }
                  : { color: "#3D4455" }),
              }}
              onClick={() => handleClick(item, index)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
