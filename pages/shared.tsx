// shared 페이지

import { Layout } from '@/src/commons/feature-layout/Layout';
import { useGetFolder } from '@/src/folder/util/useGetFolder';
import { useSearchLink } from '@/src/link/util/useSearchLink';

export default function Shared() {
  const { data } = useGetFolder(); // 샘플 폴더 데이터
  const { profileImage, ownerName, folderName, links } = data;
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return <Layout>안녕</Layout>;
}
