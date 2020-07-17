import React, { useEffect } from "react";

import { connect } from "dva";
import { Button, Row, Col, Badge, Drawer } from "antd";
import { ShoppingCartOutlined, GithubOutlined } from "@ant-design/icons";
import axios from "axios";
import ShopCard from "../components/ShopCard";

const mapStateToProps = ({ shop, cart }) => {
  return { shop: shop, cart: cart };
};

class ShopCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    const { dispatch, shop } = this.props;
    dispatch({
      type: "shop/getData",
    });
  }
  render() {
    const {
      shop: { products },
    } = this.props;
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
          width='400'
        >
          123
        </Drawer>
        <Row justify="space-between">
          <Col span={12}>
            <GithubOutlined style={{ fontSize: "48px", margin: "20px" }} />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <Badge count={products.length}>
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
            col-4
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
