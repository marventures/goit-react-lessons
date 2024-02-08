import { useUser } from '../contexts/UserContext';

export const UserMenu = () => {
  // the custom hook we created to get the value from our context
  const { isLoggedIn, username, handleLogin, handleLogout } = useUser();

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
};
