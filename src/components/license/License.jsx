import styles from './style.module.css';

import License1 from '../../assets/images/license1.png';
import License2 from '../../assets/images/license2.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const License = () => {
  return (
    <section className={styles.section}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.left_side}>
                    <h2 className={styles.title}>Наши лицензии</h2>
                    <p className={styles.descr}>
                          Компания <span>“Новелти диагностика и терапия”</span> оказывает полный комплекс логистических услуг
                          в сфере здравоохранения. Для осуществления такой широкой деятельности, не обойтись без
                          специальных документов. <span>“Новелти диагностика и терапия”</span> – лицензированный
                          таможенный брокер, мы имеем право оказывать услуги по таможенному оформлению в
                          любом регионе России и за пределами страны.
                    </p>
                  </div>
                  <div className={styles.right_side}>
                      <div className={styles.left_arrow}><IoIosArrowBack size={24}/></div>
                      <img src={License1} alt="License" />
                      <img src={License2} alt="License" />
                      <div className={styles.right_arrow}><IoIosArrowForward size={24}/></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default License
