import styles from './style.module.css';

import CredoCube from '../../assets/images/Credo-Cube.svg';

const Advantages = () => {
  return (
    <section className={styles.adv_section}>
        <div className='container'>
            <div className={styles.content}> 
                <h2 className={styles.title}>Почему мы?</h2>
                <div className={styles.top}>
                    <div className={styles.top_left}>
                          <div className={styles.top_left_year__block}>
                              <h3 className={styles.top_left__year}><span>с</span>2013</h3>
                          </div> 
                          <div className={styles.top_left_descr__block}>
                              <h3 className={styles.top__left_descr__title}>Мы занимаемся доставкой радиофармпрепаратов с ультра-коротким периодом полураспада.*</h3>
                              <p className={styles.top_left_descr__subtitle}>*это диагностические и терапевтические лекарственные радиоактивные препараты которые теряют свою активность со временем.</p> 
                          </div>
                    </div>
                    <div className={styles.top_mid}>
                        <div className={styles.top_mid_first__block}>
                            <h3 className={styles.top_mid__descr}>
                                  Располагаем всем
                                  необходимым для перевозки
                                  опасных грузов на любые
                                  расстояния
                            </h3>
                          </div>
                          <div className={styles.top_mid_second__block}>
                              <h3 className={styles.top_mid__descr}>
                                  Доставляем быстро<span></span>
                                  и безопасно с соблюдением
                                  температурного режима
                              </h3>
                          </div>
                    </div>
                    <div className={styles.top_right}>
                        <img src={CredoCube} alt="Credo-Cube" />
                        <h3 className={styles.top_right__descr}>
                            Используем качественные
                            термоконтейнеры для наших перевозок
                        </h3>
                    </div>  
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottom_left}>
                          <div className={styles.bottom_left_upper__block}>
                              <h3 className={styles.bottom_left__title}>Оборудование</h3>
                              <p className={styles.bottom_left_descr}>Соответствует требованиям
                                  Приказа 646н и СП
                                  3.3.2.3332−16, измерительные
                                  приборы внесены
                                  в Госреестр средств измерений.
                              </p>
                          </div>
                          <div className={styles.bottom_left_lower__block}>
                              <h3 className={styles.bottom_left__title}>Автопарк</h3>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                  <p className={styles.bottom_left_descr}>Объем кузова</p>
                                  <p className={styles.units}>1,8 м³</p>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 15px' }}>
                                  <p className={styles.bottom_left_descr}>Режим<br></br>
                                      перевозки</p>
                                  <p className={styles.units}>-20°С до +12°С</p>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <p className={styles.bottom_left_descr}>Грузоподъемность</p>
                                  <p className={styles.units}>500 кг</p>
                              </div>
                          </div> 
                      </div>
                      <div className={styles.bottom_mid}>
                          <div className={styles.bottom_mid_upper__block}></div>
                          <div className={styles.bottom_mid_lower__block}></div>
                      </div>
                      <div className={styles.bottom_right}></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantages
