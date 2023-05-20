export interface Item {
  id: string;
  name: string;
  price: string;
  category?: Category;
}

export interface CategoryCollection {
  category: Category;
  CategoryIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export interface GroceryList {
  items: CategoryCollection[];
}

export enum Category {
  Veggies = 'Veggies',
  Fruits = 'Fruits',
  Dairy = 'Dairy',
  Meat = 'Meat',
  Starches = 'Starches',
  Snacks = 'Snacks',
  Beverages = 'Beverages',
  Spices = 'Spices',
  Condiments = 'Condiments',
  Household = 'Household',
}
