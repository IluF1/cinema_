import { ChangeEvent, useEffect, useState } from 'react';

export const useValidation = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [disable, setDisable] = useState<boolean>(true);

  const [codeError, setCodeError] = useState<string>('');

  useEffect(() => {
    if (emailError || email.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [emailError, codeError, email]);

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail.length <= 0) {
      setEmailError('');
      setDisable(true);
    } else {
      const regular =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regular.test(newEmail.toLowerCase())) {
        setEmailError('Невалидный email');
        setDisable(true);
      } else {
        setEmailError('');
        setDisable(false);
      }
    }
  };

  return {
    emailError,
    onEmailChange,
    email,

    disable,
  };
};
