import { forwardRef, HTMLProps, ReactNode } from 'react';
import style from './input.module.scss';

interface IZpInput extends HTMLProps<HTMLInputElement> {
  className?: string;
  errorText?: string;
  prefixContent?: ReactNode;
  suffixContent?: ReactNode;
}

const TpInput = forwardRef<HTMLInputElement, IZpInput>(({ errorText, className, prefixContent, suffixContent, ...props }, ref) => {
  return (
    <div className='relative'>
      {!!prefixContent && <span className={`absolute top-2 ${prefixContent ? 'right-4' : ''}`}>{prefixContent}</span>}
      {!!suffixContent && <span className={`absolute top-2 ${suffixContent ? 'left-4' : ''} `}>{suffixContent}</span>}
      <input ref={ref} className={`${style['zp-input']}  ${prefixContent ? 'pr-10' : ''} ${errorText ? style['zp-input__error'] : ''} ${className}`} {...props} />
      {errorText && <div className={`${style['zp-input__text']} ${style['zp-input__text--error']}`}>{errorText}</div>}
    </div>
  );
});

TpInput.displayName = 'TpInput';

export default TpInput;
