import { child, getDatabase, ref, set } from "firebase/database";

const createData = async () => {
    try {
        const dbRef = ref(getDatabase());
        const routesRef = child(dbRef, 'routes_search');

        // Duyệt qua mỗi tuyến đường và thêm chúng vào danh sách tuyến đường
        for (const route of data) {
            await set(child(routesRef, route.date), route);
        }

        console.log('Route list created successfully');
    } catch (error) {
        console.error('Error creating route list:', error);
    }
};
const data = [
    {

        "Hồ Chí Minh - Đà Nẵng": {
            'round22012': {
                price:
                    "900.000VND",
                startPoint:
                    "Hồ Chí Minh"
                ,
                endPoint:
                    "Đà Nẵng",
                time: '06:00',
                seatBooked: '8A, 8B'
            },
            'round22443': {
                price:
                    "850.000VND",
                startPoint:
                    "Hồ Chí Minh"
                ,
                endPoint:
                    "Đà Nẵng",
                time: '08:00',
                seatBooked: ''
            }, 'round22654': {
                price:
                    "850.000VND",
                startPoint:
                    "Hồ Chí Minh"
                ,
                endPoint:
                    "Đà Nẵng",
                time: '09:00',
                seatBooked: '1A, 8B, 8D, 2C'
            },
            'round43676': {
                price:
                    "950.000VND",
                startPoint:
                    "Hồ Chí Minh"
                ,
                endPoint:
                    "Đà Nẵng",
                time: '09:00',
                seatBooked: '1A, 8B, 8D, 2C, 1, 2C'
            },
            'round22665': {
                price:
                    "850.000VND",
                startPoint:
                    "Hồ Chí Minh"
                ,
                endPoint:
                    "Đà Nẵng",
                time: '09:00',
                seatBooked: ''
            },
        },
        date: '30-05-2024',
    },
];

export default createData;