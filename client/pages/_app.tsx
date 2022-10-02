import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app'
import React from 'react';
import Layout from '../components/layout/layout';
import '../styles/globals.css'

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <QueryClientProvider client={queryClient}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </QueryClientProvider>
}

export default MyApp;
