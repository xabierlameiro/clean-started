import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    setLoading: Dispatch<SetStateAction<boolean>>;
};

export const axiosInterceptor = ({ setLoading }: Props) => {
    const handleRequest = (request: InternalAxiosRequestConfig<any>) => {
        setLoading(true);
        const token = 'Yo soy tu token';
        // const token = localStorage.getItem('access_token');
        if (!!token) {
            request.headers.authorization = `Bearer ${token}`;
        }

        request.headers['Content-Type'] = 'application/json';
        request.headers['accept'] = 'application/json';
        setLoading(false);
        return request;
    };

    axios.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
        return handleRequest(request);
    });

    const handleResponseSuccess = (response: AxiosResponse) => {
        return response;
    };

    const handleResponseError = (error: AxiosError) => {
        return Promise.reject(error);
    };

    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
};
