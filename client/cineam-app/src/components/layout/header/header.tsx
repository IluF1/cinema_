import { HeaderElem } from '@/components/ui/headerElem/headerElem';
import styles from './header.module.css';
import logo from '@/app/assets/images/Cinema 2.svg';
import ticketImg from '@/app/assets/images/Ticket.svg';
import profileImg from '@/app/assets/images/User.svg';
import ticketImgActive from '@/app/assets/images/activeTicket.svg';
import usetImgActive from '@/app/assets/images/activeUser.svg';
import { useAuthStore } from '@/utils/store/useAuthStore';
import { Button } from '@/components/ui/button/button';
import exitImg from '@/app/assets/images/Exit.svg';
import activeEnter from '@/app/assets/images/activeEtrance.svg';
import enterImg from '@/app/assets/images/Etrance .svg';

export const Header = () => {
  const { auth, exit } = useAuthStore();
  return (
    <div className={styles.container}>
      <a href='/' className={styles.logo}>
        <img src={logo} alt='logo' />
      </a>
      {auth ? (
        <>
          <ul className={styles.pagesList}>
            <li>
              <HeaderElem href='/profile' image={profileImg} activeImage={usetImgActive}>
                Профиль
              </HeaderElem>
            </li>
            <li>
              <HeaderElem href='/tickets' image={ticketImg} activeImage={ticketImgActive}>
                Билеты
              </HeaderElem>
            </li>
          </ul>

          <div className={styles.exitBtn}>
            <Button style='transparent' image={exitImg} onClick={exit} img={true}>
              Выйти
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.enter}>
          <HeaderElem href='/auth' image={enterImg} activeImage={activeEnter}>
            Войти
          </HeaderElem>
        </div>
      )}
    </div>
  );
};
