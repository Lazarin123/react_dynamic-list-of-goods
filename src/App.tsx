import React, { useState } from 'react';
import './App.scss';
// eslint-disable-next-line import/extensions
import { GoodsList } from './components/GoodsList';
import { getAll, getFirstFive, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = (loader: () => Promise<Good[]>) => {
    setError('');
    loader()
      .then(setGoods)
      .catch(err => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(getFirstFive)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
