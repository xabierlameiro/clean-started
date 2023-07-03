import { Keyword } from '@/src/constants/keywords.contants';
import { useLocalStorage } from '@/src/hooks/useLocalStorage';
import { useRouter } from 'next/router';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

export interface User {
    name: string;
    role: string[];
}

interface IAuthContext {
    user: User | null;
    // TODO: No entiendo por qué se queja de estas props sin uso
    // eslint-disable-next-line no-unused-vars
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const initialAuthState = {
    user: null,
    isLoading: true,
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => useContext(AuthContext);

interface IAuthProvider {
    children: ReactNode;
}

// TODO: Borrar esto cuando esté funcionando el login real
export const logedUser: User = {
    name: 'Michael',
    role: ['Manager'],
};

export const AuthProvider = ({ children }: IAuthProvider) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(initialAuthState.isLoading);
    const { setOnStorage, getFromStorage, removeFromStorage } = useLocalStorage();

    useEffect(() => {
        setIsLoading(true);
        const userStored = getFromStorage(Keyword.user);
        if (!userStored) router.push('/');
    }, []);

    const login = (user: User) => {
        setIsLoading(true);
        setUser(user);
        setOnStorage(Keyword.user, user);
        router.push('/plan');
    };

    const logout = () => {
        setIsLoading(true);
        setUser(null);
        removeFromStorage(Keyword.user);
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
