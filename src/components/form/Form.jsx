import styles from './style.module.css';

// import Way from '../../assets/images/footer-way.svg';

const Form = () => {
  return (
      <section className={styles.section}>
        <div className='container'>
              <div className={styles.content}>
                  <div style={{ display: 'flex', gap: '17px' }}>
                    <h2 className={styles.title}>Рассчитать стоимость</h2>
                      <p className={styles.subtitle}>
                          Заполните форму и наш менеджер свяжется
                          с Вами в ближайшее время.
                      </p> 
                  </div>
                  <form className={styles.form} onClick={(e) => e.preventDefault}>
                      <input className={styles.input_text} type="text" placeholder='Ваше имя' />
                      <input className={styles.input_text} type="text" placeholder='+ 7 (' />
                      <button onClick={(e) => e.preventDefault} type='button' className={styles.btn}>Оставить заявку</button>
                  </form>
            </div>
        </div>
    </section>
  )
}

export default Form
