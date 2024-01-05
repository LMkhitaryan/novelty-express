import styles from './style.module.css';

import Task1 from '../../assets/icons/task-list-1.svg';
import Task2 from '../../assets/icons/task-list-2.svg';
import Task3 from '../../assets/icons/task-list-3.svg';
import Task4 from '../../assets/icons/task-list-4.svg';
import Way from '../../assets/icons/way.svg';

const Work = () => {
  return (
      <section className={styles.section}>
          <img src={Way} alt="" className={styles.way} />
        <div className='container'>
            <div className={styles.content}>
                  <h2 className={styles.title}>Как мы работаем?</h2>
                  <div className={styles.inner}>
                      <div className={styles.work_first__block}>
                          <img src={Task1} alt="task-list-1" className={styles.img} style={{ top: '-70px' }} />
                          <div className={styles.btn} >
                              <div className={styles.btn_number}>
                                  <span>01</span>
                              </div>
                              <div className={styles.btn_title}>
                                  <p>Вы размещаете<br></br><span>заявку</span></p>
                              </div>
                          </div>
                      </div>
                      <div className={styles.work_second__block}>
                          <img src={Task2} alt="task-list-2" className={styles.img} style={{ top: '-120px' }} />
                          <div className={styles.btn} >
                              <div className={styles.btn_number}>
                                  <span>02</span>
                              </div>
                              <div className={styles.btn_title}>
                                  <p>Вместе согласуем<br></br><span>маршрут</span></p>
                                  
                              </div>
                          </div>
                      </div>
                      <div className={styles.work_third__block}>
                          <img src={Task3} alt="task-list-3" className={styles.img} style={{ top: '-120px' }} />
                          <div className={styles.btn} >
                              <div className={styles.btn_number}>
                                  <span>03</span>
                              </div>
                              <div className={styles.btn_title}>
                                  <p>Мы осуществляем<br></br><span>перевозку</span></p> 
                              </div>
                          </div>
                      </div>
                      <div style={{ position: 'relative' }}>
                          <div className={styles.work_fourth__block}>
                              <img src={Task4} alt="task-list-4" className={styles.img} style={{ top: '-130px', left: '-20px' }} />
                              <p className={styles.fourth_block__descr}>
                                  Вы можете отследить
                                  движение вашего груза
                                  с помощью <span>gps</span>
                              </p>
                          </div>
                          <div className={styles.shadow_block}></div>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Work
