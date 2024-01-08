import CTA from 'components/common/CTA';

import styles from './AddLinkBar.module.css';
// import { useEffect, useRef, useState } from 'react';

export default function AddLinkBar() {
  return (
    <div className={styles.AddLinkBar__container}>
      <div className={styles.AddLinkBar}>
        <img src="/assets/link.svg"></img>
        <input className={styles.AddLinkBar__input} placeholder="링크를 추가해보세요" />
        <CTA />
      </div>
    </div>
  );

  // const [hasHidden, setHasHidden] = useState(false);
  // const addLinkBarRef = useRef(null);

  // function handleIntersection(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting > 0) setHasHidden(false);
  //     else setHasHidden(true);
  //   });
  // }

  // const observer = new IntersectionObserver(handleIntersection, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.1,
  // });

  // useEffect(() => {
  //   observer.observe(addLinkBarRef.current);
  //   return () => {
  //     observer.unobserve(addLinkBarRef.current);
  //   };
  // }, []);

  // return (
  //   <div>
  //     <div ref={addLinkBarRef} className="AddLinkBar__container">
  //       <div className="AddLinkBar">
  //         <img src={linkIcon}></img>
  //         <input className="AddLinkBar__input" placeholder="링크를 추가해보세요" />
  //         <CTA />
  //       </div>
  //     </div>

  //     <div className={`AddLinkBar__container_forSticked StickToBottom ${!hasHidden && 'hide'}`}>
  //       <div className="AddLinkBar">
  //         <img src={linkIcon}></img>
  //         <input className="AddLinkBar__input" placeholder="링크를 추가해보세요" />
  //         <CTA />
  //       </div>
  //     </div>
  //   </div>
  // );
}
