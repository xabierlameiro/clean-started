import { api } from '@/src/constants/api';
const { baseUrl } = api;

export async function getAllService<T>(endpoint: string): Promise<T[]> {
    const url = baseUrl + endpoint;
    return await fetch(url)
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => console.log(error));
}

// export async function getOneMorty<T>(id: number): Promise<T> {
//     return await axios.get(baseUrl + endpoint.getOne(id));
// }

// export async function createMorty<T>(data: T): Promise<T> {
//     return await axios.post(baseUrl + endpoint.create, data);
// }

// export async function udpateMorty<T>(id: number, data: T): Promise<T> {
//     return await axios.put(baseUrl + endpoint.update(id), data);
// }

// export async function deleteMorty<T>(id: number): Promise<T> {
//     return await axios.delete(baseUrl + endpoint.delete(id));
// }
