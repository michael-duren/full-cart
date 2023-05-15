export interface Item {
  id: string;
  name: string;
  price: number;
  category?:
    | 'Veggies'
    | 'Fruits'
    | 'Dairy'
    | 'Meat'
    | 'Starches'
    | 'Snacks'
    | 'Beverages'
    | 'Spices'
    | 'Condiments'
    | 'Household';
}

export interface CategoryItems {
  category:
    | 'Veggies'
    | 'Fruits'
    | 'Dairy'
    | 'Meat'
    | 'Starches'
    | 'Snacks'
    | 'Beverages'
    | 'Spices'
    | 'Condiments'
    | 'Household';
  CategoryIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  items?: Item[];
}

export interface GroceryList {
  items: CategoryItems[];
}
