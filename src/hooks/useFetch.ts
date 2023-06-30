import { useEffect, useRef, useState } from 'react';
import { api } from '../constants/api';
const { baseUrl } = api;

export const useFetch = (endpoint: string) => {
    const url = baseUrl + endpoint;
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [hasError, setHasError] = useState('');
    const dialogRef = useRef(null);
    const [open, setOpen] = useState(false);

    const getFetch = async () => {
        setIsFetching(true);

        try {
            // TODO: quitar el timeout cuando se conecte a la api real
            setTimeout(async () => {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data.results);
                setData(data);
                setIsFetching(false);
            }, 1000);
        } catch (error) {
            setHasError(`Error fetching=> ${JSON.stringify(error)}`);
        }
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    useEffect(() => {
        !open && setHasError('');
    }, [open]);

    return {
        data,
        isFetching,
        hasError,
        open,
        setOpen,
        setHasError,
        dialogRef,
    };
};
