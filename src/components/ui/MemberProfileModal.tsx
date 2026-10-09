"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Briefcase, TrendingUp, Clock, Star, ExternalLink, Download } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import AnimatedCounter from "./AnimatedCounter";
import Image from "next/image";

interface MemberData {
  name: string;
  role: string;
  company: string;
  followers: string;
  projects: number;
  rating: number;
  image: string;
  skills: string[];
  availability: string;
  bio: string;
  location: string;
  memberSince: string;
  totalHours: number;
  completedProjects: number;
  ongoingProjects: number;
  workDistribution: { name: string; value: number; color: string }[];
  recentWorks: {
    title: string;
    type: string;
    image: string;
    year: string;
    client: string;
  }[];
  testimonials: {
    text: string;
    author: string;
    company: string;
    rating: number;
  }[];
}

interface MemberProfileModalProps {
  member: MemberData | null;
  onClose: () => void;
}

export default function MemberProfileModal({ member, onClose }: MemberProfileModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-200 bg-bh-black/95 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-bh-black border border-bh-white/10 hover:border-bh-red text-bh-ivory hover:text-bh-white transition-all duration-300 z-201"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {/* Profile Image */}
              <div className="relative aspect-3/4 overflow-hidden border border-bh-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bh-black via-transparent to-transparent" />
                
                {/* Availability Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`block w-full py-2 text-center text-xs font-heading uppercase tracking-wider ${
                    member.availability.includes("Available") 
                      ? "bg-bh-red text-white" 
                      : "bg-bh-black/90 text-bh-ivory border border-bh-white/10"
                  }`}>
                    {member.availability}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl text-bh-white font-bold mb-2">
                    {member.name}
                  </h1>
                  <p className="font-body text-xl text-bh-red mb-1">{member.role}</p>
                  <p className="font-body text-bh-ivory/60">{member.company}</p>
                </div>

                <p className="font-body text-bh-ivory/80 leading-relaxed">
                  {member.bio}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border border-bh-white/10">
                    <TrendingUp className="w-5 h-5 text-bh-gold mb-2" />
                    <p className="font-heading text-2xl text-bh-white">{member.followers}</p>
                    <p className="text-xs text-bh-ivory/40 uppercase">Followers</p>
                  </div>
                  <div className="p-4 border border-bh-white/10">
                    <Briefcase className="w-5 h-5 text-bh-gold mb-2" />
                    <p className="font-heading text-2xl text-bh-white">{member.projects}</p>
                    <p className="text-xs text-bh-ivory/40 uppercase">Projects</p>
                  </div>
                  <div className="p-4 border border-bh-white/10">
                    <Star className="w-5 h-5 text-bh-gold mb-2" />
                    <p className="font-heading text-2xl text-bh-white">{member.rating}</p>
                    <p className="text-xs text-bh-ivory/40 uppercase">Rating</p>
                  </div>
                  <div className="p-4 border border-bh-white/10">
                    <Clock className="w-5 h-5 text-bh-gold mb-2" />
                    <p className="font-heading text-2xl text-bh-white">{member.memberSince}</p>
                    <p className="text-xs text-bh-ivory/40 uppercase">Member Since</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory/40 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-bh-white/5 border border-bh-white/10 text-bh-ivory font-body text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-bh-red text-white font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors">
                    Connect with {member.name.split(" ")[0]}
                  </button>
                  <button className="px-6 py-4 border border-bh-white/10 text-bh-ivory hover:border-bh-white/30 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Work Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {/* Work Distribution Pie Chart */}
              <div className="p-8 border border-bh-white/10">
                <h3 className="font-heading text-xl text-bh-white mb-6">Work Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={member.workDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {member.workDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#111111",
                          border: "1px solid #FFFFFF20",
                          borderRadius: "4px",
                        }}
                        itemStyle={{ color: "#F2EDE3" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                {/* Legend */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {member.workDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-bh-ivory/60">{item.name}</span>
                      <span className="text-sm text-bh-white font-heading ml-auto">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Time Statistics */}
              <div className="p-8 border border-bh-white/10">
                <h3 className="font-heading text-xl text-bh-white mb-6">Work Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-bh-ivory/60 text-sm">Total Hours Worked</span>
                      <AnimatedCounter end={member.totalHours} suffix="h" className="text-3xl" />
                    </div>
                    <div className="h-2 bg-bh-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full bg-bh-red"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-bh-ivory/60 text-sm">Completed Projects</span>
                      <AnimatedCounter end={member.completedProjects} className="text-3xl" />
                    </div>
                    <div className="h-2 bg-bh-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-bh-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-bh-ivory/60 text-sm">Ongoing Projects</span>
                      <AnimatedCounter end={member.ongoingProjects} className="text-3xl" />
                    </div>
                    <div className="h-2 bg-bh-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "45%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-bh-ivory"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-bh-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="font-heading text-2xl text-bh-white">98%</p>
                        <p className="text-xs text-bh-ivory/40 uppercase">On-Time</p>
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-bh-white">4.9</p>
                        <p className="text-xs text-bh-ivory/40 uppercase">Avg Rating</p>
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-bh-white">24h</p>
                        <p className="text-xs text-bh-ivory/40 uppercase">Response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Works Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="font-heading text-2xl text-bh-white mb-6">Recent Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {member.recentWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-4/3 overflow-hidden border border-bh-white/10 group-hover:border-bh-red/50 transition-colors">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent" />
                      
                      {/* Work Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-bh-black/90 border border-bh-white/10 text-xs font-heading uppercase tracking-wider text-bh-ivory">
                          {work.type}
                        </span>
                      </div>

                      {/* External Link */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-bh-white" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-heading text-lg text-bh-white mb-1 group-hover:text-bh-red transition-colors">
                        {work.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-bh-ivory/60">
                        <span>{work.client}</span>
                        <span>{work.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-heading text-2xl text-bh-white mb-6">Client Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6 border border-bh-white/10">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-bh-gold fill-bh-gold" />
                      ))}
                    </div>
                    <p className="font-body text-bh-ivory/80 mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-heading text-sm text-bh-white">{testimonial.author}</p>
                      <p className="text-xs text-bh-ivory/40">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}