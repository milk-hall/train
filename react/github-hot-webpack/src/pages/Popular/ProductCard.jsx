import React from 'react';

const ProductCard = (props) => {
  const {
    // name,
    author,
    starCount,
    forkCount,
    isussCount,
    imgSrc,
    orderNumber,
  } = props;
  const commonStyle = {
    fontSize: '22px',
    lineHeight: '22px',
    margin: '5px 0',
  };
  const iconStyle = {
    height: '22px',
    width: '22px',
    textAlign: 'center',
    marginRight: '10px',
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '230px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
        background: '#eee',
        padding: '10px 20px',
        height: '544px',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '230px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px 0',
          background: '#eee',
        }}>
        <h1>
          #
          {orderNumber + 1}
        </h1>
        <img src={imgSrc} alt="" width="200px" height="200px" />
        <h3 style={{ color: '#bd3627', fontSize: '26px' }}>{author}</h3>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <div style={commonStyle}>
            <i
              className="fa fa-user"
              style={{ ...iconStyle, color: '#ffbf74' }} />
            {author}
          </div>
          <div style={commonStyle}>
            <i
              className="fa fa-star"
              style={{ ...iconStyle, color: '#ffd701' }} />
            {starCount}
          </div>
          <div style={commonStyle}>
            <i
              className="fa fa-code-fork"
              style={{ ...iconStyle, color: '#8dc6f3' }} />
            {forkCount}
          </div>
          <div style={commonStyle}>
            <i
              className="fa fa-warning"
              style={{ ...iconStyle, color: '#f18d95' }} />
            {isussCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
