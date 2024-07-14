import { ChangeEventHandler, useEffect } from 'react';
import './input.css';

type types = 'email' | 'password' | 'text';

interface IInputProps {
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  type: types;
  error?: boolean;
}

export const Input = ({ placeholder, onChange, value, type, error }: IInputProps) => {
  const classNames = ['input'];

  if (error) {
    classNames.push('error_input');
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames.join(' ')}
    />
  );
};
