import React, { memo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, motionValue } from "framer-motion";
import {
  InfoWrapper,
  AboutMe,
  ImageWrapper,
  Image,
  StyledImage
} from './style';
import SelfImage1 from '../../assets/images/Jeffrey.jpg';

// import { LoremIpsum } from "./components/LoremIpsum";
const Info = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const transitionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    }
  }


  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  function Content({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    // console.log(scrollYProgress)
    const y = useParallax(scrollYProgress, 10);
    return (
      <section>
        <div ref={ref} style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end'}}>
          <div className='placeholder'>
            <AboutMe>
              {/* <div style={{ fontSize: '60px', padding: '50px', height:'100px', width: '100%', display: 'flex', justifyContent: 'center' }}>Hi, There!</div> */}
              <div className='info-title'>Hi, There!</div>
              <div className='info-content'>
                <div >My Name is Jeffrey (Qinsongen) You, Nice to meet you!</div>
                <div >I'm a full-stack software enginner with the passion and enthusiasm to embarce the new and innovating technologies. I bevelie the hardest part of anything is starting it, we should always say watch me, not why me.</div>
                <div >Thank you for taking the time to view my website. It's been a pleasure to share my work with you, and I hope it has sparked an interest in what we can achieve together. Have a nice day!</div>
              </div>
            </AboutMe>
            <ImageWrapper>
              <Image />
              {/* <StyledImage src={SelfImage1} alt="Description" /> */}
            </ImageWrapper>
          </div>
          <a href='https://docs.google.com/document/d/1HyClSqanL6X1097Kdl3cPoV5v9i7MiazLGINbZ8Y5m0/edit?usp=sharing' target="_blank" className='a-link'  rel="noreferrer">RESUME</a>
          {/* <button >RESUME</button> */}
          {/* https://docs.google.com/document/d/1rBok1OhQbxdUO_aC0h5MYeAUnf5int76Pz65SP8HaaQ/edit?usp=sharing */}
        </div>
        {/* <motion.h2 className='text' style={{ y }}>{`#00${id}`}</motion.h2> */}
        {/* <motion.h2 className='text' style={{ y, visibility: 'hidden' }}>{`#00${id}`}</motion.h2> */}
      </section>
    );
  }
  return (

    <div>
      <InfoWrapper>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0, duration: 0.3 }}>
            {/* <motion.div
              className="progress-bar"
              style={{ scaleX }}

            />
            {[1, 2, 3, 4, 5].map((image) => (
              <Content id={image} />
            ))} */}
            <Content id={1} />
        </motion.div>
      </InfoWrapper>
    </div>
  )
})

export default Info