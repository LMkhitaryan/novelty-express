import styles from './style.module.css';

import Truck from '../../assets/icons/trucky.svg';
import Rectangle from '../../assets/images/Rectangle.png';

const MissionAndValue = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.left_side}>
                    <img src={Truck} alt="Trck" style={{ width: '130px' }}/>
                    <h3 className={styles.title}>Наша миссия</h3>
                    <p className={styles.descr}>
                          Миссия <span>Новелти</span> – создание максимально эффективной логистической компании,
                          лидера по скорости и надёжности предоставления полного комплекса логистических услуг.
                          Каждый день благодаря нашей работе мир становится лучше: мы спасаем и улучшаем качество
                          жизни пациентов, больше людей получает доступ к самым современным и эффективным разработкам.
                          Мы любим то, что мы делаем!
                    </p>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.first_block}>
                          <h3 className={styles.title}>Наши <br />ценности</h3>
                          <ul className={styles.list}>
                              <li className={styles.list_item}>Клиентоориентиро- <span>ванность</span></li>
                              <li className={styles.list_item}>Эффективность</li>
                              <li className={styles.list_item}>Результативность</li>
                              <li className={styles.list_item}>Честность и открытость</li>
                          </ul>
                      </div>
                      <div className={styles.rectangle_img} />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default MissionAndValue
