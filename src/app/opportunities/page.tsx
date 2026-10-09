import Link from "next/link";
import { Search, Filter, Handshake, TrendingUp, Users, Lightbulb, Compass, ArrowUpRight, Clock } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { opportunitiesQuery } from "@/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Discover top-tier roles from premium businesses. Find your next career-defining opportunity on Business Hub.",
};

// Define the data structure
interface Opportunity {
  _id: string;
  title: string;
  entity: string;
  category: string;
  status: "Open" | "Urgent" | "Closed";
  deadline: string;
  description: string;
}

// Fetch data from Sanity
async function getOpportunities() {
  const opportunities = await sanityClient.fetch<Opportunity[]>(opportunitiesQuery);
  return opportunities;
}

const categories = ["All", "Partnerships", "Funding", "Projects", "Mentorship"];

// Helper to choose icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Partnerships": return Handshake;
    case "Funding": return TrendingUp;
    case "Projects": return Users;
    case "Mentorship": return Lightbulb;
    default: return Compass;
  }
};

export default async function OpportunitiesPage() {
  const opportunities = await getOpportunities();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">
            Opportunities
          </h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Discover strategic partnerships, funding rounds, collaborative projects, and mentorships.
          </p>
        </div>

        {/* Search & Filters (UI only for now) */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40" size={20} />
            <input 
              type="text" 
              placeholder="Search opportunities, entities, keywords..." 
              className="w-full bg-bh-white/5 border border-bh-white/10 text-bh-ivory pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-bh-white/5 border border-bh-white/10 text-bh-ivory px-6 py-3 rounded-sm hover:border-bh-ivory/30 transition-colors">
            <Filter size={18} />
            <span className="font-heading text-sm uppercase tracking-wider">Filters</span>
          </button>
        </div>

        {/* Category Tabs (UI only for now) */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-bh-white/10 pb-4">
          {categories.map((cat, index) => (
            <button 
              key={cat} 
              className={`px-5 py-2.5 rounded-sm font-heading text-sm uppercase tracking-wider transition-all duration-300 border ${
                index === 0 
                  ? "text-bh-red border-bh-red/50 bg-bh-red/10" 
                  : "text-bh-ivory/60 border-transparent hover:text-bh-ivory hover:bg-bh-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Opportunities Grid - Mapped from Sanity */}
        {opportunities.length === 0 ? (
          <div className="text-center py-20 text-bh-ivory/50 font-body">
            No opportunities posted yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <div 
                  key={item._id} 
                  className="group bg-bh-black border border-bh-white/10 p-8 flex flex-col transition-all duration-300 hover:border-bh-red/50 hover:-translate-y-1 rounded-sm"
                >
                  {/* Top Meta */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red group-hover:bg-bh-red group-hover:text-bh-white transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase border rounded-sm ${
                      item.status === "Urgent" ? "text-bh-red border-bh-red/30 bg-bh-red/10" :
                      item.status === "Open" ? "text-bh-ivory border-bh-ivory/30 bg-bh-ivory/10" :
                      "text-bh-ivory/40 border-bh-white/10 bg-bh-white/5"
                    }`}>
                      {item.status || "Open"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="grow">
                    <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-bh-ivory/60 mb-4">{item.entity}</p>
                    <p className="font-body text-sm text-bh-ivory/50 leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-bh-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-bh-ivory/40">
                      <Clock size={12} /> {item.deadline || "Ongoing"}
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}