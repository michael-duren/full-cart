import { ReactComponent as Veggies } from '../../assets/icons/categories/veggies.svg';
import { ReactComponent as Fruits } from '../../assets/icons/categories/fruits.svg';
import { ReactComponent as Dairy } from '../../assets/icons/categories/dairy.svg';
import { ReactComponent as Meat } from '../../assets/icons/categories/meat.svg';
import { ReactComponent as Starches } from '../../assets/icons/categories/starches.svg';
import { ReactComponent as Beverages } from '../../assets/icons/categories/beverages.svg';
import { ReactComponent as Snacks } from '../../assets/icons/categories/snacks.svg';
import { ReactComponent as Spices } from '../../assets/icons/categories/spices.svg';
import { ReactComponent as Condiments } from '../../assets/icons/categories/condiments.svg';
import { ReactComponent as Household } from '../../assets/icons/categories/household.svg';
import { CategoryItems } from '../../utils/types';

const categories: CategoryItems[] = [
  { category: 'Veggies', CategoryIcon: Veggies },
  { category: 'Fruits', CategoryIcon: Fruits },
  { category: 'Dairy', CategoryIcon: Dairy },
  { category: 'Meat', CategoryIcon: Meat },
  { category: 'Starches', CategoryIcon: Starches },
  { category: 'Snacks', CategoryIcon: Snacks },
  { category: 'Beverages', CategoryIcon: Beverages },
  { category: 'Spices', CategoryIcon: Spices },
  { category: 'Condiments', CategoryIcon: Condiments },
  { category: 'Household', CategoryIcon: Household },
];

export default categories;
