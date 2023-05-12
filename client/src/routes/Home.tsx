import { ReactComponent as UserIcon } from '../assets/icons/person.svg';
import { ReactComponent as Exit } from '../assets/icons/exit.svg';
import { ReactComponent as SettingIcon } from '../assets/icons/setting.svg';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <UserIcon className="h-20 w-20 fill-cascade-blue mt-16 mb-8" />
          <h2 className="font-serif font-medium text-2xl">Michael Duren</h2>
          <div className="flex gap-4">
            <Exit className="h-10 w-10 fill-mandy hover:fill-mandy-dark" />
            <SettingIcon className="h-10 w-10 stroke-h-pink hover:stroke-h-pink-dark" />
          </div>
        </div>
        {/* lists */}
        <div className="flex my-8 gap-4 min-h-[15rem] ">
          <div className="flex flex-col p-2 2">
            <h3 className="text-mandy font-medium">Your Lists</h3>
          </div>
          <div className="flex flex-col p-2 ">
            <h3 className="text-cascade-blue font-medium">Your Trips</h3>
          </div>
        </div>
        {/* button below */}
        <div className="flex items-center justify-center">
          <button className="w-20 h-20 absolute bottom-10  text-white shadow-lg cursor-pointer text-2xl rounded-full bg-geraldine">
            +
          </button>
        </div>
      </main>
    </>
  );
}
