import {createContext, useContext, useState, ReactNode} from 'react';

export interface UserProfileResponse {
  uid?: string;
  fullName?: string;
  email?: string | any;
  phone?: string;
}

interface State {
  user: UserProfileResponse | undefined;
  saveUser: (params: UserProfileResponse) => void;
  removeUser: () => void;
}

const initState: State = {
  user: undefined,
  saveUser: () => {},
  removeUser: () => {},
};

export const AuthContext = createContext<State>(initState);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserProfileResponse | undefined>(undefined);

  const saveUser = (params: UserProfileResponse) => {
    setUser(params);
  };

  const removeUser = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{user, saveUser, removeUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
