import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './Navigation.css';

const Navigation = () => (
  <li className={styles.nav}>
    <Link to="/home"><FormattedMessage id="home" /></Link>
    <Link to="/"><FormattedMessage id="posts" /></Link>
    <Link to="/about"><FormattedMessage id="about" /></Link>
  </li>
);


export default Navigation;
