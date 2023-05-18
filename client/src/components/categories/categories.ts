import { ReactComponent as VeggiesIcon } from '../../assets/icons/categories/veggies.svg';
import { ReactComponent as Fruits } from '../../assets/icons/categories/fruits.svg';
import { ReactComponent as Dairy } from '../../assets/icons/categories/dairy.svg';
import { ReactComponent as Meat } from '../../assets/icons/categories/meat.svg';
import { ReactComponent as Starches } from '../../assets/icons/categories/starches.svg';
import { ReactComponent as Beverages } from '../../assets/icons/categories/beverages.svg';
import { ReactComponent as Snacks } from '../../assets/icons/categories/snacks.svg';
import { ReactComponent as Spices } from '../../assets/icons/categories/spices.svg';
import { ReactComponent as Condiments } from '../../assets/icons/categories/condiments.svg';
import { ReactComponent as Household } from '../../assets/icons/categories/household.svg';
import { Category, CategoryCollection } from '../../utils/types';

const categories: CategoryCollection[] = [
  { category: Category.Veggies, CategoryIcon: VeggiesIcon },
  { category: Category.Fruits, CategoryIcon: Fruits },
  { category: Category.Dairy, CategoryIcon: Dairy },
  { category: Category.Meat, CategoryIcon: Meat },
  { category: Category.Starches, CategoryIcon: Starches },
  { category: Category.Snacks, CategoryIcon: Snacks },
  { category: Category.Beverages, CategoryIcon: Beverages },
  { category: Category.Spices, CategoryIcon: Spices },
  { category: Category.Condiments, CategoryIcon: Condiments },
  { category: Category.Household, CategoryIcon: Household },
];

export default categories;
