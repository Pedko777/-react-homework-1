import React from 'react';
import styles from "./Statistics.module.css";

const { titles, a, item, wrapper, statistics, list } = styles;

export const SectionInsert = ({ children }) => (<section className={statistics}>{children}</section>);
export const Title = ({ title }) => (
  <div className={wrapper}>
    {{ title } && <h2 className={titles}>{title}</h2>}
  </div>
);
export const UlInsert = ({ children }) => <ul className={list}>{children}</ul>;
export const StatisticComponentList = ({ label, percentage }) => (
  <>
    <li className={(a, item)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  </>
);