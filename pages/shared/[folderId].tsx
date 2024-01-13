import { useRouter } from 'next/router';

export default function SharedPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const { q } = router.query;

  return (
    <div>
      <div>shared {folderId} 페이지</div>
      <p>{q}으로 검색한 결과입니다.</p>
    </div>
  );
}
