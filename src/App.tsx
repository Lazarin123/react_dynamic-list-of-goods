import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, getFirstFive, getRedGoods } from './api/goods';
import { Good } from './types';

// Export nomeado para evitar erro de build no index.tsx
export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  const loadGoods = (loader: () => Promise<Good[]>) => {
    setError(''); // Limpa erro anterior
    loader()
      .then(setGoods)
      .catch(err => setError(err.message));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button onClick={() => loadGoods(getAll)}>Load All</button>
        <button onClick={() => loadGoods(getFirstFive)}>Load 5 First</button>
        <button onClick={() => loadGoods(getRedGoods)}>Load Red Goods</button>
      </div>

      {error && <p className="error">{error}</p>}

      <GoodsList goods={goods} />
    </div>
  );
};
