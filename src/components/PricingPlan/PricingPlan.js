import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => {
  const planItems = items.map(
    ({ label, icon, capacity, price, description }) => {
      return (
        <li key={label} className={styles.item}>
          <PricingItem
            label={label}
            icon={icon}
            capacity={capacity}
            price={price}
            description={description}
          />
        </li>
      );
    },
  );

  return <ul className={styles.pricingPlan}>{planItems}</ul>;
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PricingPlan;
