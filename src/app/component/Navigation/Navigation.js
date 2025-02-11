'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCode,
  faBriefcase,
  faBook,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('#home')

  const navItems = [
    { href: '#home', icon: faHome, label: 'Home' },
    { href: '#about', icon: faCode, label: 'About' },
    { href: '#experience', icon: faBriefcase, label: 'Experience' },
    { href: '#projects', icon: faBook, label: 'Projects' },
    { href: '#contact', icon: faEnvelope, label: 'Contact' }
  ]

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center bg-black/30 px-7 py-3 z-20 rounded-full backdrop-blur-md gap-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setActiveSection(item.href)}
          className={`
            p-3.5 rounded-full text-gray-300 text-xl
            hover:bg-black/30 transition-colors duration-300
            ${activeSection === item.href ? 'bg-teal-500 text-white' : ''}
          `}
        >
          <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
        </Link>
      ))}
    </nav>
  )
}

export default Navigation