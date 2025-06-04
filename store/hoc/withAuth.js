'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useUserStore from '../useUserStore';

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const user = useUserStore((state) => state.user);
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user]);

    if (!user) return null;

    return <Component {...props} />;
  };
};

export default withAuth;
