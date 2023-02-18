import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import style from './button.module.scss';
import GtSpinner from '../Spinner/TpSpinner';

interface ITpButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
  buttonType?: 'primary' | 'transparent';
  buttonSize?: 'normal' | 'small';
  width?: 'full';
  buttonFormWrapper?: boolean;
}

const TpButton: FC<ITpButton> = ({ children, buttonFormWrapper, buttonType = 'primary', buttonSize = 'normal', className = '', width = '', isLoading = false, ...props }) => {
  return (
    <button
      className={twMerge(
        `text-center justify-center ${style.btn} ${buttonFormWrapper ? 'mt-4' : ''} ${style[`btn--${buttonType}`]} ${style[`btn--${buttonSize}`]} ${
          width === 'full' ? 'w-full' : ''
        } ${className}`
      )}
      {...props}>
      {isLoading ? <GtSpinner /> : children}
    </button>
  );
};

export default TpButton;
