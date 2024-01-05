import styles from './style.module.css';

import LadalargusTermo2 from '../../assets/images/28_LADA_Largus_Termo 2.png';
import LadalargusTermo4 from '../../assets/images/28_LADA_Largus_Termo 4.png';
import LadalargusTermo5 from '../../assets/images/28_LADA_Largus_Termo 5.png';
import LadalargusTermo6 from '../../assets/images/28_LADA_Largus_Termo 6.png';
import LadalargusTermo7 from '../../assets/images/28_LADA_Largus_Termo 7.png';

const Autopark = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <h2 className={styles.title}>Наш автопарк</h2>  
                <div className={styles.upper_block}>
                      <img src={LadalargusTermo2} alt="" />
                      <img src={LadalargusTermo4} alt="" />
                      <img src={LadalargusTermo5} alt="" />
                  </div>
                  <div className={styles.lower_block}>
                      <img src={LadalargusTermo6} alt="" />
                      <img src={LadalargusTermo7} alt="" />
                      <div className={styles.list_block}>
                          <ul className={styles.list}>
                              <li className={styles.list_item}>
                                  <span className={styles.item_title}>Объем кузова</span>
                                  <div className={styles.item_line}></div>
                                  <span className={styles.item_units}>1,8 м³</span>
                              </li>
                              <li className={styles.list_item}>
                                  <span className={styles.item_title}>Режим перевозки</span>
                                  <div className={styles.item_line}></div>
                                  <span className={styles.item_units}>-20°С до +12°С</span>
                              </li>
                              <li className={styles.list_item}>
                                  <span className={styles.item_title}>Грузоподъемность</span>
                                  <div className={styles.item_line}></div>
                                  <span className={styles.item_units}>500 кг</span>
                              </li>
                              <li className={styles.list_item}>
                                  <span className={styles.item_title}>Итальянская холодильная установка</span>
                                  <div className={styles.item_line}></div>
                                  <span className={styles.item_units}>Zanotti</span>
                              </li>
                          </ul>
                      </div>
                  </div>  
            </div>
        </div>
    </section>
  )
}

export default Autopark
