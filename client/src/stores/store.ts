import { createContext, useContext } from 'react';
import GroceryListStore from './listStore';
import CommonStore from './commonStore';

interface Store {
  listStore: GroceryListStore;
  commonStore: CommonStore;
}

export const store: Store = {
  listStore: new GroceryListStore(),
  commonStore: new CommonStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
