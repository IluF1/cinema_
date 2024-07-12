import { ReactNode, useEffect, useState } from 'react';
import styles from './headerElem.module.css';

interface IHeaderElem {
  children: string | ReactNode;
  href: string;
  image?: string;
  activeImage?: string;
}

export const HeaderElem = ({ children, href, image, activeImage }: IHeaderElem) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.location.pathname === href) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [href]);
  return (
    <a href={href} style={{ color: active ? '#9534D2' : '' }}>
      {active ? (
        <img src={activeImage} alt='not active image' className={styles.image} />
      ) : (
        <img src={image} alt='image' className={styles.image} />
      )}
      {children}
    </a>
  );
};
