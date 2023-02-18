import TpImage from '../Image/TpImage';
import { FC } from 'react';

interface ITpEmpty {
  className?: string;
  width?: number;
  height?: number;
  text?: string;
}

const TpEmpty: FC<ITpEmpty> = ({ className, width = 100, height = 100, text = '', ...props }) => {
  return (
    <div className={`my-5 ${className}`} {...props}>
      <div className='flex items-center justify-center'>
        <TpImage alt='empty icon' width={width} height={height} src={'/coins-price/assets/images/noData.svg'} />
      </div>
      {text && <p className='my-2 text-center'>{text}</p>}
    </div>
  );
};

export default TpEmpty;
