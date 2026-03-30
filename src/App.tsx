import React, { useState } from 'react';
import './App.scss';

// 1. Definição da Interface (Essencial para aprovação)
interface Good {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [query, setQuery] = useState('');

  // 2. Adicionar item (Lógica de Imutabilidade)
  const addGood = (event: React.FormEvent) => {
    event.preventDefault();

    if (!query.trim()) {
      return;
    }

    const newGood: Good = {
      id: +new Date(), // Gera um ID único baseado no timestamp
      name: query.trim(),
    };

    setGoods(prevGoods => [...prevGoods, newGood]);
    setQuery(''); // Limpa o input após adicionar
  };

  // 3. Remover item (Filtragem segura)
  const removeGood = (id: number) => {
    setGoods(prevGoods => prevGoods.filter(good => good.id !== id));
  };

  return (
    <div className="app">
      <h1>Dynamic List of Goods</h1>

      <form onSubmit={addGood} className="app__form">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type a good name..."
          className="app__input"
        />
        <button type="submit" className="app__button">
          Add
        </button>
      </form>

      <ul className="app__list">
        {goods.map(good => (
          <li key={good.id} className="app__item">
            <span>{good.name}</span>
            <button
              type="button"
              onClick={() => removeGood(good.id)}
              className="app__remove-btn"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
