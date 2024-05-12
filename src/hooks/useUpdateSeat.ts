import { ref, getDatabase, update } from 'firebase/database';
import { useMutation } from '@tanstack/react-query';

const useUpdateSeat = () => {
    return useMutation({
        mutationKey: ['SRoutes'],
        mutationFn: async (params: { date: string, routeName: string, id: string, data: object }) => {
            const { date, routeName, id, data } = params;
            const updates: Record<string, any> = {};
            updates['routes_search/' + date + '/' + routeName + '/' + id] = data;
            try {
                const dbRef = ref(getDatabase());
                await update(dbRef, updates);
            } catch (error) {
                throw new Error('Error booking ticket');
            }
        }
    });
};

export default useUpdateSeat;