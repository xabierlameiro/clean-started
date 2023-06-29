// import { useRouter } from 'next/router';
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
    isLoading: false,
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
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(initialAuthState.isLoading);
    const router = useRouter();

    // TODO: Borrar cuando esté funcionando con la api
    useEffect(() => {
        !isLoading && !user ? router.push('/') : router.push('/plan');
    }, [user, isLoading, router]);

    const login = (user: User) => {
        setUser(user);
        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
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
