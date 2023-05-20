import axios, { AxiosError } from 'axios';
import type { AxiosResponse } from 'axios';
import type { Item } from '../utils/models/grocery';
import { toast } from 'react-toastify';
import { router } from '../routes/router/Routes';
import { store } from '../stores/store';

const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(
  async (response) => {
    await sleep(600);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }

          throw modalStateErrors.flat();
        } else {
          toast.error(data);
        }
        break;
      case 401:
        toast.error('unauthorized');
        break;
      case 403:
        toast.error('forbidden');
        break;
      case 404:
        router.navigate('/not-found');
        break;
      case 500:
        store.commonStore.setServerError(data);
        router.navigate('/server-error');
        break;
    }

    return Promise.reject(error);
  }
);

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
