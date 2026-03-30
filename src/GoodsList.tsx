import React from 'react';
// O Linter quer a extensão completa .ts para arquivos de lógica importados em componentes
// eslint-disable-next-line import/extensions
import { Good } from '../types/index.ts';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li key={good.id} className={`list__item list__item--${good.color}`}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});

GoodsList.displayName = 'GoodsList';
