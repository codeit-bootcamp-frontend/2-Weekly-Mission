import Button from '@/components/Button';
import Input from '@/components/Input';
import styles from '@/components/SignUpForm.module.scss';
import classNames from 'classnames/bind';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log('회원가입 성공');
      router.push('/folder');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <form className={cx('form')} onSubmit={handleSubmit}>
      <div className={cx('input-group')}>
        <div>
          <label htmlFor="email">이메일</label>
          <Input
            id="email"
            className={cx('input')}
            name="email"
            type="text"
            placeholder="example@email.com"
            value={values.email}
            onChange={handleChange}
          />
          <p className={cx('error-message')}>이메일 입력해주세요</p>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Input
            id="password"
            className={cx('input')}
            name="password"
            type="password"
            placeholder=""
            value={values.password}
            onChange={handleChange}
          />
          <p className={cx('error-message')}>비밀번호를 입력해주세요</p>
        </div>
        <div>
          <label htmlFor="passwordRepeat">비밀번호 확인</label>
          <Input
            id="passwordRepeat"
            className={cx('input')}
            name="passwordRepeat"
            type="password"
            placeholder=""
            value={values.passwordRepeat}
            onChange={handleChange}
          />
          <p className={cx('error-message')}>비밀번호를 입력해주세요</p>
        </div>
      </div>
      <Button variant={'primary'} size={'large'} className={cx('button')}>
        회원가입
      </Button>
    </form>
  );
}
