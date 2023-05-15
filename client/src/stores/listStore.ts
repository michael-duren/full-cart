import agent from '../api/agent';
import { Item } from '../utils/types';
import { makeAutoObservable } from 'mobx';

export default class GroceryListStore {
  categoryItems: Item[] = [];
  // for loading app
  loadingInitial = false;
  // for loading individual components
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadItems = async () => {
    this.setLoadingInitial(true);
    try {
      this.categoryItems = await agent.Items.getAll();
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
