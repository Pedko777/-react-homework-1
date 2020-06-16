import React from 'react';
import statistics from '../../data/statistical-data.json';
import {StatisticComponentList, Title, SectionInsert, UlInsert} from "./StatisticsComponent";


export const Statistic = () => (
  <SectionInsert>
    <Title title={"Upload stats"} />
    <UlInsert>
      {statistics.map((item) => (
        <StatisticComponentList key={item.id} {...item} />
      ))}
    </UlInsert>
  </SectionInsert>
);