import { ChangeEvent, useState } from 'react';
import { useStore } from '../../stores/store';
import { Category } from '../../utils/types';
import { observer } from 'mobx-react-lite';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

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
        <PrimaryButton type="submit" onClick={closeModal}>
          Add
        </PrimaryButton>
        <SecondaryButton type="button" onClick={closeModal}>
          Cancel
        </SecondaryButton>
      </div>
    </form>
  );
});
