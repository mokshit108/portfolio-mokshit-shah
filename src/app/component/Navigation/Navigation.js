'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCode,
  faBriefcase,
  faBook,
  faEnvelope,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('#home')

  const navItems = [
    { href: '#home', icon: faHome, label: 'Home' },
    { href: '#about', icon: faCode, label: 'Skills' },
    { href: '#experience', icon: faBriefcase, label: 'Experience' },
    { href: '#education', icon: faGraduationCap, label: 'Education' },
    { href: '#projects', icon: faBook, label: 'Projects' },
    { href: '#contact', icon: faEnvelope, label: 'Contact' }
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setActiveSection(href)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed bottom-3 min-[375px]:bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center bg-black/30 px-1.5 min-[375px]:px-2 sm:px-4 md:px-7 py-1.5 min-[375px]:py-2 sm:py-2.5 md:py-3 z-20 rounded-full backdrop-blur-md gap-1 min-[375px]:gap-1.5 sm:gap-2 md:gap-3 max-w-[calc(100vw-16px)] min-[375px]:max-w-[calc(100vw-20px)] sm:max-w-none overflow-x-hidden">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`
            relative group
            p-2 min-[375px]:p-2.5 sm:p-3 md:p-3.5 rounded-full text-gray-300
            hover:bg-black/30 transition-colors duration-300
            min-w-[36px] min-h-[36px] min-[375px]:min-w-[40px] min-[375px]:min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center
            ${activeSection === item.href ? 'bg-teal-500 text-white' : ''}
          `}
        >
          <FontAwesomeIcon icon={item.icon} className="w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:block absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation