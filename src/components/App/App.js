import React from 'react';
import styles from './App.module.css';
import pricingPlanItems from '../../initialData/pricing-plan.json';
import transactions from '../../initialData/transactions.json';
import user from '../../initialData/user';
import stats from '../../initialData/stats';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => (
  <div className={styles.app}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
