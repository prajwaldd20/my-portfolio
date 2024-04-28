import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:h-screen  "
    >
      <h1  className="text-4xl mt-5 font-semibold ml-10 underline  dark:text-white">
        About
      </h1>
      <h2 className="text-3xl ml-10 mt-6 dark:text-green-500 dark:font-semibold">Education</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-24 mt-4 lg:mt-8 dark:text-gray-100">
    <div className="lg:w-1/2">
    <p className="ml-10 lg:ml-12 text-base lg:text-lg font-medium text-gray-800 dark:text-gray-50 mb-0">
    Bachelor of Technology in Computer Science & Engineering
  </p>
  <p className="text-md lg:ml-16 ml-10"> (Graduation Year 2025)</p>
  <p className="ml-10 mb-5 italic lg:ml-16 dark:text-orange-300 text-orange-500"> Government College of Engineering, Amravati</p>
  <p className="ml-10 lg:ml-16 text-base lg:text-lg max-w-md text-gray-800 dark:text-gray-100">
    Being a Computer Science Student, I like to delve in the world of technology. This course helps me to get the knowledge about the working of computers, networks, web and much more. It helps me to enhance my problem solving skills. 
  </p>
          <h3 className="text-xl ml-12 mt-6 font-semibold">Major Course Work </h3>
          <ul className=" max-w-md space-y-1 text-black list-disc list-inside ml-16 mt-2 dark:text-gray-100">
            <li>Data Structures & Algorithms</li>
            <li>Object Oriented Programming</li>
            <li>Database Management Systems</li>
            <li>Computer Networks</li>
            <li>Compiler Design</li>
          </ul>
        </div>
        <img
          src="/images/gcoea.jpg"
          alt="College"
          className="h-48 lg:h-auto lg:w-1/3 rounded-lg shadow-lg lg:mr-10 ltransform transition-transform hover:scale-105 dark:shadow-lg dark:shadow-slate-100"
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.5, delay: 0.3 }}

        />
      </div>
    </div>
  );
};

export default About;
