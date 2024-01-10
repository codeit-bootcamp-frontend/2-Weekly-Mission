import { useRouter } from 'next/router';
export default function FolderPage() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <div>folder 페이지</div>
      <p>{q}으로 검색한 결과입니다.</p>
    </div>
  );
}
