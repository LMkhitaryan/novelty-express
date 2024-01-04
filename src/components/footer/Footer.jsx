import styles from './style.module.css';

import Geo from '../../assets/icons/geo.svg';
import Message from '../../assets/icons/message.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.left_side}>
                      2022 &copy; “Новелти диагностика и терапия”
                </div>
                <div className={styles.right_side}>
                      <div className={styles.address_block}>
                          <img src={Geo} alt="" />
                          <p className={styles.address}>
                              Москва, Филевский бульвар,<br></br> д. 39, офис 4
                          </p>
                      </div>
                      <div className={styles.tel_block}>
                          <a className={styles.tel} href="tel: +7 495 118 40 48">+7 495 118 40 48</a>
                          <a className={styles.email} href="mailto: +7 495 118 40 48">info@novelty.express</a>
                      </div>
                      <button type='button' className={styles.btn}>
                          <img src={Message} alt="" />
                      </button>
                </div>  
            </div>    
        </div>
    </footer>
  )
}

export default Footer
