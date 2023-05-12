import { CategoryItems } from '../../utils/types';

interface CategoryProps {
  categoryCollection: CategoryItems;
}

export default function CategoryColection({
  categoryCollection,
}: CategoryProps) {
  const { category, CategoryIcon, items } = categoryCollection;

  return (
    <div key={category} className="flex items-start  flex-col w-full">
      <div className="flex my-2 justify-between items-center w-full">
        <div className="flex space-x-2">
          <div>{<CategoryIcon className="h-8 w-8" />}</div>
          <h3>{category}</h3>
        </div>
        <div>
          <button className="text-gray-700 hover:text-gray-900">
            <span className="drop-shadow-2xl">+</span>
          </button>
        </div>
      </div>
      {/* items */}
      <div className="grid grid-cols-2 border-2 rounded-md p-2 my-2 w-full">
        {items &&
          items.map((item) => {
            return (
              <div
                key={item.name}
                className="flex text-sm items-center justify-between"
              >
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
          })}
      </div>
    </div>
  );
}
