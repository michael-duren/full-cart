import { Item } from '../../models/grocery';

interface ItemProps {
  item: Item;
}

export default function ItemInstance({ item }: ItemProps) {
  return (
    <div key={item.name} className="flex text-sm items-center justify-between">
      <div className="flex w-full m-2 justify-between gap-1 items-center">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id={item.name}
            name={item.name}
            value={item.name}
          />
          <label className=" flex" htmlFor={item.name}>
            {item.name}
          </label>
        </div>
        <div className="text-gray-500">${item.price}</div>
      </div>
    </div>
  );
}
