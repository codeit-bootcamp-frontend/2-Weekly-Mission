import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Facebook from '@/public/images/facebook.svg';
import Instagram from '@/public/images/instagram.svg';
import Twitter from '@/public/images/twitter.svg';
import Youtube from '@/public/images/youtube.svg';
import styles from './Footer.module.css';

export default function Footer() {
  const snsList = SNSList.map(({ title, link, imageSrc, altMessage }) => (
    <li key={title}>
      <SNS link={link} imageSrc={imageSrc} altMessage={altMessage} />
    </li>
  ));

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>©codeit - 2023</p>
        <ul className={styles.policyLinks}>
          <li>
            <Link className={styles.policyLink} href='/privacy'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className={styles.policyLink} href='/faq'>
              FAQ
            </Link>
          </li>
        </ul>
        <ul className={styles.snsContainer}>{snsList}</ul>
      </div>
    </div>
  );
}

function SNS({ link, imageSrc, altMessage }) {
  return (
    <Link href={link} target='_blank' rel='noreferrer noopener'>
      <Image className={styles.snsIcon} src={imageSrc} alt={altMessage} width={20} height={20} />
    </Link>
  );
}

const SNSList = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/',
    imageSrc: Facebook,
    altMessage: '페이스북 홈페이지로 이동하는 페이스북 아이콘',
  },
  {
    title: 'twitter',
    link: 'https://www.twitter.com/',
    imageSrc: Twitter,
    altMessage: '트위터 홈페이지로 이동하는 트위터 아이콘',
  },
  {
    title: 'youtube',
    link: 'https://www.youtube.com/',
    imageSrc: Youtube,
    altMessage: '유튜브 홈페이지로 이동하는 유튜브 아이콘',
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/',
    imageSrc: Instagram,
    altMessage: '인스타그램 홈페이지로 이동하는 인스타그램 아이콘',
  },
];
