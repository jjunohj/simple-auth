import { loadableUserAtom } from 'data/atoms/userAtoms';
import { useAtom } from 'jotai';

export function UserPage() {
  const [user] = useAtom(loadableUserAtom);

  if (user.state === 'hasError') return <h1>Error</h1>;
  if (user.state === 'loading') return <h1>Loading...</h1>;

  return (
    <>
      <h1>User Info</h1>
      <p> Name: {user.data.name}</p>
      <p> Email: {user.data.email}</p>
    </>
  );
}
