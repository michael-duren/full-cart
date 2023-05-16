import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function LogoSpinner() {
  return (
    <>
      <div className="fixed animate-pulse top-0 left-0 h-screen w-screen flex flex-col items-center justify-center">
        <Logo className="w-12 h-12 " />
        <div>
          <span className="font-serif text-geraldine">full</span>
          <span className="font-serif text-h-pink">Cart</span>
        </div>
      </div>
    </>
  );
}
