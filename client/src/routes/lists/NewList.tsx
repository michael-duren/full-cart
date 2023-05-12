import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import categories from '../../components/categories/categories';
export default function NewList() {
  dayjs.extend(localizedFormat);

  return (
    <>
      <main className="flex flex-col items-center mx-4 justify-center">
        <div className="flex border-b-2 pb-2 w-full text-gray-700 items-center justify-between flex-1">
          <h2>New List</h2>
          <div>{dayjs(new Date()).format('LL')}</div>
        </div>
        <div className="flex mt-4 flex-col items-start justify-center gap-4">
          {categories.map((category) => {
            return (
              <div
                key={category.category}
                className="flex justify-between flex-col w-full"
              >
                <div>
                  <h3>{category.category}</h3>
                  <div>{<category.icon className="h-10 w-10" />}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
