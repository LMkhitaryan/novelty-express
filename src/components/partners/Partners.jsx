import styles from './style.module.css';

import Partner1 from '../../assets/images/partner-img-1.png';
import Partner2 from '../../assets/images/partner-img-2.png';
import Partner3 from '../../assets/images/partner-img-3.png';
import Partner4 from '../../assets/images/partner-img-4.png';
import Partner5 from '../../assets/images/partner-img-5.png';
import Partner6 from '../../assets/images/partner-img-6.png';
import Partner7 from '../../assets/images/partner-img-7.png';
import Partner8 from '../../assets/images/partner-img-8.png';

const Partners = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                  <h2 className={styles.title}>С кем работаем</h2>
                  <div className={styles.inner}>
                      <img src={Partner1} alt="Partners" className={styles.img}/>
                      <img src={Partner2} alt="Partners" className={styles.img}/>
                      <img src={Partner3} alt="Partners" className={styles.img}/>
                      <img src={Partner4} alt="Partners" className={styles.img}/>
                      <img src={Partner5} alt="Partners" className={styles.img}/>
                      <img src={Partner6} alt="Partners" className={styles.img}/>
                      <img src={Partner7} alt="Partners" className={styles.img}/>
                      <img src={Partner8} alt="Partners" className={styles.img}/>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Partners
