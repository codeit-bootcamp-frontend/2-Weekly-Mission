import ButtonLink from '@/components/ButtonLink';
import SearchForm from '@/components/SearchForm';
import buttonLinkStyles from '@/components/ButtonLink.module.scss';
import searchFormStyles from '@/components/SearchForm.module.scss';

export default function Home() {
  return (
    <>
      <ButtonLink
        href={'/signin'}
        className={buttonLinkStyles['button-primary']}
      >
        로그인
      </ButtonLink>
      <SearchForm path="/folder" className={searchFormStyles['search-form']} />
      <SearchForm path="/shared" className={searchFormStyles['search-form']} />
    </>
  );
}
