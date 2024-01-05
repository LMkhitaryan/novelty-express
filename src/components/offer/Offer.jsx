import styles from './style.module.css';

// Images ==========================================
import Cart1 from '../../assets/images/cart-img-1.png';
import Cart2 from '../../assets/images/cart-img-2.png';
import Cart3 from '../../assets/images/cart-img-3.png';
import Cart4 from '../../assets/images/cart-img-4.png';
import Cart5 from '../../assets/images/cart-img-5.png';

const Offer = ({ title }) => {

  return (
    <section className={styles.section}>
        <div className='container'> 
            <div className={styles.content}>
                  <h2 className={styles.title}>{title}</h2>
                  <div className={styles.wrapper}>
                      <div className={styles.inner}>
                          <div className={`${styles.cart} ${styles.cart_1}`}>
                              <img src={Cart1} className={`${styles.cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>
                      <div className={styles.inner}>
                          <div className={`${styles.cart} ${styles.cart_2}`}>
                              <img src={Cart2} className={`${styles.cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>
                      <div className={styles.inner}>
                          <div className={`${styles.cart} ${styles.cart_3}`}>
                              <img src={Cart3} className={`${styles.cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                          <div className={styles.inner}>
                              <div className={`${styles.cart} ${styles.cart_3}`}>
                                  <img src={Cart4} className={`${styles.cart__img} ${styles.img_1}`}></img>
                                  <h3 className={styles.cart__text}><span>Криологистика</span></h3>
                              </div>
                          </div>
                          <div className={styles.inner}>
                              <div className={`${styles.cart} ${styles.cart_3}`}>
                                  <img src={Cart5} className={`${styles.cart__img} ${styles.img_1}`}></img>
                                  <h3 className={styles.cart__text}>Транспортировка<br></br><span>биоматериалов</span></h3>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Offer
