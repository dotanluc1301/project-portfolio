import type { Metadata } from "next"
import Link from "next/link"
import data from "./data.json"
import SummarySection from "@/components/summary-section"
import ExperienceSection from "@/components/experience-section"
import CertificationsSection from "@/components/certifications-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import Header from "@/components/header"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: `Portfolio | ${data.title}`,
  description: `Personal portfolio website showcasing skills and experience as a ${data.title}`,
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a1629] text-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Hero Section with centered content */}
        <div className="flex-1 flex flex-col justify-center items-center mb-16 pt-20 text-center">
          <div>
            <p className="text-[#3bc7e5] mb-4">Hello! My name is</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">
                {data.name}
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#3bc7e5] to-[#3b82f6] text-transparent bg-clip-text">
                {data.title}
              </span>
            </h2>

            {/* Social and Contact Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-[#3bc7e5] transition-colors"
              >
                <Mail size={20} />
                <span>{data.email}</span>
              </a>

              <a
                href={`tel:${data.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-[#3bc7e5] transition-colors"
              >
                <Phone size={20} />
                <span>{data.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={20} />
                <span>{data.location}</span>
              </div>

              <Link
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3bc7e5] transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Link>

              <Link
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3bc7e5] transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-24 py-16">
          <SummarySection />
          <ExperienceSection />
          <CertificationsSection />
          <ProjectsSection />
          <SkillsSection />
        </div>

        {/* Empty footer preserved for spacing */}
        <footer className="py-8"></footer>
      </div>
    </main>
  )
}
