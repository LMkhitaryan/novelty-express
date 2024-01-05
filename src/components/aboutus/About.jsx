import styles from './style.module.css';

import ManDelivery from '../../assets/images/man-by-truck-guy-delivery-uniform-man-with-clipboard.png';

const About = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.left_side}>
                    <h2 className={styles.title}>Кто мы?</h2>
                    <div className={styles.descr_block}>
                        <p className={styles.descr}>
                              <span>Компания “Новелти диагностика и терапия”</span>
                              была создана как фарм. дистрибьютор зарубежных
                              производителей радиофармпрепаратов и её основной
                              задачей был вывод на российский рынок импортной
                              продукции для ядерной медицины.
                          </p>
                          <p className={styles.descr}>
                              Далее мы преобразовались в сервисный центр,
                              который обеспечивает таможенное оформление, доставку,
                              сертификацию, логистические решение, мультимодальные перевозки
                              медицинских грузов, в том числе новых препаратов для
                              проведения клинических исследований.
                          </p>
                    </div>
                </div>
                <img src={ManDelivery} alt="man-by-truck-guy-delivery" />
            </div>
        </div>
    </section>
  )
}

export default About
