import { useContext } from 'react';
import { ref, get, getDatabase, child } from 'firebase/database';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../contexts/authContext';

const useTicket = () => {
    const { user } = useContext(AuthContext);

    return useQuery({
        queryKey: ['Tickets'],
        queryFn: async () => {
            if (!user?.uid) {
                throw new Error('User ID is missing');
            }

            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, `tickets/${user.uid}`));

            if (snapshot.exists()) {
                const data = snapshot.val();
                const flatData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                return flatData;
            } else {
                throw new Error('No data available');
            }
        },
    });
};

export default useTicket;
