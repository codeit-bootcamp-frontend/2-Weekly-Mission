import type { AppProps } from 'next/app';
import { LinkProvider } from 'stores/provider/LinkProvider';
import { FolderProvider } from 'stores/provider/FolderProvider';
import '@/styles/base/base.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FolderProvider>
      <LinkProvider>
        <Component {...pageProps} />
      </LinkProvider>
    </FolderProvider>
  );
}
