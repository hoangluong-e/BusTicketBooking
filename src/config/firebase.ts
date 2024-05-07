import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAwFsLOCvEJ7-SjQUeQKU2UG9UY8QqcQvo",
    authDomain: "busticketbooking-dee4c.firebaseapp.com",
    projectId: "busticketbooking-dee4c",
    storageBucket: "busticketbooking-dee4c.appspot.com",
    messagingSenderId: "560817759937",
    appId: "1:560817759937:web:4fd255b044d521f3cc9640"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
