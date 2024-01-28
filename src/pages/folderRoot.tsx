import React from 'react';
import Footer from '../Components/Footer/Footer';
import FolderNavBar from '../Components/Folder/FolderNavBar';
import FolderHeader from '../Components/Folder/FolderHeader';
import FolderMain from '../Components/Folder/FolderMain';

export default function FolderRoot() {
  return (
    <>
      <FolderNavBar />
      <FolderHeader />
      <FolderMain />
      <Footer />
    </>
  );
}
