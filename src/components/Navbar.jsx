import { useState } from 'react';
import useTheme from '../context.js/Context';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;

    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'skills'
    },
    {
      id: 4,
      link: 'projects'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-slate-200 dark:bg-slate-800 z-50 ">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-4xl font-medium font-itali dark:text-green-300">My Portfolio</h1>
            <div className="flex items-center">
              <ul className={`list hidden lg:flex gap-8 text-base dark:text-yellow-200`}>
                {Links.map(({ id, link }) => (
                  <li key={id} className="capitalize cursor-pointer hover:text-green-700 dark:hover:text-green-500">
                    <Link to={link} smooth duration={700}>{link}</Link>
                  </li>
                ))}
              </ul>
              <label className="inline-flex items-center cursor-pointer ml-3">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={onChangeBtn}
                  checked={themeMode === 'dark'}
                />
                <div className={`relative w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-1 rounded-full peer $ peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500
                lg:ml-20
                `} />
              </label>
              <button className="lg:hidden dark:text-gray-50" onClick={toggleMenu}>
                <svg
                  className={`w-6 h-6`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden p-4">
            <ul className="flex flex-col gap-4 dark:text-yellow-200">
              {Links.map(({ id, link }) => (
                <li key={id} className="capitalize cursor-pointer hover:text-green-700 dark:hover:text-green-500">
                  <Link 
                  onClick={()=>setIsMenuOpen(!isMenuOpen)}
                  to={link} smooth duration={700}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <style jsx>{`
        .list ul li {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .list ul li::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: gray;
          transition: width 0.3s ease;
        }
        
        .list ul li:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Navbar;
