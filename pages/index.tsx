import ButtonLink from '@/components/ButtonLink';
import buttonLinkStyles from '@/components/ButtonLink.module.scss';

export default function Home() {
  return (
    <>
      <ButtonLink
        href={'/signin'}
        className={buttonLinkStyles['button-primary']}
      >
        로그인
      </ButtonLink>
    </>
  );
}
