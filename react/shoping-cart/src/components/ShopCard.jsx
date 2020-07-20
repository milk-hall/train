import React from "react";
import "./ShopCard.less";
import { Button, Menu, Dropdown } from "antd";
import { connect } from "dva";

const ShopCard = (props) => {
  const { title, price, id, availableSizes, style, sku, dispatch } = props;
  const handleAddToCart = (size) => {
    dispatch({
      type: "cart/add",
      payload: { id, title, price, size, sku, style },
    });
  };
  const menu = (
    <Menu>
      {availableSizes.map((item) => (
        <Menu.Item key={item} onClick={() => handleAddToCart(item)}>
          <span>{item}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="shop-card">
      <img
        src={`./static/products/${sku}_1.jpg`}
        alt=""
        width="180"
        height="240"
      />
      <h3
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {title}
      </h3>
      <h4>{style}</h4>
      <div className="price">
        $<span className="before">{`${price}`.split(".")[0]}</span>
        {`.${price.toFixed(2).split(".")[1]}`}
      </div>
      <Dropdown overlay={menu} placement="topRight">
        <Button type="primary" style={{ width: "100%" }}>
          Add to Cart
        </Button>
      </Dropdown>
    </div>
  );
};

export default connect()(ShopCard);
