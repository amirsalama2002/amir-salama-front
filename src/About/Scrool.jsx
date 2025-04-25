import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import "./Scrool.css";


export default function Scroll() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.h1
      className="scrool"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
       Amir Salama - Full-Stack Developer :
      </motion.h1>
      <div className="vo">
        <p>
            
Amir Salama is a passionate full-stack developer with a deep interest in building scalable and efficient web applications. He has extensive experience with both back-end technologies like Laravel, MVC, and front-end frameworks like React.js. Amir is dedicated to learning new programming concepts and continuously improving his skills.

He has worked on numerous projects, using his expertise to deliver high-quality software solutions. Amir is particularly skilled in integrating APIs, working with databases, and utilizing modern development tools to ensure optimal user experience and performance.

As a self-motivated developer, Amir is always eager to take on new challenges and contribute to the tech 
        </p>
      </div>
    </div>
  );
}
