"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Zap, Globe, Shield, Code, Lightbulb } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/sections/SectionWrapper";

const expertiseItems = [
  {
    icon: Briefcase,
    title: "Strategy & Consulting",
    description: "Strategic planning and business transformation for modern enterprises.",
    details: ["Market Analysis", "Business Modeling", "Growth Strategy", "Digital Transformation"],
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description: "Scale your business with data-driven solutions and performance optimization.",
    details: ["SEO & Content", "Performance Marketing", "Analytics", "Conversion Optimization"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Build high-performing teams and create productive work environments.",
    details: ["Remote Work Solutions", "Team Building", "Workflow Design", "Communication Tools"],
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge solutions for complex challenges and emerging opportunities.",
    details: ["AI Integration", "Automation", "Emerging Tech", "R&D Support"],
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Navigate international markets with localized strategies and partnerships.",
    details: ["Market Entry", "Localization", "Cross-border Operations", "Cultural Adaptation"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and regulatory compliance for your digital assets.",
    details: ["Data Protection", "GDPR Compliance", "Security Audits", "Risk Management"],
  },
  {
    icon: Code,
    title: "Technology Solutions",
    description: "Custom software development and technical architecture for scalable platforms.",
    details: ["Web Development", "Mobile Apps", "Cloud Infrastructure", "API Design"],
  },
  {
    icon: Lightbulb,
    title: "Research & Insights",
    description: "Deep market research and actionable insights to inform strategic decisions.",
    details: ["Market Research", "Competitive Analysis", "Trend Forecasting", "User Research"],
  },
];

export default function ExpertisePage() {
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
            Our <span className="text-bh-red">Expertise</span>
          </h1>
          
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            Strategic consulting, architecture, design and turnkey solutions for modern businesses. 
            We bring deep industry knowledge and technical excellence to every engagement.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Expertise Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border border-bh-white/10 bg-bh-black p-8 md:p-10 hover:border-bh-red/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <item.icon className="w-10 h-10 text-bh-red" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-bh-ivory/60 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="font-body text-sm text-bh-ivory/50 flex items-center gap-2">
                        <span className="w-1 h-1 bg-bh-red rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Ready to transform your business?
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            Let's discuss how our expertise can help you achieve your goals.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors">
            Get in Touch
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}