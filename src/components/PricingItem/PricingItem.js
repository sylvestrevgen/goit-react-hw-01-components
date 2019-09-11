import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  let itemAccentColor;

  switch (label) {
    case 'Bronze':
      itemAccentColor = '#dd7c4b';
      break;
    case 'Silver':
      itemAccentColor = '#c0c0c0';
      break;
    case 'Gold':
      itemAccentColor = '#dda431';
      break;

    default:
      itemAccentColor = '#7f8c8d';
      break;
  }

  return (
    <div className={styles.pricingItem}>
      <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
      <h2 className={styles.label} style={{ color: `${itemAccentColor}` }}>
        {label}
      </h2>
      <p className={styles.capacity}>{capacity}</p>
      <p className={styles.capacity}>{description}</p>
      <p className={styles.price}>{`$${price}/MO`}</p>
      <button
        type="button"
        className={styles.button}
        style={{ backgroundColor: `${itemAccentColor}` }}
      >
        Get Started
      </button>
    </div>
  );
};
// const PricingItem = ({ label, icon, capacity, price, description }) => {

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
