import { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import { LogoDigital } from '@/assets/images/LogoDigital';
import { getAllService } from '@/src/services/base/base.services';
import { MortyType } from '../types/Morty';
import { api } from '../constants/api';
import { useForm } from '../hooks/useForm';
import { Eye } from '../assets/icons/Eye';
import { EyeSlash } from '../assets/icons/EyeSlash';
import { loginService } from '../services/auth/auth.services';
import { useAuthContext } from '../context/auth/AuthContext';
import { useRouter } from 'next/router';

type Props = {
    morty: any;
};

type LoginFormType = {
    email: string;
    password: string;
};

const initialValues = {
    email: '',
    password: '',
};

const Login = ({ morty }: Props) => {
    const router = useRouter();
    const { formData, handleInputChange } = useForm<LoginFormType>(initialValues);
    const [showPassword, setShowPassword] = useState(false);
    const { user, login, isLoading, setIsLoading } = useAuthContext();

    // TODO: Borrar cuando esté funcionando con la api
    useEffect(() => {
        !isLoading && user && router.push('/plan');
    }, [user]);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await loginService();
        login(result);
    };

    if (!morty) return <p>Cargando....</p>;

    return (
        <>
            <Head>
                <title>Inicio de sesión</title>
                <meta name="description" content="Inicio de sesión" />
            </Head>
            <main data-testid="content">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center bg-gray-400">
                        <LogoDigital height={80} width={0} />
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={onHandleSubmit} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Correo electrónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange(e)}
                                        disabled={false}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Contraseña
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            ¿Has olvidado la contraseña?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2 relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'password' : 'text'}
                                        placeholder="Password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        name="password"
                                        autoComplete="password"
                                        value={formData.password}
                                        onChange={(e) => handleInputChange(e)}
                                        disabled={false}
                                        required
                                    />
                                    {showPassword ? (
                                        <EyeSlash
                                            onClick={togglePassword}
                                            className="h-5 w-5 absolute top-2 right-2"
                                            alt="delete row"
                                        />
                                    ) : (
                                        <Eye
                                            onClick={togglePassword}
                                            className="h-5 w-5 absolute top-2 right-2"
                                            alt="delete row"
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {JSON.stringify(morty)}
            </main>
        </>
    );
};

export async function getServerSideProps() {
    const data = await getAllService<MortyType>(api.endpoint.morty.getAll);

    return {
        props: {
            morty: data[0],
        },
    };
}

export default Login;
