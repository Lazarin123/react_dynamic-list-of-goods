import { Good } from '../types/Good';

const BASE_URL = 'https://mate.academy/api/goods';

export const getGoods = (): Promise<Good[]> => {
  return fetch(BASE_URL).then(response => response.json());
};
