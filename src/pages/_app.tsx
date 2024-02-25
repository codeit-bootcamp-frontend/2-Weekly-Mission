import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FormProvider, useForm } from 'react-hook-form';
import FullLayout from 'components/layout/FullLayout';
import EmptyLayout from 'components/layout/EmptyLayout';
import '@/styles/base/base.scss';

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }: AppProps) {
  const MainLayout = (Component as any).FullLayout || EmptyLayout;
  const queryClient = new QueryClient();
  const methods = useForm({ mode: 'all' });

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <FullLayout>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </FullLayout>
      </FormProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
