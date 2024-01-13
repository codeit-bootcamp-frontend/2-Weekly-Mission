import Head from 'next/head';
import FolderUser from '@/src/components/folderUser/FolderUser';
import Nav from '@/src/components/nav/Nav';
import Footer from '@/src/components/footer/Footer';
import SearchBar from '@/src/components/main/SearchBar';
import CardList from '@/src/components/main/CardList';

export default function SharedPage() {
  return (
    <>
      <Head>
        <title>SharedPage</title>
      </Head>
      <div>
        <header>
          <Nav />
          <FolderUser/>
        </header>
        <main>
          <SearchBar />
          <CardList />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
