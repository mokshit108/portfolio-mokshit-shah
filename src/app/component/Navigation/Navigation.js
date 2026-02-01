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
    <nav className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center bg-black/30 px-4 sm:px-7 py-2 sm:py-3 z-20 rounded-full backdrop-blur-md gap-3 sm:gap-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`
            relative group
            p-3 sm:p-3.5 rounded-full text-gray-300
            hover:bg-black/30 transition-colors duration-300
            ${activeSection === item.href ? 'bg-teal-500 text-white' : ''}
          `}
        >
          <FontAwesomeIcon icon={item.icon} className="w-5 h-5 sm:w-5 sm:h-5" />
          <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation