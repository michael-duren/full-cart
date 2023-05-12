export interface Item {
  name: string;
  price: number;
  category?: string;
}

export enum Category {
  'Veggies',
  'Fruits',
  'Dairy',
  'Meat',
  'Starches',
  'Snacks',
  'Beverages',
  'Spices',
  'Condiments',
  'Household',
}

export interface CategoryItems {
  category: string;
  CategoryIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  items?: Item[];
}
