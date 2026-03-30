import React, { useState } from 'react';
import { getGoods } from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const data = await getGoods();

    setGoods(data);
  };

  const loadFiveFirst = async () => {
    const data = await getGoods();
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));

    setGoods(sorted.slice(0, 5));
  };

  const loadRedGoods = async () => {
    const data = await getGoods();

    setGoods(data.filter(item => item.color === 'red'));
  };

  return (
    <div className="app">
      <h1>Dynamic List of Goods</h1>

      <div className="buttons">
        <button type="button" onClick={loadAllGoods}>
          Load all
        </button>
        <button type="button" onClick={loadFiveFirst}>
          Load 5 first
        </button>
        <button type="button" onClick={loadRedGoods}>
          Load red
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};
