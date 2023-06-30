// TODO: Borrar cuando esté conectado a la api
import { logedUser } from '@/src/context/auth/AuthContext';

export async function loginService() {
    return await Promise.resolve(logedUser);
}
