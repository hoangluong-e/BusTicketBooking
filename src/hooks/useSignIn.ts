import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext, UserProfileResponse } from '../contexts/authContext';
import { useNavigator } from './core/common';
import { auth } from '../config/firebase';
interface SignInHooks {
    email: string;
    password: string;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
    handleSignIn: () => Promise<void>;
    goToSignUp: () => void;
}

export const useSignIn = (): SignInHooks => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { saveUser } = useContext(AuthContext);
    const nav = useNavigator();

    const onChangeEmail = (value: string) => setEmail(value);
    const onChangePassword = (value: string) => setPassword(value);

    const handleSignIn = async () => {
        if (email && password) {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                const uid = result.user.uid;
                const user: UserProfileResponse = {
                    uid: uid,
                };
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