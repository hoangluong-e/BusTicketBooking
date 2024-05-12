import { ref, get, getDatabase, child } from 'firebase/database';
import { useQuery } from '@tanstack/react-query';

const useSearchTicket = (date: string, routeName: string) => {
    return useQuery({
        queryKey: ['SRoutes', date],
        queryFn: async () => {
            try {
                const dbRef = ref(getDatabase());
                const snapshot = await get(child(dbRef, 'routes_search/' + date + '/' + routeName));

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
            } catch (error) {
                throw new Error('Error fetching routes');
            }
        }
    });
};

export default useSearchTicket;
