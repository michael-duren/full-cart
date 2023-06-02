import { useEffect, useState } from 'react';
import { CategoryCollection } from '../../models/grocery';
import ItemInstance from './ItemInstance';
import { TbCarrot, TbCarrotOff } from 'react-icons/tb';
import AddItemModal from '../modals/AddItem';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';

interface CategoryProps {
  categoryCollection: CategoryCollection;
}

export default observer(function CategoryColection({
  categoryCollection,
}: CategoryProps) {
  const { listStore } = useStore();
  const { categoryItems } = listStore;
  const { category, CategoryIcon } = categoryCollection;
  const [isOpen, setIsOpen] = useState(true);
  const [openAddItem, setIsOpenAddItem] = useState(false);

  const items = categoryItems.filter((item) => item.category === category);
  useEffect(() => {
    items.length > 0 ? setIsOpen(true) : setIsOpen(false);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      key={category}
      className="flex items-start border-b-2 pb-2  flex-col w-full"
    >
      <div className="flex my-2 justify-between items-center w-full">
        <div className="flex space-x-2">
          <div>{<CategoryIcon className="h-8 w-8" />}</div>
          <h3>{category}</h3>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setIsOpenAddItem(true)}
            className="text-gray-700 hover:text-gray-900"
          >
            <span className="drop-shadow-2xl">+</span>
          </button>
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleOpen}
          >
            {isOpen ? <TbCarrotOff size={20} /> : <TbCarrot size={20} />}
          </button>
        </div>
      </div>
      {/* items */}
      {isOpen && (
        <div className="grid grid-cols-2 border-2 rounded-md p-2 my-2 w-full">
          {items &&
            items.map((item) => {
              return <ItemInstance key={item.id} item={item} />;
            })}
        </div>
      )}
      <AddItemModal
        isOpen={openAddItem}
        category={category}
        setIsOpen={setIsOpenAddItem}
      />
    </div>
  );
});
