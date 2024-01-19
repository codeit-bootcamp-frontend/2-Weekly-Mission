import { LinkType } from "@/types/type";
import LinkCard from "../LinkCard/LinkCard";
import style from './CardSection.module.css'

const CardSection = ({links} : {links:LinkType[]}) => {
  return(
    <section className={style['card--section']}>
      {links?.map((link) => <LinkCard key={link.id} link={link} />)}
    </section>
  )
};

export default CardSection;
