import { ChangeEvent, useState } from 'react';
import { useStore } from '../../stores/store';
import { Category } from '../../utils/types';
import { observer } from 'mobx-react-lite';

interface AddItemProps {
  closeModal: () => void;
  category: Category;
}

export default observer(function AddItemForm({
  closeModal,
  category,
}: AddItemProps) {
  const {
    listStore: { createItem },
  } = useStore();
  const initialState = {
    id: '',
    name: '',
    price: '',
    category: '',
  };

  const [itemData, setItemData] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createItem({ ...itemData, category: category });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="flex mb-8 space-y-4 items-center justify-center flex-col   mt-2 ">
        <div className="flex flex-col">
          <input
            className="border-2 p-2 rounded-md"
            onChange={handleChange}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            className="border-2 p-2 rounded-md"
            onChange={handleChange}
            type="number"
            placeholder="0.00"
            name="price"
            id="price"
            required
          />
        </div>
      </div>

      <div className=" flex items-center justify-center gap-4 mt-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-geraldine-light px-4 py-2 text-sm font-medium bg-opacity-20 text-geraldine-dark hover:bg-geraldine focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Add
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-opacity-20 bg-h-pink-light px-4 py-2 text-sm font-medium text-h-pink-dark hover:bg-h-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
});
