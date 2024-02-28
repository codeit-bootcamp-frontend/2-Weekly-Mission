import { GetServerSidePropsContext } from 'next';

import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import {
  getFolderQueryKey,
  getLinkListQueryKey,
  getUserQueryKey,
} from '@/api/queryKeys';
import { getFolderApi, getLinkListApi, getSignedUserApi } from '@/api/api';

import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Layout from '@/components/common/Layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const folderId = context.query['folderId'];
  const queryClient = new QueryClient();
  const { accessToken } = context.req.cookies;

  await queryClient.prefetchQuery({
    queryKey: getFolderQueryKey(folderId),
    queryFn: () => getFolderApi(folderId),
  });

  await queryClient.prefetchQuery({
    queryKey: getUserQueryKey(),
    queryFn: () => getSignedUserApi(accessToken),
  });

  await queryClient.prefetchQuery({
    queryKey: getLinkListQueryKey(folderId),
    queryFn: () => getLinkListApi(folderId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function SharedPage({ dehydratedState }: { dehydratedState: DehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Layout>
        <SharedHeader />
        <SharedMain />
      </Layout>
    </HydrationBoundary>
  );
}

export default SharedPage;
