import styles from './style.module.css';

// Images ==========================================
import Cart1 from '../../assets/images/cart-img-1.png';
import Cart2 from '../../assets/images/cart-img-2.png';
import Cart3 from '../../assets/images/cart-img-3.png';
import Cart4 from '../../assets/images/cart-img-4.png';
import Cart5 from '../../assets/images/cart-img-5.png';

const Offer = () => {
  return (
    <section className={styles.offer_section}>
        <div className='container'> 
            <div className={styles.offer_content}>
                  <h2 className={styles.offer_title}>Что мы предлагаем?</h2>
                  <div className={styles.offer_wrapper}>
                      <div className={styles.offer_inner}>
                          <div className={`${styles.offer_cart} ${styles.offer_cart_1}`}>
                              <img src={Cart1} className={`${styles.offer_cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.offer_cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>
                      <div className={styles.offer_inner}>
                          <div className={`${styles.offer_cart} ${styles.offer_cart_2}`}>
                              <img src={Cart2} className={`${styles.offer_cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.offer_cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>
                      <div className={styles.offer_inner}>
                          <div className={`${styles.offer_cart} ${styles.offer_cart_3}`}>
                              <img src={Cart3} className={`${styles.offer_cart__img} ${styles.img_1}`}></img>
                              <h3 className={styles.offer_cart__text}>Перевозка<br></br><span>опасных грузов</span></h3>
                          </div>
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                          <div className={styles.offer_inner}>
                              <div className={`${styles.offer_cart} ${styles.offer_cart_3}`}>
                                  <img src={Cart4} className={`${styles.offer_cart__img} ${styles.img_1}`}></img>
                                  <h3 className={styles.offer_cart__text}><span>Криологистика</span></h3>
                              </div>
                          </div>
                          <div className={styles.offer_inner}>
                              <div className={`${styles.offer_cart} ${styles.offer_cart_3}`}>
                                  <img src={Cart5} className={`${styles.offer_cart__img} ${styles.img_1}`}></img>
                                  <h3 className={styles.offer_cart__text}>Транспортировка<br></br><span>биоматериалов</span></h3>
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
