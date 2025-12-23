"use client"

import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1629]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#3bc7e5] text-3xl font-bold">L</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("summary")}
            className="text-gray-300 hover:text-[#3bc7e5] transition-colors"
          >
            <span className="text-[#3bc7e5] mr-1 opacity-70 text-sm">01.</span>
            <span>About me</span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-300 hover:text-[#3bc7e5] transition-colors"
          >
            <span className="text-[#3bc7e5] mr-1 opacity-70 text-sm">02.</span>
            <span>Experience</span>
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="text-gray-300 hover:text-[#3bc7e5] transition-colors"
          >
            <span className="text-[#3bc7e5] mr-1 opacity-70 text-sm">03.</span>
            <span>Certifications</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-300 hover:text-[#3bc7e5] transition-colors"
          >
            <span className="text-[#3bc7e5] mr-1 opacity-70 text-sm">04.</span>
            <span>Projects</span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-300 hover:text-[#3bc7e5] transition-colors"
          >
            <span className="text-[#3bc7e5] mr-1 opacity-70 text-sm">05.</span>
            <span>Skills & Tools</span>
          </button>
          <a
            href="/CV_Do Tan Luc.pdf"
            download
            className="inline-flex items-center bg-[#3bc7e5] hover:bg-[#2ba5c3] text-black px-4 py-2 rounded-md transition-colors font-medium"
          >
            <FileText size={16} className="mr-2" />
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#3bc7e5] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1629] border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("summary")}
              className="text-gray-300 hover:text-[#3bc7e5] transition-colors text-left py-2"
            >
              <span className="text-[#3bc7e5] mr-1 opacity-70">01.</span>
              <span>About me</span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-[#3bc7e5] transition-colors text-left py-2"
            >
              <span className="text-[#3bc7e5] mr-1 opacity-70">02.</span>
              <span>Experience</span>
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-300 hover:text-[#3bc7e5] transition-colors text-left py-2"
            >
              <span className="text-[#3bc7e5] mr-1 opacity-70">03.</span>
              <span>Certifications</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-[#3bc7e5] transition-colors text-left py-2"
            >
              <span className="text-[#3bc7e5] mr-1 opacity-70">04.</span>
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-[#3bc7e5] transition-colors text-left py-2"
            >
              <span className="text-[#3bc7e5] mr-1 opacity-70">05.</span>
              <span>Skills & Tools</span>
            </button>
            <a
              href="/CV_Do Tan Luc.pdf"
              download
              className="inline-flex items-center bg-[#3bc7e5] hover:bg-[#2ba5c3] text-black px-4 py-2 rounded-md transition-colors font-medium w-full justify-center"
            >
              <FileText size={16} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
