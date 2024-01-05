import styles from './style.module.css';

import Car from '../../assets/images/car.png';

const Transportation = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                  <h2 className={styles.title}>Перевозка<br /> радиоактивных грузов</h2>
                  <div className={styles.wrapper}>
                      <div className={styles.left_side}>
                          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
                              <h3 className={styles.left_side__title}>Типы <br />опасных грузов</h3>
                              <p className={styles.left_side__descr}>К данной категории относят любые материалы, вещества или отходы производства,
                                  которые могут нанести вред человеку и окружающей среде, привести к пожару,
                                  взрыву, гибели людей. Согласно международной классификации, выделяют 9 основных
                                  классов опасных грузов:
                              </p>
                              <ul className={styles.left_side__list}>
                                  <li className={styles.left_side_list__item}>Взрывчатые вещества</li>
                                  <li className={styles.left_side_list__item}>Газы (сжиженные, под давлением)</li>
                                  <li className={styles.left_side_list__item}>Легковоспламеняющиеся жидкости</li>
                                  <li className={styles.left_side_list__item}>
                                      Легковоспламеняющиеся твердые вещества, в том числе
                                      <span>способные к самовозгоранию и воспламеняющиеся при контакте с</span>
                                  </li>
                                  <li className={styles.left_side_list__item}>Окислители и органические пероксиды</li>
                                  <li className={styles.left_side_list__item}>Токсичные и инфекционные вещества</li>
                                  <li className={styles.left_side_list__item}>Коррозионные материалы</li>
                                  <li className={styles.left_side_list__item}>Прочие опасные вещества и изделия</li>
                                  <li className={styles.left_side_list__item}>Перевозка опасных грузов ЖД транспортом</li>
                              </ul>
                          </div>
                      </div>
                      <div className={styles.right_side}>
                          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
                              <h3 className={styles.right_side__title}>Как мы перевозим <br />опасные грузы</h3>
                              <p className={styles.right_side__descr}>Мы располагаем всем необходимым для
                                  перевозки опасных грузов на любые расстояния. Мы организуем перевозку опасных
                                  грузов железнодорожным, автомобильным, морским транспортом. Услуга предоставляется
                                  комплексно и включает следующие мероприятия:
                              </p>
                              <ul className={styles.right_side__list}>
                                  <li className={styles.right_side_list__item}>
                                      Мы поможем получить соответствующие разрешения,
                                      <span>оформим сопроводительные документы,
                                      согласуем транспортировку в МВД Москвы и других городов РФ;</span>
                                  </li>
                                  <li className={styles.right_side_list__item}>
                                      Разработаем маршрут с учетом правил перевозки,
                                      <span>дорожной обстановки и других факторов;</span>
                                  </li>
                                  <li className={styles.right_side_list__item}>
                                      Мы поможем быстро пройти растаможку груза,
                                      <span>подготовить необходимые документы, рассчитать размер
                                      пошлин и сборов и т. д.</span>
                                  </li>
                                  <li className={styles.right_side_list__item}>
                                      Автомобильные перевозки осуществляются водителями
                                      <span>с большим стажем и необходимыми допусками для работы с
                                      опасными грузами</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <img src={Car} alt="" className={styles.img_car} />
        </div>
    </section>
  )
}

export default Transportation
