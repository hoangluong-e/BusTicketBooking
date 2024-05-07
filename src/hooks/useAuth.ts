import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../config/firebase";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, u => {
            if (user) {
                setUser(u);
            } else {
                'You do not sign in'
            }
            return unsub;
        })
    })

    return { user }
}

export default useAuth