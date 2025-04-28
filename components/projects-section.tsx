"use client"

import Link from "next/link"
import Image from "next/image"
import data from "@/app/data.json"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

// Extended projects data with images
const extendedProjects = data.projects

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#3bc7e5] mr-2 opacity-70">04.</span>
          <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">
            Projects & Assessments
          </span>
        </h2>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6">
            {extendedProjects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] border border-gray-800 rounded-lg overflow-hidden flex-shrink-0 hover:border-[#3bc7e5] transition-colors"
              >
                <div className="h-40 relative">
                  <Image
                    src={project.image || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="bg-gradient-to-r from-[#3bc7e5] to-[#3b82f6] text-transparent bg-clip-text">
                      {project.title}
                    </span>
                  </h3>

                  <div className="text-gray-300 mb-4 h-24 overflow-hidden">
                    <p className="line-clamp-3">{project.description}</p>
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#3bc7e5] hover:text-white transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Fade effect on the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a1629] to-transparent pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  )
}
