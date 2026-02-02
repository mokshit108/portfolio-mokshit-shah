'use client'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-3 right-3 min-[375px]:top-4 min-[375px]:right-4 sm:top-6 sm:right-6 z-50 p-2 min-[375px]:p-2.5 sm:p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 min-w-[36px] min-h-[36px] min-[375px]:min-w-[40px] min-[375px]:min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center ${
        theme === 'light' 
          ? 'bg-white/90 hover:bg-white border-2 border-gray-300 shadow-xl' 
          : 'bg-gray-900/90 hover:bg-gray-800 border-2 border-gray-700 shadow-xl'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Moon icon - click to switch to dark mode
        <svg
          className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 sm:w-6 sm:h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        // Sun icon - click to switch to light mode
        <svg
          className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 sm:w-6 sm:h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle

