import { Good } from '../types';

const API_URL = 'https://mate.academy/api/goods'; // Verifique se a URL é esta mesma

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to fetch goods');
    });
};

export const getFirstFive = (): Promise<Good[]> => {
  return fetch(`${API_URL}?limit=5`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to fetch first five goods');
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return fetch(`${API_URL}?color=red`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to fetch red goods');
    });
};
