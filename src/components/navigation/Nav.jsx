import styles from "./style.module.css";
import {NavLink} from "react-router-dom";

import Search from "../../assets/icons/search.svg";
import RightArrow from '../../assets/icons/rightarrow.svg';

const Nav = () => {


  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <NavLink style={({ isActive }) => {
            return isActive ? { color: "#4298C8" } : {};
          }} to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => {
            return isActive ? { color: "#4298C8" } : {};
            }} to="/about-us">О нас</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => {
            return isActive ? { color: "#4298C8" } : {};
            }} to="/offer">Что мы предлагаем</NavLink>
        </li>
        <li>
          <NavLink to="">Склад</NavLink>
        </li>
        <li>
          <NavLink  style={({ isActive }) => {
            return isActive ? { color: "#4298C8" } : {};
            }} to="/contacts">Контакты</NavLink>
        </li>
        <li>
          <img className={styles.nav_search} src={Search} alt="search" />
        </li>
      </ul>
      <div style={{display: "flex", alignItems: "center", gap: "30px"}}>
        <a href="tel: +7 495 118 40 48">+7 495 118 40 48</a>
        <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
          <img src={RightArrow} alt="" />
          <a className={styles.nav_login__link} href="" onClick={(evt) => evt.preventDefault()}>Личный кабинет</a>
        </div>
          <button className={styles.nav_btn}>Оставить заявку</button>
      </div>
    </nav>
  );
};

export default Nav;