import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext, UserProfileResponse } from '../contexts/authContext';
import { useNavigator } from './core/common';
import { auth } from '../config/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

interface SignInHooks {
    email: string;
    password: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    handleSignIn: () => Promise<void>;
    goToSignUp: () => void;
}

const getUserData = async (userId: string) => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `users/${userId}`));

    if (snapshot.exists()) {
        console.log(snapshot.val());
        return (snapshot.val());
    } else {
        console.log("No data available");
    }

}

export const useSignIn = (): SignInHooks => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { saveUser } = useContext(AuthContext);
    const [user, setUser] = useState<UserProfileResponse>({});
    const nav = useNavigator();

    const onChangeEmail = (value: string) => setEmail(value);
    const onChangePassword = (value: string) => setPassword(value);

    const handleSignIn = async () => {
        if (email && password) {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                const uid = result.user.uid;
                const userData = getUserData(uid);
                setUser({ uid: uid });
                saveUser(user);
            } catch (err) {
                console.log('error login:', err);
            }
        }
    };

    const goToSignUp = () => nav.navigate('SignUp');

    return {
        email,
        password,
        onChangeEmail,
        onChangePassword,
        handleSignIn,
        goToSignUp,
    };
};