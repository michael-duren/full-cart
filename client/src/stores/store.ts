import { createContext, useContext } from 'react';
import GroceryListStore from './listStore';

interface Store {
  listStore: GroceryListStore;
}

export const store: Store = {
  listStore: new GroceryListStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
