"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/sections/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every decision we make serves a clear user need." },
  { icon: Eye, title: "Transparency", description: "Open communication and honest partnerships." },
  { icon: Heart, title: "Human-Centered", description: "Technology should serve people, not the other way around." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards of quality." },
];

const team = [
  { name: "Sarah Chen", role: "CEO & Founder", bio: "15+ years in digital strategy and business transformation." },
  { name: "Marcus Johnson", role: "CTO", bio: "Expert in scalable architecture and emerging technologies." },
  { name: "Aisha Rahman", role: "Head of Design", bio: "Award-winning designer focused on user-centered experiences." },
  { name: "David Park", role: "Head of Strategy", bio: "Specialist in market analysis and growth optimization." },
];

export default function AgencyPage() {
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
            The <span className="text-bh-red">Agency</span>
          </h1>
          
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            A premium digital ecosystem built for modern businesses. 
            We combine strategic thinking with technical excellence to deliver transformative solutions.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-6">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6 leading-tight">
              To create fast, smooth, and useful digital experiences that connect people, businesses, and opportunities.
            </h2>
            <p className="font-body text-lg text-bh-ivory/70 leading-relaxed">
              We believe technology should empower, not complicate. Our mission is to build platforms 
              that are intuitive, powerful, and designed to grow with our clients' ambitions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-bh-white/10 p-8 md:p-12"
          >
            <h3 className="font-heading text-2xl text-bh-ivory mb-6">Our Vision</h3>
            <p className="font-body text-bh-ivory/70 leading-relaxed mb-8">
              To be the leading digital ecosystem in Bangladesh and beyond, recognized for our 
              commitment to quality, innovation, and meaningful impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Global reach with local expertise</span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Sustainable growth for our clients</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Cutting-edge technology solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Animated Stats Section - FIXED */}
      <SectionWrapper className="bg-bh-black border-y border-bh-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
          <AnimatedCounter end={50} suffix="+" label="Global Clients" />
          <AnimatedCounter end={12} label="Countries Served" />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper>
        <div className="mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Values
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            What drives us forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-bh-white/10 p-8 hover:border-bh-red/50 transition-all duration-300"
            >
              <value.icon className="w-10 h-10 text-bh-red mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-xl text-bh-ivory mb-3">{value.title}</h3>
              <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            The people behind BH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-bh-white/10 p-8 hover:border-bh-red/50 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-bh-white/5 rounded-full mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-bh-ivory/30" />
              </div>
              <h3 className="font-heading text-xl text-bh-ivory mb-2">{member.name}</h3>
              <div className="font-heading text-sm text-bh-red uppercase tracking-wider mb-4">
                {member.role}
              </div>
              <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Join our team
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            We're always looking for talented individuals who share our vision.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors">
            View Open Positions
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}