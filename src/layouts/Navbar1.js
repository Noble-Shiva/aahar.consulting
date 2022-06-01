import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    // <div className="text-indigo-100 bg-indigo-700 dark:bg-gray-800 dark:text-gray-200">
    <div className="text-indigo-100 bg-indigo-700">
        <div className="flex items-center justify-between h-20 max-w-6xl px-6 mx-auto">
          <a className="text-2xl leading-none tracking-tight lg:text-4xl" href="#">
            aahar.consulting
          </a>
          <ul className="flex items-center space-x-8" role="navigation">
            <li>
              <a href="#" className='text-2xl'>Coming Soon</a>
            </li>
            <li>
              <a href="#" className='text-2xl'>Careers</a>
            </li>
            <li>
              <a href="#" className='text-2xl'>Contact Us</a>
            </li>
            {/* <li>
              <button
                onClick={() => toggleTheme()}
                className="p-2 rounded focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg
                    className="w-5 h-5"
                    aria-label="Apply light theme"
                    role="image"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    aria-label="Apply dark theme"
                    role="image"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </li> */}
            {/* <li>
              <a className="px-6 py-2 text-orange-100 bg-orange-600 rounded-full" href="#">
                Log in
              </a>
            </li> */}
          </ul>
        </div>
      </div>
  )
}

export default Navbar