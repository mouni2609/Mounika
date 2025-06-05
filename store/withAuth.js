'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useUserStore from './useUserStore';

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const user = useUserStore((state) => state.user);

    useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user, router]);

    if (!user) return null;

    return <Component {...props} />;
  };
};

export default withAuth;

