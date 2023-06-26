import type { AppProps } from 'next/app';
import { useState } from 'react';
import { axiosInterceptor } from '@/interceptors/axios.interceptor';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);
    axiosInterceptor({ setLoading });
    if (loading) return <LoadingSpinner />;

    return <Component {...pageProps} />;
}
