import React, { useEffect } from "react";

import { connect } from "dva";
import { Button, Row, Col, Badge, Drawer, InputNumber } from "antd";
import { ShoppingCartOutlined, GithubOutlined } from "@ant-design/icons";
import ShopCard from "../components/ShopCard";
import "../index.css";
import cart from "../models/cart";

const mapStateToProps = ({ shop, cart }) => {
  return { shop: shop, cart: cart };
};
const size = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      active: null,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "shop/getData",
    });
    dispatch({
      type: "cart/getData",
    });
  }
  handleClearCart() {
    const { dispatch } = this.props;
    dispatch({
      type: "cart/clear",
    });
    this.setState({ visible: false });
  }
  handleChooseSize(size, index) {
    const { active } = this.state;
    const { dispatch } = this.props;
    if (active === index) {
      dispatch({
        type: "shop/getData",
      });
      return this.setState({ active: null });
    } else {
      dispatch({
        type: "shop/filter",
        payload: size,
      });
      return this.setState({ active: index });
    }
  }
  handleChangeCount(value, item) {
    if (typeof value !== "number") return;
    const { dispatch } = this.props;
    dispatch({
      type: "cart/changeCount",
      payload: { count: value, data: item },
    });
  }
  render() {
    const {
      shop: { products },
      cart: { carts },
    } = this.props;
    const { active } = this.state;
    const { visible } = this.state;
    return (
      <>
        <Drawer
          closable
          maskClosable
          mask
          visible={visible}
          onClose={() => {
            this.setState({ visible: false });
          }}
          width="375"
          height="100%"
        >
          <div style={{ height: "100px" }}>
            <h1>购物车</h1>
          </div>
          <div className="cart-content">
            {carts?.map((item) => {
              return (
                <div key={item.id + item.size} className="cart-item">
                  <div>
                    <img
                      src={`./static/products/${item.sku}_1.jpg`}
                      alt=""
                      height="80"
                    ></img>
                  </div>
                  <div className="description">
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div>
                      {item.size} | {item.style}
                    </div>
                    <div className="description-number">
                      <div>${item.price.toFixed(2)} </div>
                      <InputNumber
                        value={item.count}
                        onChange={(value) =>
                          this.handleChangeCount(value, item)
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ height: "100px" }}>
            {carts?.length>0 && (
              <div>
                <div>
                  <div>
                    <h1>
                      共计：$
                      {carts
                        ?.reduce(
                          (init, item) => init + item.count * item.price,
                          0
                        )
                        .toFixed(2) || 0}
                    </h1>
                  </div>
                </div>
                <Button
                  type="primary"
                  style={{ width: "100%", marginTop: "5px" }}
                  onClick={this.handleClearCart.bind(this)}
                >
                  结账
                </Button>
                <Button
                  type="primary"
                  danger
                  style={{ width: "100%", marginTop: "5px" }}
                  onClick={this.handleClearCart.bind(this)}
                >
                  清空购物车
                </Button>
              </div>
            )}
          </div>
        </Drawer>
        <Row justify="space-between">
          <Col span={12}>
            <GithubOutlined style={{ fontSize: "48px", margin: "20px" }} />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <Badge
                count={carts?.reduce((init, item) => {
                  return init + item.count;
                }, 0)}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "48px", cursor: "pointer" }}
                  onClick={() => {
                    this.setState({ visible: true });
                  }}
                />
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={0} lg={4} md={6} xl={6} xxl={6}>
            <div className="size-map">
              <h2>Size:</h2>
              {size.map((item, index) => {
                return (
                  <div
                    key={item}
                    className={`size-item ${
                      index === active ? "size-item-active" : ""
                    }`}
                    onClick={this.handleChooseSize.bind(this, item, index)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={24} lg={20} md={18} xl={18} xxl={18}>
            <Row>
              {products.map((item, index) => {
                return (
                  <Col xs={24} md={12} lg={12} xl={8} xxl={6} key={index}>
                    <ShopCard {...item}></ShopCard>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(mapStateToProps)(ShopCart);
