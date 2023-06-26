import axios from 'axios';
import { baseUrl } from '@/constants/globals';

const endpoint = {
    getAll: '/character/',
    getOne: (id: number) => `/character/${id}`,
    create: '/character/',
    update: (id: number) => `/character/${id}`,
    delete: (id: number) => `/character/${id}`,
};

export async function getAllMorty<T>(): Promise<T> {
    return await axios.get(baseUrl + endpoint.getAll);
}

export async function getOneMorty<T>(id: number): Promise<T> {
    return await axios.get(baseUrl + endpoint.getOne(id));
}

export async function createMorty<T>(data: T): Promise<T> {
    return await axios.post(baseUrl + endpoint.create, data);
}

export async function udpateMorty<T>(id: number, data: T): Promise<T> {
    return await axios.put(baseUrl + endpoint.update(id), data);
}

export async function deleteMorty<T>(id: number): Promise<T> {
    return await axios.delete(baseUrl + endpoint.delete(id));
}
