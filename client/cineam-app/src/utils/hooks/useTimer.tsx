import { useEffect, useState } from 'react';

export const useTimer = (time: number, active: boolean) => {
  const [timer, setTimer] = useState<number>(time);
  const [end, setEnd] = useState<boolean>(false);

  useEffect(() => {
    if (!active) return;

    const tick = () => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          setEnd(true);
          return 0;
        }
        return prevTimer - 1;
      });
    };

    const intervalId = setInterval(tick, 1000);

    if (timer === 0) {
      setEnd(true);
    }
    return () => clearInterval(intervalId);
  }, [active, timer]);

  return {
    timer,
    end,
  };
};
