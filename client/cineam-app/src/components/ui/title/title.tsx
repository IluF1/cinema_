import { DetailedHTMLProps, ReactElement, ReactNode } from 'react';
import './title.css';

type titleStyles = 'big' | 'small' | 'blue';

interface ITitleProps {
  children: any;
  style: string;
}

export const Title = ({ children, style }: ITitleProps) => {
  const classNames = ['title'];
  if (style === 'big') {
    classNames.push('big-title');
  }
  if (style === 'small') {
    classNames.push('small-title');
  }
  if(style === 'blue') {
    classNames.push('blue-title')
  }
  return <p className={classNames.join(' ')}>{children}</p>;
};
