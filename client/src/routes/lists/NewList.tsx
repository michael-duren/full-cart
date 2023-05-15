import axios from 'axios';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import categories from '../../components/categories/categories';
import CategoryColection from '../../components/categories/CategoryCollection';
import { useEffect, useState } from 'react';
import { Item } from '../../utils/types';

export default function NewList() {
  const [items, setItems] = useState<Item[]>();
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/GroceryItems')
      .then((response) => setItems(response.data))
      .catch((e) => console.log(`OH NO AN ERROR OCCURED ${e}`));
  }, []);

  console.log(items);

  dayjs.extend(localizedFormat);

  return (
    <>
      <main className="flex flex-col items-center mx-4 justify-center">
        <div className="flex border-b-2 pb-1 w-full items-center justify-between flex-1">
          <h2>New List</h2>
          <div>{dayjs(new Date()).format('LL')}</div>
        </div>
        <div className="flex w-full mt-4 flex-col items-start justify-center gap-4">
          {items ? (
            categories.map((category, i) => {
              return (
                <CategoryColection
                  items={items}
                  key={i}
                  categoryCollection={category}
                ></CategoryColection>
              );
            })
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </main>
    </>
  );
}
