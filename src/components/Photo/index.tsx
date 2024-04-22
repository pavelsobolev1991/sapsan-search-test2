import React, { forwardRef, useState } from 'react';
import { Image } from 'antd';
import './photo.css';

type PhotoProps = {
  src: SearchAPI.Urls;
};

const imageStyles: React.CSSProperties = {
  objectFit: 'cover',
  border: '1px solid #EBEBEB',
  borderRadius: '4px',
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
  { src },
  ref
) => {
  const [isPreviewVisible, setPreviewVisible] = useState<boolean>(false);
  return (
    <div ref={ref} className="photo-wrapper">
      <Image
        loading="eager"
        src={src.regular}
        className="photo"
        preview={previewProperties(isPreviewVisible, setPreviewVisible)}
        style={imageStyles}
      />
    </div>
  );
};

export default forwardRef(Photo);
