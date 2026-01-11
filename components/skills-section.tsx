"use client"

import data from "@/app/data.json"
import { motion } from "framer-motion"
import { Wrench, Cpu, Languages } from "lucide-react"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#3bc7e5] mr-2 opacity-70">05.</span>
          <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tools Section */}
          <div className="border border-gray-800 rounded-lg p-6 hover:border-[#3bc7e5] transition-colors">
            <div className="flex items-center mb-4">
              <Wrench className="text-[#3bc7e5] mr-2" size={20} />
              <h3 className="text-xl font-semibold">Tools ({data.tools.length})</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {data.tools.map((tool, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#3bc7e5] mr-2">▹</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="border border-gray-800 rounded-lg p-6 hover:border-[#3bc7e5] transition-colors">
            <div className="flex items-center mb-4">
              <Cpu className="text-[#3bc7e5] mr-2" size={20} />
              <h3 className="text-xl font-semibold">Skills ({data.skills.length})</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {data.skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#3bc7e5] mr-2">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Section */}
          <div className="border border-gray-800 rounded-lg p-6 hover:border-[#3bc7e5] transition-colors">
            <div className="flex items-center mb-4">
              <Languages className="text-[#3bc7e5] mr-2" size={20} />
              <h3 className="text-xl font-semibold">({data.languages.length})</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {data.languages.map((language, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#3bc7e5] mr-2">▹</span>
                  <span>
                    {language.name} <span className="text-gray-500">({language.proficiency})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
