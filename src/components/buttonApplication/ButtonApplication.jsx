import styles from './style.module.css'; 

const ButtonApplication = ({ forBid }) => {
  return (
    <button type='button' className={forBid ? styles.btn_bid : styles.btn}>Оставить заявку</button>
  )
}

export default ButtonApplication
