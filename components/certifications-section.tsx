"use client"

import Image from "next/image"
import Link from "next/link"
import data from "@/app/data.json"
import { motion } from "framer-motion"

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#3bc7e5] mr-2 opacity-70">03.</span>
          <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">
            Certifications
          </span>
        </h2>

        <div className="min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {data.certifications.map((cert, index) => (
              <Link
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 rounded-lg p-6 hover:border-[#3bc7e5] hover:bg-gray-800/30 transition-all group h-full flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 relative mb-5 flex-shrink-0">
                  <Image
                    src={cert.badgeUrl || "/placeholder.svg"}
                    alt={cert.title}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col w-full">
                  <h3 className="text-base font-medium text-white group-hover:text-[#3bc7e5] transition-colors mb-3">
                    {cert.title}
                  </h3>

                  <div className="mt-auto flex flex-col gap-1">
                    <p className="text-xs text-gray-400">
                      {cert.date}
                      {cert.validUntil ? ` - ${cert.validUntil}` : ""}
                    </p>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
