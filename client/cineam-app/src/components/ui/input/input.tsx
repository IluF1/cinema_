import { ChangeEventHandler } from 'react';
import styles from './input.module.css';

type types = 'email' | 'password' | 'text';

interface IInputProps {
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  type: types;
}

export const Input = ({ placeholder, onChange, value, type }: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};
