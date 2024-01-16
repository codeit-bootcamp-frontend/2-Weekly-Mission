import Button from '@/components/Button';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Button
        className={styles.button}
        variant={'primary'}
        size={'large'}
        onClick={() => alert('버튼 클릭')}
      >
        로그인
      </Button>
      <Button
        variant={'primary'}
        size={'small'}
        onClick={() => alert('버튼 클릭')}
      >
        로그인
      </Button>
    </>
  );
}
