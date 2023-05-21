import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';

export default function HomePage() {
  return (
    <main className="flex  items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl main-gradient-text">fullCart</h2>
        <div className="flex gap-4 mt-16">
          <Link to={'login'}>
            <PrimaryButton type="button" content="Login" />
          </Link>
          <SecondaryButton type="button" content="Register" />
        </div>
      </div>
    </main>
  );
}
