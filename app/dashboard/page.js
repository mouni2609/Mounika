'use client';
import withAuth from '../../store/withAuth';
import useUserStore from '../../store/useUserStore'; 
import { auth } from '../../lib/firebase';

function DashboardPage() {
  const user = useUserStore((state) => state.user);

  const handleLogout = async () => {
    await auth.signOut();
    location.reload(); 
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default withAuth(DashboardPage);
