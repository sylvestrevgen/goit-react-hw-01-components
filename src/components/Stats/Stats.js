import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const listItems = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{`${percentage}%`}</span>
    </li>
  ));

  return (
    <section className={styles.stats}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>{listItems}</ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
