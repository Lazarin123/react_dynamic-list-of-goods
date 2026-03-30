import React from 'react';
// eslint-disable-next-line import/extensions
import { Good } from '../types/Good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul className="list" data-cy="goods-list">
      {goods.map(good => (
        <li key={good.id} className={`list__item list__item--${good.color}`}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});

GoodsList.displayName = 'GoodsList';
