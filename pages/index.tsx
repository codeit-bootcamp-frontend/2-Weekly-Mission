import Button from '@/components/Button';
import Input from '@/components/Input';
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
      <Input
        type="email"
        placeholder="이메일을 입력하세요"
        className={styles.input}
      />
      <Input type="password" placeholder="비밀번호를 입력하세요" />
    </>
  );
}
