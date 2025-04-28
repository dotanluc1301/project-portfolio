"use client"

import { useState } from "react"
import Link from "next/link"
import data from "@/app/data.json"
import { motion } from "framer-motion"
import { Users, ExternalLink } from "lucide-react"

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  // Get experience data from data.json
  const experienceData = data.experience || []

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#3bc7e5] mr-2 opacity-70">02.</span>
          <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">Experience</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-6 min-h-[500px]">
          {/* Vertical Tabs */}
          <div className="md:w-1/3 border-r border-gray-800 pr-4">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-4 font-medium text-left w-full mb-3 rounded transition-colors ${
                  activeTab === index
                    ? "bg-gray-800/50 text-[#3bc7e5] border-l-2 border-[#3bc7e5]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3">
            <div className="border border-gray-800 rounded-lg p-8 hover:border-[#3bc7e5] transition-colors h-full">
              {experienceData.map((exp, index) => (
                <div key={index} className={`${activeTab === index ? "block" : "hidden"} h-full`}>
                  <div className="flex flex-col md:items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        <span className="bg-gradient-to-r from-[#3bc7e5] to-[#3b82f6] text-transparent bg-clip-text">
                          {exp.position}
                        </span>
                      </h3>
                      <p className="text-[#3bc7e5] text-lg">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    <div className="flex items-center mt-3 text-gray-400">
                      <Users size={18} className="mr-2" />
                      <span>Team Size: {exp.teamSize}</span>
                    </div>
                  </div>

                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Responsibilities</h4>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#3bc7e5] mr-2 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Projects Section - Only display if projects exist and have items */}
                  {exp.projects && exp.projects.length > 0 && (
                    <>
                      <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Projects</h4>
                      <ul className="space-y-3 text-gray-300">
                        {exp.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#3bc7e5] mr-2 mt-1">▹</span>
                            <span>
                              {project.name}{" "}
                              {project.link && (
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-[#3bc7e5] hover:text-white transition-colors ml-1"
                                >
                                  <ExternalLink size={14} />
                                </Link>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
