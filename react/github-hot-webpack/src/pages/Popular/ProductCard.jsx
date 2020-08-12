import React from 'react';
import LazyImg from '../../components/LazyImg';

const ProductCard = (props) => {
  const {
    name,
    author,
    starCount,
    forkCount,
    isussCount,
    imgSrc,
    orderNumber,
  } = props;

  return (
    <div className="product-card">
      <div className="card-content">
        <h1>
          #
          {orderNumber + 1}
        </h1>
        <LazyImg src={imgSrc} alt="" width="200px" height="200px" />
        <h3 style={{ color: '#bd3627', fontSize: '26px' }}>{author}</h3>
        <div style={{ textAlign: 'left', width: '100%' }}>
          <div className="card-item">
            <i className="fa fa-user card-icon" style={{ color: '#ffbf74' }} />
            {name}
          </div>
          <div className="card-item">
            <i className="fa fa-star card-icon" style={{ color: '#ffd701' }} />
            {starCount}
          </div>
          <div className="card-item">
            <i
              className="fa fa-code-fork card-icon"
              style={{ color: '#8dc6f3' }} />
            {forkCount}
          </div>
          <div className="card-item">
            <i
              className="fa fa-warning card-icon"
              style={{ color: '#f18d95' }} />
            {isussCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
