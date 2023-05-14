import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import categories from '../../components/categories/categories';
import CategoryColection from '../../components/categories/CategoryCollection';
import { CategoryItems } from '../../utils/types';

export default function NewList() {
  dayjs.extend(localizedFormat);
  const tempCategories: CategoryItems[] = categories.map((category) => {
    return {
      ...category,
      items: [
        {
          name: 'French Bread',
          price: 3,
        },
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
          {tempCategories.map((category, i) => {
            return (
              <CategoryColection
                key={i}
                categoryCollection={category}
              ></CategoryColection>
            );
          })}
        </div>
      </main>
    </>
  );
}
