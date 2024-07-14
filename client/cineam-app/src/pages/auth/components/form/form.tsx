import { Input } from '@/components/ui/input/input';
import { Title } from '@/components/ui/title/title';
import styles from './form.module.css';
import { Button } from '@/components/ui/button/button';
import { ChangeEvent, useState } from 'react';
import { useTimer } from '@/utils/hooks/useTimer';
import { useAuthStore } from '@/utils/store/useAuthStore';
import { useValidation } from '@/utils/hooks/useValidtation';

export const Form = () => {
  const [active, setActive] = useState<boolean>(false);
  const { timer, end } = useTimer(60, active);
  const { setAuth } = useAuthStore();
  const { onEmailChange, emailError, email, disable } = useValidation();
  return (
    <div>
      <Title style='big'>Авторизация</Title>
      <div className={styles.description_block}>
        {active ? (
          <Title style='small'>
            Введите проверочный код для входа <br /> в личный кабинет
          </Title>
        ) : (
          <Title style='small'>
            Введите электронную почту для входа <br /> в личный кабинет
          </Title>
        )}
      </div>
      <Input
        placeholder='Почта'
        type='email'
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onEmailChange(event)}
      />
      {emailError.length ? <Title style='error'>{emailError}</Title> : null}
      {active ? (
        <div className={styles.code_block}>
          <Input placeholder='Проверочный код' type='text' />
        </div>
      ) : null}
      <div className={styles.button_block}>
        <Button
          style='default'
          img={false}
          onClick={!active ? () => setActive(true) : () => setAuth()}
          disabled = {disable}
        >
          {active ? 'Войти' : 'Продолжить'}
        </Button>
      </div>
      {active && !end ? <Title style='blue'>Отправить код повторно через {timer} сек</Title> : null}
      {end ? <a className={styles.send_again_text}>Отправить ещё раз</a> : null}
    </div>
  );
};
