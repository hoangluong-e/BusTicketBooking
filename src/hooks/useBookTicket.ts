import { ref, getDatabase, update, child, set } from 'firebase/database';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const useBookTicket = () => {
    const { user } = useContext(AuthContext);

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['Tickets'],
        mutationFn: async (params: { idT: string, dataT: object }) => {
            const { idT, dataT } = params;
            if (!user?.uid) {
                throw new Error('User ID is missing');
            }
            try {
                const dbRef = ref(getDatabase());
                const childRef = child(dbRef, 'tickets/' + user.uid + '/' + idT);
                await set(childRef, dataT);
            } catch (error) {
                throw new Error('Error booking ticket');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['Tickets'] })
        },
    });
};

export default useBookTicket;