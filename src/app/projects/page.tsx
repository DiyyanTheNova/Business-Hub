"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";

const projects = [
  {
    title: "Digital Transformation for TechCorp",
    category: "Strategy & Consulting",
    description: "Complete digital overhaul of legacy systems, resulting in 300% efficiency gain.",
    image: "/images/project-1.jpg",
    year: "2025",
    tags: ["Enterprise", "Cloud Migration", "AI Integration"],
  },
  {
    title: "E-commerce Platform Launch",
    category: "Technology Solutions",
    description: "Built and launched a scalable marketplace serving 50,000+ users in first month.",
    image: "/images/project-2.jpg",
    year: "2025",
    tags: ["Marketplace", "Scalability", "UX Design"],
  },
  {
    title: "Global Expansion Strategy",
    category: "Global Expansion",
    description: "Successfully entered 3 new international markets with localized approach.",
    image: "/images/project-3.jpg",
    year: "2024",
    tags: ["International", "Market Entry", "Localization"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Innovation",
    description: "Real-time business intelligence platform with predictive analytics capabilities.",
    image: "/images/project-4.jpg",
    year: "2024",
    tags: ["AI/ML", "Data Visualization", "Automation"],
  },
  {
    title: "Remote Work Infrastructure",
    category: "Team Collaboration",
    description: "Designed and implemented hybrid work solutions for 5,000+ employee organization.",
    image: "/images/project-5.jpg",
    year: "2024",
    tags: ["Remote Work", "Security", "Productivity"],
  },
  {
    title: "Sustainable Business Initiative",
    category: "Strategy & Consulting",
    description: "ESG compliance framework and green technology integration roadmap.",
    image: "/images/project-6.jpg",
    year: "2023",
    tags: ["Sustainability", "ESG", "Green Tech"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-20">
      {/* Header Section */}
      <SectionWrapper className="border-b border-bh-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-bh-ivory/60 hover:text-bh-ivory transition-colors mb-8 font-body text-sm">
            ← Back to Home
          </Link>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            Featured <span className="text-bh-red">Projects</span>
          </h1>
          
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            Showcasing our most impactful work and client successes. 
            Each project represents a unique challenge solved with precision and innovation.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-bh-white/10 bg-bh-black hover:border-bh-red/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-bh-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-bh-red/10 to-bh-black/50 group-hover:from-bh-red/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl text-bh-white/10">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-xs font-heading uppercase tracking-wider text-bh-ivory/50">
                  <span className="flex items-center gap-1">
                    <Tag size={12} />
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {project.year}
                  </span>
                </div>

                <h3 className="font-heading text-2xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-body text-bh-ivory/60 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-heading uppercase tracking-wider border border-bh-white/10 text-bh-ivory/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link href={`/projects/${index + 1}`} className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-bh-red hover:text-bh-ivory transition-colors">
                  View Case Study <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Have a project in mind?
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            Let's collaborate to create something extraordinary together.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors">
            Start a Project
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}