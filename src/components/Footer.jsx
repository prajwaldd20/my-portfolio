import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGithub, SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const Footer = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-slate-300 dark:bg-gray-800 dark:text-white py-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul className="flex flex-wrap space-y-2 flex-col">
            <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://www.linkedin.com/in/prajwal-dahake-165801223/')} className="hover:text-gray-600 flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://instagram.com')} className="hover:text-gray-600 flex items-center">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://twitter.com')} className="hover:text-gray-600 flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://facebook.com')} className="hover:text-gray-600 flex items-center">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              
           
            </ul>
          </div>
          {/* Coding Profiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
            <ul className="flex flex-wrap flex-col space-y-2">
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://github.com/prajwaldd20')} className="hover:text-gray-600 flex items-center">
                  <SiGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://codechef.com')} className="hover:text-gray-600 flex items-center">
                  <SiCodechef className="mr-2" /> Codechef
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://leetcode.com')} className="hover:text-gray-600 flex items-center">
                  <SiLeetcode className="mr-2" /> Leetcode
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" onClick={() => openLinkInNewTab('https://hackerrank.com')} className="hover:text-gray-600 flex items-center">
                  <SiHackerrank className="mr-2" /> HackerRank
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
