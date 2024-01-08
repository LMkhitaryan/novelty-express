import styles from './style.module.css';

import Phone from '../../assets/icons/phone.svg';
import Email from '../../assets/icons/email.svg';
import Geo from '../../assets/icons/geo.svg';
import Time from '../../assets/icons/time.svg';

const Info = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                  <h2 className={styles.title}>Как с нами<br /> связаться?</h2>
                  <div className={styles.wrapper}>
                    <div className={styles.left_side}>
                        <div className={styles.left_side__inner}>
                            <div className={styles.tel_block}>
                                <img src={Phone} alt="" />
                                <a href="tel:+7 495 118 40 48 ">+7 495 118 40 48</a>
                            </div>
                            <div className={styles.email_block}>
                                <img src={Email} alt="" />
                                <a href="mailto:info@novelty.express">info@novelty.express</a>
                            </div>
                          </div>
                          <div className={styles.left_side__inner}>
                              <h3 className={styles.inner_title}>Адрес</h3>
                              <div className={styles.geo_block}>
                                  <img src={Geo} alt="" />
                                  <p className={styles.inner_descr}>
                                      Москва, Филевский бульвар,
                                      д. 39, офис 4 
                                  </p>
                              </div>
                          </div> 
                          <div className={styles.left_side__inner}>
                              <h3 className={styles.inner_title}>Режим работы</h3>
                              <div className={styles.time_block}>
                                  <img src={Time} alt="" />
                                  <p className={styles.inner_descr}>
                                      Приём заказов на сайте: <span>24/7</span><br />
                                      Офис и Склад: <span>8:00-18:30</span>
                                  </p>
                              </div>
                          </div> 
                      </div>
                      <div className={styles.right_side}>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7495140830024!2d37.48218077654339!3d55.762853391217305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5493e25fd9b9d%3A0x58d26b404b9c0a84!2z0KTQuNC70LXQstGB0LrQuNC5INCxLdGALCAzOSwgNCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyMTYwMQ!5e0!3m2!1sru!2sam!4v1704459104034!5m2!1sru!2sam" width="890" height="492" style={{ border: '0', borderRadius: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Info
