import { ReactComponent as UserIcon } from '../../assets/icons/person.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function UserDashboard() {
  const {
    userStore: { user, logout },
  } = useStore();
  console.log(user);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          {user?.image ? (
            <img src={user.image} alt={user.displayName} />
          ) : (
            <UserIcon className="h-20 w-20 fill-cascade-blue mt-16 mb-8" />
          )}
          <h2 className="font-serif font-medium text-2xl">
            {user?.displayName}
          </h2>
          <div className="flex gap-4">
            <Link to={'/'} onClick={logout}>
              <Exit className="h-10 w-10 fill-mandy hover:fill-mandy-dark" />
            </Link>
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
        <div className="flex items-center absolute bottom-10 justify-center">
          <Link to={'newlist'}>
            <button className="w-20 h-20 text-white shadow-lg cursor-pointer text-2xl rounded-full bg-geraldine">
              +
            </button>
          </Link>
        </div>
      </main>
    </>
  );
});
