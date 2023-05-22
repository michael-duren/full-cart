import { createContext, useContext } from 'react';
import GroceryListStore from './listStore';
import CommonStore from './commonStore';
import UserStore from './userStore';

interface Store {
  listStore: GroceryListStore;
  commonStore: CommonStore;
  userStore: UserStore;
}

export const store: Store = {
  listStore: new GroceryListStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
