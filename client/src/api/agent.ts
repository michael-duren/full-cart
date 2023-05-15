import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Item } from '../utils/types';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Items = {
  getAll: () => requests.get<Item[]>('/groceryitems'),
  getSingle: (id: string) => requests.get<Item>(`/groceryitems/${id}`),
  create: (item: Item) => requests.post<void>('/groceryitems', item),
  update: (item: Item) => requests.put<void>(`/groceryitems${item.id}`, item),
  delete: (id: string) => requests.del<void>(`/groceryitems/${id}`),
};

const agent = {
  Items,
};

export default agent;