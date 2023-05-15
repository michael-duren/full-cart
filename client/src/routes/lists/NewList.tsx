import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import categories from '../../components/categories/categories';
import CategoryColection from '../../components/categories/CategoryCollection';
import { useEffect } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function NewList() {
  const { listStore } = useStore();
  const { loadingInitial } = listStore;

  useEffect(() => {
    listStore.loadItems();
  }, [listStore]);

  dayjs.extend(localizedFormat);

  if (loadingInitial) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <main className="flex flex-col items-center mx-4 justify-center">
        <div className="flex border-b-2 pb-1 w-full items-center justify-between flex-1">
          <h2>New List</h2>
          <div>{dayjs(new Date()).format('LL')}</div>
        </div>
        <div className="flex w-full mt-4 flex-col items-start justify-center gap-4">
          {categories.map((category, i) => {
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
});
