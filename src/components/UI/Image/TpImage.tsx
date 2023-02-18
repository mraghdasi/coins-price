import Image, { ImageProps } from 'next/image';
import { FC, useEffect, useState } from 'react';

const TpImage: FC<ImageProps> = ({ className, src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt || 'no alt'}
      src={imageSrc}
      className={`hover:scale-125 transition-all duration-700 ${className}`}
      onError={() => {
        setImageSrc('/zarin-express-blog/assets/images/no-image.png');
      }}
      {...props}
    />
  );
};

export default TpImage;
