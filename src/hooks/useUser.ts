import { useContext } from 'react';
import { ref, get, getDatabase, child } from 'firebase/database';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../contexts/authContext';

const useUser = () => {
    const { user } = useContext(AuthContext);

    return useQuery({
        queryKey: ['Profile'],
        queryFn: async () => {
            if (!user?.uid) {
                throw new Error('User ID is missing');
            }

            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, `users/${user.uid}`));

            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                throw new Error('No data available');
            }
        }
    });
};

export default useUser;
