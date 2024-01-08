import styles from './style.module.css';

import ManBuyTruck from '../../assets/images/man-buy-truck.png';
import ButtonApplication from '../buttonApplication/ButtonApplication';

const Bid = () => {

  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.left__side}>
                  <h2 className={styles.left_side__title}>Экспресс <span>доставка</span> вакцин и биопрепаратов</h2>
            <p className={styles.left_side__subtitle}>Доставка день в день после<br></br> оставления заявки</p>
            {/* <button style={ myStyles } className={styles.left_side__btn}>Оставить заявку</button> */}
            <ButtonApplication forBid={true} />
                </div>
                <div className={styles.right__side}>
                      <img src={ManBuyTruck} alt="Man buy truck" />
                </div>
            </div>
      </div>
    </section>
  )
}

export default Bid
