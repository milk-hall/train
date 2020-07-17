import React from "react";
import "./ShopCard.less";
import { Button } from "antd";



const ShopCard = (props) => {
  const {
    title,
    isFreeShipping,
    price,
    installments,
    availableSizes,
    style,
    sku,
  } = props;
  return (
    <div className="shop-card">
      <img
        src={`/static/products/${sku}_1.jpg`}
        alt=""
        width="180"
        height="240"
      />
      <div>{title}</div>
      <div className="price">
        $<span className='before'>{`${price}`.split(".")[0]}</span>
        {`${price}`.split(".")[1]?('.'+`${price}`.split(".")[1]):'.00'}
      </div>
      <Button type="primary" style={{width:'100%'}}>Add to Cart</Button>
    </div>
  );
};

export default ShopCard;
