import React, { forwardRef, useState } from 'react';
import { Card, Image } from 'antd';
import './photo.css';

type PhotoProps = {
  src: SearchAPI.Urls;
  photoKey: string;
};

const imageStyles: React.CSSProperties = {
  objectFit: 'cover',
  border: '1px solid #EBEBEB',
  borderRadius: '4px',
  height: '100%',
  cursor: 'pointer',
};

const previewProperties = (
  isPreviewVisible: boolean,
  setPreviewVisible: (visible: boolean) => void
) => {
  return {
    mask: false,
    visible: isPreviewVisible,
    onVisibleChange: setPreviewVisible,
    toolbarRender: () => false,
  };
};

const Photo: React.ForwardRefRenderFunction<HTMLImageElement, PhotoProps> = (
  { src, photoKey },
  ref
) => {
  const [isPreviewVisible, setPreviewVisible] = useState<boolean>(false);
  return (
    <div ref={ref} key={photoKey} className="photo-wrapper">
      {/* <Card> */}
        <Image
          loading="eager"
          src={src.regular}
          className="photo"
          preview={previewProperties(isPreviewVisible, setPreviewVisible)}
          style={imageStyles}
        />
      {/* </Card> */}
    </div>
  );
};

export default forwardRef(Photo);
