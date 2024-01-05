import styles from './style.module.css';

const Excellence = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <h2 className={styles.title}>Наши преимущества</h2>
                <div className={styles.wrapper}>
                   <div className={styles.inner}>
                          <h3 className={styles.inner_title}>Оборудование</h3>
                          <p className={styles.inner_descr}>
                              Соответствует требованиям Приказа 646н и СП 3.3.2.3332−16,
                              измерительные приборы внесены в Госреестр средств измерений.
                              И тут что-то еще надо будет добавить, чтобы объем
                              текста в пунктах был примерно одинаковый.
                          </p>
                      </div>
                      <div className={styles.inner}>
                          <h3 className={styles.inner_title}>Профессиональный опыт</h3>
                          <p className={styles.inner_descr}>
                              Мы  занимаемся доставкой радиофармпрепаратов с ультра-коротким
                              периодом полураспада (это диагностические и терапевтические лекарственные
                              радиоактивные препараты которые теряют свою активность со временем).
                          </p>
                      </div> 
                      <div className={styles.inner}>
                          <h3 className={styles.inner_title}>Надежность</h3>
                          <p className={styles.inner_descr}>
                              Полный контроль за происходящим через самую прогрессивную систему
                              трекинга на рынке. Наши специалисты полностью проработают процедуру
                              ввоза / вывоза и подготовят за вас все необходимые документы.
                          </p>
                      </div> 
                      <div className={styles.inner}>
                          <h3 className={styles.inner_title}>Строгое соблюдение норм</h3>
                          <p className={styles.inner_descr}>
                              Соблюдение температурного режима – основное требование перевозке химических веществ,
                              медицинских грузов и лекарственных средств. Мы заботимся о точном соблюдении всех
                              температурных показателей заявленным требованиям.
                          </p>
                      </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Excellence
