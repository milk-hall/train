import React, { useEffect, useState } from 'react';

const LazyImg = ({ src, style, width, height, defaultSrc }) => {
  const [lazySrc, setLazySrc] = useState(
    defaultSrc
      || 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597134834153&di=f203e44246b76ccc349bf908593db36c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Da9714efaaf86c91708035231f93c70c6%2Fddd3ab59d109b3dea0394e6ac4bf6c81810a4c48.jpg',
  );
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', () => {
      setLazySrc(src);
    });
  }, []);
  return (
    <img src={lazySrc} alt="" width={width} height={height} style={style} />
  );
};

export default LazyImg;
