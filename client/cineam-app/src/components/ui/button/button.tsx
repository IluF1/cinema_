import { MouseEventHandler } from 'react';
import './button.css';

type stylesBtn = 'transparent' | 'default' | 'outline' | 'gray';

interface IButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style: stylesBtn;
  image?: string;
  img: boolean;
  disabled?: boolean;
}

export const Button = ({ children, onClick, style, image, img, disabled }: IButtonProps) => {
  const classNames = ['btn'];
  if (style === 'default') {
    classNames.push('default-btn');
  }
  if (style === 'gray') {
    classNames.push('gray-btn');
  }
  if (style === 'outline') {
    classNames.push('outline-btn');
  }
  if (style === 'transparent') {
    classNames.push('transparent-btn');
  }
  return (
    <button type='submit' onClick={onClick} className={classNames.join(' ')} disabled={disabled}>
      {img ? <img src={image} alt='image' className='image' /> : null}
      {children}
    </button>
  );
};
