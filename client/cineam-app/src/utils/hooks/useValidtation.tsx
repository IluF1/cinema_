import { ChangeEvent, useState } from 'react';

export const useValidation = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [disable, setDisable] = useState(true)

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (newEmail.length <= 0) {
      setEmailError('Поле не должно быть пустым');
      setDisable(true)
    } else {
      const regular =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regular.test(newEmail.toLowerCase())) {
        setEmailError('Невалидный email');
        setDisable(true)
      } else {
        setEmailError('');
        setDisable(false)
      }
    }
  };

  return {
    emailError,
    onEmailChange,
    email,
    disable
  };
};
