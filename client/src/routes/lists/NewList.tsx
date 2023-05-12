import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import categories from '../../components/categories/categories';

export default function NewList() {
  dayjs.extend(localizedFormat);
  const tempCategories = categories.map((category) => {
    return {
      ...category,
      items: [
        { name: 'Fish', price: 10 },
        { name: 'Chicken', price: 10 },
        { name: 'Fruit', price: 10 },
        { name: 'Chips', price: 5 },
        { name: 'Brown Rice', price: 5 },
      ],
    };
  });

  return (
    <>
      <main className="flex flex-col items-center mx-4 justify-center">
        <div className="flex border-b-2 pb-1 w-full items-center justify-between flex-1">
          <h2>New List</h2>
          <div>{dayjs(new Date()).format('LL')}</div>
        </div>
        <div className="flex w-full mt-4 flex-col items-start justify-center gap-4">
          {tempCategories.map((category) => {
            return (
              <div
                key={category.category}
                className="flex items-start  flex-col w-full"
              >
                <div className="flex my-2 justify-between items-center w-full">
                  <div className="flex space-x-2">
                    <div>{<category.icon className="h-8 w-8" />}</div>
                    <h3>{category.category}</h3>
                  </div>
                  <div>
                    <button className="text-gray-700 hover:text-gray-900">
                      <span className="drop-shadow-2xl">+</span>
                    </button>
                  </div>
                </div>
                {/* items */}
                <div className="grid grid-cols-2 border-2 rounded-md p-2 my-2 w-full">
                  {category.items.map((item) => {
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
          })}
        </div>
      </main>
    </>
  );
}
