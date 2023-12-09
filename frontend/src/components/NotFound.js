// NotFound.js
import React from 'react';
import NotFoundImage from '../assets/notfound.png'; // Update the path as needed
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.MarginTop}>
      <img src={NotFoundImage} alt="Page not found" />
      <p>Sorry, the page you're looking for doesn't exist</p>
    </div>
  );
};

export default NotFound;




