import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constents";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../utils/hoc";
import { services2 } from "../constents";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a passionate Front-End Developer With advanced skills in JavaScript and TypeScript, 
        specializing in frameworks like React and Laravel & Flutter. I craft intuitive, visually stunning, 
        and perfoemance-driven user interfaces tailored to your vision. Wthin a Keen eye for details and a focus on user experience, 
        I bring ideas to life with precision and creativity. lets's create something extraodinary together!
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} text-center mt-20`}>
                Skills i excel at and always looking forwars to continiuous development
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Personal Skills.
              </h2>
            </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services2.map((services2, index) => (
          <ServiceCard key={services2.title} index={index} {...services2} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
