"use client"

import Image from "next/image"
import data from "@/app/data.json"
import { motion } from "framer-motion"

// Split the summary into paragraphs and extract domains
const summaryParagraphs = data.summary;

const experiencedDomains = ["Data Governance", "HRMS", "Finance", "Supply Chain","E-commerce"]

export default function SummarySection() {
  return (
    <section id="summary" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#3bc7e5] mr-2 opacity-70">01.</span>
          <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">Summary</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-2 border-[#3bc7e5] flex-shrink-0 md:mt-2">
            <Image
              src={data.avatar || "/placeholder.svg?height=200&width=200"}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-gray-300 text-lg leading-relaxed">
            {summaryParagraphs.map((paragraph, index) => (
              <p key={index} className={index !== 0 ? "mt-4" : ""}>
                {paragraph}
              </p>
            ))}

            <div className="mt-6">
              <h3 className="text-white font-medium mb-2">Experienced Domains:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {experiencedDomains.map((domain, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#3bc7e5] mr-2">▹</span>
                    <span>{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
