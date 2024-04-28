import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div name="home" className="flex  lg:h-screen flex-col lg:flex-row mt-12 lg:mt-12 pt-2 mx-4 lg:mx-10 gap-6 lg:gap-10">
      {/* Intro section */}
      <div
        className="lg:w-1/2 align-middle mt-12 "
        variants={fadeIn("up, 0.5")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-4xl lg:text-6xl xl:text-5xl mb-6 lg:mb-8 font-semibold lg:mt-10 dark:text-white " >
          Prajwal Dahake
        </h1>
        <motion.div className="uppercase leading-2 mb-8 font-mono font-semibold">
          <span className="text-4xl lg:text-4xl font-semibold dark:text-slate-50">I'm a </span>
          <TypeAnimation
            sequence={["Learner", 1500, "Programmer", 1500, "Developer", 1500]}
            speed={50}
            className="text-5xl lg:text-8xl xl:text-5xl text-blue-600 font-semibold dark:text-green-400 "
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
        <p className="text-base lg:text-lg xl:text-xl mb-8 max-w-md lg:max-w-xl font-sans text dark:text-gray-50  text-justify">
        I enjoy creating websites, always honing my skills through real projects. With each task, I grow more proficient, crafting digital experiences that delight users. My journey in web development is a continuous adventure, filled with learning and innovation. Through practice and dedication, I strive to create impactful solutions that make a difference.
        </p>
        <a
  className="text-white shadow-lg bg-blue-700 hover:bg-blue-900 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-base px-5 py-2.5 inline-flex items-center dark:shadow-md dark:shadow-slate-500 transform transition-transform hover:scale-105"
  href="/resume2_pd.pdf"
  download="resume2_pd.pdf"
>
  Resume
  <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
  </svg>
</a>
      </div>
      {/* My image */}
      <div className="flex justify-center lg:justify-end lg:w-1/2 mt-24">
        <motion.img
          src="images/myimage.jpg"
          alt="My Image"
          className="h-auto lg:max-h-96 lg:max-w-96 rounded-full shadow-2xl p-1 lg:mr-24  bg-slate-400 dark:shadow-md dark:shadow-slate-100 transform transition-transform hover:scale-105"
        //   variants={fadeIn("right, 0.5")}
        //   initial="hidden"
        //   whileInView={"show"}
        //   viewport={{ once: false, amount: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Intro;
