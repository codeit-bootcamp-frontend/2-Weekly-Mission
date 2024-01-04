import { Cta } from '@/src/commons/ui-cta/Cta';
import styles from './LinkForm.module.scss';
import classNames from 'classnames/bind';
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  forwardRef,
} from 'react';

const cx = classNames.bind(styles);

// 링크 입력폼 프롭 타입 선언
type LinkFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

// UI적 측면의 링크폼 컴포넌트
export const LinkForm = forwardRef<HTMLFormElement, LinkFormProps>(
  ({ value, onChange, onSubmit }: LinkFormProps, ref) => {
    // 제출 이벤트 콜백
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(e);
    };

    return (
      <form ref={ref} className={cx('form')} onSubmit={handleSubmit}>
        <div className={cx('input-box')}>
          <img className={cx('icon')} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx('input')}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={value}
            onChange={onChange}
          />
        </div>
        <button className={cx('button')} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    );
  }
);

LinkForm.displayName = 'LinkForm';
