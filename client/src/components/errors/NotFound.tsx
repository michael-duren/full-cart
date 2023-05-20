import { FaSearch } from 'react-icons/fa';
import PrimaryButton from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex mt-8 flex-col items-center">
        <FaSearch size={40} />
        <h2 className="text-xl mt-4">
          Ooops, we can't find what you're looking for...
        </h2>
      </div>
      <div className="mt-8">
        <PrimaryButton type="submit">
          <Link to={'/'}>Return</Link>
        </PrimaryButton>
      </div>
    </main>
  );
}
