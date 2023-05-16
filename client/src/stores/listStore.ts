import agent from '../api/agent';
import { Item } from '../utils/types';
import { makeAutoObservable, runInAction } from 'mobx';
import { v4 as uuid } from 'uuid';

export default class GroceryListStore {
  categoryItems: Item[] = [];
  // for loading app
  loadingInitial = false;
  // for loading individual components
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // operations

  loadItems = async () => {
    this.setLoadingInitial(true);
    try {
      this.categoryItems = await agent.Items.getAll();
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
    }
  };

  createItem = async (item: Item) => {
    this.setLoading(true);
    item.id = uuid();
    try {
      await agent.Items.create(item);
      runInAction(() => {
        this.categoryItems.push(item);
        this.setLoading(false);
      });
    } catch (error) {
      console.log(error);
      this.setLoading(false);
    }
  };

  // setters

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };
}
