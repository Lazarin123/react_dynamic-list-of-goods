import { Good } from '../types/Good';

const API_URL = 'https://mate.academy/api/goods';

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch goods');
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to fetch goods');
    });
};

export const getFirstFive = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Ordena por nome e pega os 5 primeiros (Requisito do mentor)
    return [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Filtra apenas os vermelhos localmente
    return goods.filter(good => good.color === 'red');
  });
};
