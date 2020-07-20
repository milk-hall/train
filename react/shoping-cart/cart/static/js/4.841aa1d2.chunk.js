(this["webpackJsonpshoping-cart"]=this["webpackJsonpshoping-cart"]||[]).push([[4],{276:function(e,t,a){"use strict";a.r(t);var n=a(317),c=a(46);t.default={namespace:"cart",state:{carts:null},subscriptions:{},effects:{},reducers:{getData:function(e,t){t.payload;return localStorage.getItem("cart")?{carts:JSON.parse(localStorage.getItem("cart"))}:{carts:null}},add:function(e,t){var a=t.payload,r=e.carts;if(!r&&a){var l=Object(c.a)({},a,{count:1}),i=JSON.stringify([l]);return localStorage.setItem("cart",i),{carts:[l]}}var s=r.findIndex((function(e){return e.id===a.id&&e.size===a.size}));if(-1!==s){var o=Object(n.a)(r);o[s]=Object(c.a)({},o[s],{count:o[s].count+1});var u=JSON.stringify(o);return localStorage.setItem("cart",u),{carts:o}}var d=Object(c.a)({},a,{count:1}),p=JSON.stringify([].concat(Object(n.a)(r),[d]));return localStorage.setItem("cart",p),{carts:[].concat(Object(n.a)(r),[d])}},changeCount:function(e,t){var a=t.payload,r=e.carts,l=a.count,i=a.data,s=r.findIndex((function(e){return e.id===i.id&&e.size===i.size})),o=Object(n.a)(r);o[s]=Object(c.a)({},o[s],{count:l});var u=JSON.stringify(o);return localStorage.setItem("cart",u),{carts:o}},clear:function(e,t){t.payload;return localStorage.setItem("cart",[]),Object(c.a)({},e,{carts:null})}}}},277:function(e,t,a){"use strict";a.r(t);var n=a(340),c=a(341),r=a(391),l=a(396),i=a(1),s=a.n(i),o=a(76),u=a(399),d=a(402),p=a(390),m=a(401),h=a(403),v=a(404),y=a(405),f=a(406),E=(a(342),a(398)),g=a(400),b=Object(o.connect)()((function(e){var t=e.title,a=e.price,n=e.id,c=e.availableSizes,r=e.style,l=e.sku,i=e.dispatch,o=s.a.createElement(E.a,null,c.map((function(e){return s.a.createElement(E.a.Item,{key:e,onClick:function(){return function(e){i({type:"cart/add",payload:{id:n,title:t,price:a,size:e,sku:l,style:r}})}(e)}},s.a.createElement("span",null,e))})));return s.a.createElement("div",{className:"shop-card"},s.a.createElement("img",{src:"/static/products/".concat(l,"_1.jpg"),alt:"",width:"180",height:"240"}),s.a.createElement("h3",{style:{whiteSpace:"nowrap",overflow:"hidden"}},t),s.a.createElement("h4",null,r),s.a.createElement("div",{className:"price"},"$",s.a.createElement("span",{className:"before"},"".concat(a).split(".")[0]),".".concat(a.toFixed(2).split(".")[1])),s.a.createElement(g.a,{overlay:o,placement:"topRight"},s.a.createElement(p.a,{type:"primary",style:{width:"100%"}},"Add to Cart")))})),x=(a(135),a(276),["XS","S","M","ML","L","XL","XXL"]),S=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={visible:!1,active:null},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"shop/getData"}),e({type:"cart/getData"})}},{key:"handleClearCart",value:function(){(0,this.props.dispatch)({type:"cart/clear"}),this.setState({visible:!1})}},{key:"handleChooseSize",value:function(e,t){var a=this.state.active,n=this.props.dispatch;return a===t?(n({type:"shop/getData"}),this.setState({active:null})):(n({type:"shop/filter",payload:e}),this.setState({active:t}))}},{key:"handleChangeCount",value:function(e,t){"number"===typeof e&&(0,this.props.dispatch)({type:"cart/changeCount",payload:{count:e,data:t}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.shop.products,n=t.cart.carts,c=this.state.active,r=this.state.visible;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{closable:!0,maskClosable:!0,mask:!0,visible:r,onClose:function(){e.setState({visible:!1})},width:"375",height:"100%"},s.a.createElement("div",{style:{height:"100px"}},s.a.createElement("h1",null,"\u8d2d\u7269\u8f66")),s.a.createElement("div",{className:"cart-content"},null===n||void 0===n?void 0:n.map((function(t){return s.a.createElement("div",{key:t.id+t.size,className:"cart-item"},s.a.createElement("div",null,s.a.createElement("img",{src:"/static/products/".concat(t.sku,"_1.jpg"),alt:"",height:"80"})),s.a.createElement("div",{className:"description"},s.a.createElement("div",{style:{fontWeight:"bold"}},t.title),s.a.createElement("div",null,t.size," | ",t.style),s.a.createElement("div",{className:"description-number"},s.a.createElement("div",null,"$",t.price.toFixed(2)," "),s.a.createElement(d.a,{value:t.count,onChange:function(a){return e.handleChangeCount(a,t)}}))))}))),s.a.createElement("div",{style:{height:"100px"}},n&&s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h1",null,"\u5171\u8ba1\uff1a$",(null===n||void 0===n?void 0:n.reduce((function(e,t){return e+t.count*t.price}),0).toFixed(2))||0))),s.a.createElement(p.a,{type:"primary",style:{width:"100%",marginTop:"5px"},onClick:this.handleClearCart.bind(this)},"\u7ed3\u8d26"),s.a.createElement(p.a,{type:"primary",danger:!0,style:{width:"100%",marginTop:"5px"},onClick:this.handleClearCart.bind(this)},"\u6e05\u7a7a\u8d2d\u7269\u8f66")))),s.a.createElement(m.a,{justify:"space-between"},s.a.createElement(h.a,{span:12},s.a.createElement(y.a,{style:{fontSize:"48px",margin:"20px"}})),s.a.createElement(h.a,{span:12,style:{textAlign:"right"}},s.a.createElement("div",{style:{padding:"20px",boxSizing:"border-box"}},s.a.createElement(v.a,{count:null===n||void 0===n?void 0:n.reduce((function(e,t){return e+t.count}),0)},s.a.createElement(f.a,{style:{fontSize:"48px",cursor:"pointer"},onClick:function(){e.setState({visible:!0})}}))))),s.a.createElement(m.a,null,s.a.createElement(h.a,{xs:0,lg:4,md:6,xl:6,xxl:6},s.a.createElement("div",{className:"size-map"},s.a.createElement("h2",null,"Size:"),x.map((function(t,a){return s.a.createElement("div",{key:t,className:"size-item ".concat(a===c?"size-item-active":""),onClick:e.handleChooseSize.bind(e,t,a)},t)})))),s.a.createElement(h.a,{xs:24,lg:20,md:18,xl:18,xxl:18},s.a.createElement(m.a,null,a.map((function(e,t){return s.a.createElement(h.a,{xs:24,md:12,lg:12,xl:8,xxl:6,key:t},s.a.createElement(b,e))}))))))}}]),a}(s.a.Component);t.default=Object(o.connect)((function(e){return{shop:e.shop,cart:e.cart}}))(S)},342:function(e,t,a){}}]);
//# sourceMappingURL=4.841aa1d2.chunk.js.map