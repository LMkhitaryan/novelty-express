import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Nav from '../navigation/Nav';

import Logo from '../../logo.svg';



const Header = () => {

  const navigate = useNavigate()

    return (
      <header className={styles.header}>
          <div className="container">
            <div style={{display: 'flex', alignItems: 'center', gap: '36px'}}>
              <div className={styles.logo}>
                <img src={Logo} alt="logo" onClick={() => navigate('/')}/>
              </div>
              <Nav />
            </div> 
          </div>
      </header>   
  )
}

export default Header
