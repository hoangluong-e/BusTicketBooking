import { createUserWithEmailAndPassword } from "firebase/auth";
import { child, getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigator } from "./core/common";

const useSignUp = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const nav = useNavigator();

    const goBack = () => {
        nav.goBack();
    };

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangeName = (value: string) => {
        setName(value);
    };

    const onChangePhone = (value: string) => {
        setPhone(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const createUser = async (
        userId: any,
        name: string,
        email: string,
        phone: string,
    ) => {
        const userData = {
            name,
            email,
            phone,
            signUpDate: new Date().toISOString(),
        };
        const dbRef = ref(getDatabase());
        const childRef = child(dbRef, `users/${userId}`);
        await set(childRef, userData);
    };

    const handleSignUp = async () => {
        if (email && password) {
            try {
                setIsLoading(true);
                const result = await createUserWithEmailAndPassword(auth, email, password);
                const uid = result.user.uid;
                await createUser(uid, name, email, phone);
                goBack();
            } catch (err) {
                setError('Wrong something when login');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return {
        email,
        phone,
        name,
        password,
        isLoading,
        error,
        onChangeEmail,
        onChangeName,
        onChangePhone,
        onChangePassword,
        handleSignUp,
    };
};

export default useSignUp;
