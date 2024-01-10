import style from './Footer.module.css'
import facebook from '@/src/assets/facebook.svg'
import twitter from '@/src/assets/twitter.svg'
import youtube from '@/src/assets/youtube.svg'
import instagram from '@/src/assets/instagram.svg'
import Link from 'next/link';
import Image from 'next/image';

const snsReferenceLinks = [
  {
    name:'facebook',
    iconImg:facebook,
    link:'https://www.facebook.com/?locale=ko_KR',
  },
  {
    name:'twitter',
    iconImg:twitter,
    link:'https://twitter.com/?lang=ko',
  },
  {
    name:'youtube',
    iconImg:youtube,
    link:'https://www.youtube.com/',
  },
  {
    name:'instagram',
    iconImg:instagram,
    link:'https://www.instagram.com/',
  }
]

const Icon = ({name, iconImg, link} :{ name:string, iconImg:string, link:string}) => {
  return(
    <Link target='_blank' rel='noopener noreferrer' href={link}>
      <Image src={iconImg} alt={name} className='icon'/>
    </Link>
  )
};

const Footer = () => {
  return(
    <footer className={`${style['footer']}`}>
      <div className={`${style['info']}`}>
        <p className={`${style['copyright']}`}>©codeit - 2023</p>
        <div className={`${style['privacy-faq']}`}>
          <a href="./privacy.html" className={`${style['privacy']}`}>Privacy Policy</a>
          <a href="./faq.html" className={`${style['faq']}`}>FAQ</a>
        </div>
        <div className={`${style['sns-reference-links']}`}>
          {snsReferenceLinks.map((reference) => <Icon key={reference.name} name={reference.name} iconImg={reference.iconImg} link={reference.link}></Icon>)}
        </div>
      </div>
    </footer>
  )
};

export default Footer;
