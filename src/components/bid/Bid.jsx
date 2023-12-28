import styles from './style.module.css';

import ManBuyTruck from '../../assets/images/man-buy-truck.png';

const Bid = () => {
  return (
    <section className={styles.section_bid}>
        <div className='container'>
            <div className={styles.bid_content}>
                <div className={styles.bid_left__side}>
                  <h2 className={styles.bid_left_side__title}>Экспресс <span>доставка</span> вакцин и биопрепаратов</h2>
            <p className={styles.bid_left_side__subtitle}>Доставка день в день после<br></br> оставления заявки</p>
            <button className={styles.bid_left_side__btn}>Оставить заявку</button>
                </div>
                <div className={styles.bid_right__side}>
                      <img src={ManBuyTruck} alt="Man buy truck" />
                </div>
            </div>
      </div>
    </section>
  )
}

export default Bid
