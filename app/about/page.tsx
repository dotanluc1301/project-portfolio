import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import data from "../data.json"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "About Me | Portfolio",
  description: "Learn more about my background, skills, and experience as a Business Analyst",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a1629] text-white">
      <Header />

      <div className="container mx-auto px-4 py-8 pt-24">
        <Link href="/" className="inline-flex items-center text-[#3bc7e5] hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-[#3bc7e5] mr-2 opacity-70">01.</span>
            <span className="bg-gradient-to-r from-[#3bc7e5] to-[#8b5cf6] text-transparent bg-clip-text">About Me</span>
          </h1>

          <div className="space-y-6 text-gray-300">
            <p>{data.summary}</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Skills</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {data.skills.slice(0, 6).map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#3bc7e5] mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium">
                    <span className="bg-gradient-to-r from-[#3bc7e5] to-[#3b82f6] text-transparent bg-clip-text">
                      {exp.position}
                    </span>
                  </h3>
                  <p className="text-[#3bc7e5]">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2">{exp.responsibilities[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
