import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function NavBar() {
  return (
    <header className="flex mb-10 justify-between ">
      <h1 className="text-lg">
        <div>
          <span className="font-serif text-geraldine">full</span>
          <span className="font-serif text-h-pink">Cart</span>
        </div>
      </h1>
      <div>
        <Logo className="w-8 h-8" />
      </div>
    </header>
  );
}