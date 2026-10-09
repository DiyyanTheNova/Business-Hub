import Link from "next/link";
import { Search, MapPin, Clock, Briefcase, DollarSign, ArrowUpRight } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { jobsQuery } from "@/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Discover top-tier roles from premium businesses. Find your next career-defining opportunity on Business Hub.",
};

// Define the type for our Sanity data
interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  featured: boolean;
}

// This is a Server Component, so we can fetch data directly!
async function getJobs() {
  const jobs = await sanityClient.fetch<Job[]>(jobsQuery);
  return jobs;
}

const jobTypes = ["All", "Full-time", "Contract", "Remote", "Part-time"];

export default async function JobsPage() {
  const jobs = await getJobs(); // Fetch real data from Sanity

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">
            Jobs
          </h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Discover top-tier roles from premium businesses. Find your next career-defining opportunity.
          </p>
        </div>

        {/* Search & Filters (UI only for now) */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40" size={20} />
            <input 
              type="text" 
              placeholder="Search job titles, companies, keywords..." 
              className="w-full bg-bh-white/5 border border-bh-white/10 text-bh-ivory pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30"
            />
          </div>
        </div>

        {/* Job Type Tabs (UI only for now) */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-bh-white/10 pb-4">
          {jobTypes.map((type, index) => (
            <button 
              key={type} 
              className={`px-5 py-2.5 rounded-sm font-heading text-sm uppercase tracking-wider transition-all duration-300 border ${
                index === 0 
                  ? "text-bh-red border-bh-red/50 bg-bh-red/10" 
                  : "text-bh-ivory/60 border-transparent hover:text-bh-ivory hover:bg-bh-white/5"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Jobs List - Now mapped from Sanity data */}
        <div className="flex flex-col gap-4">
          {jobs.length === 0 ? (
            <div className="text-center py-20 text-bh-ivory/50 font-body">
              No jobs posted yet. Check back soon!
            </div>
          ) : (
            jobs.map((job) => (
              <div 
                key={job._id} 
                className="group bg-bh-black border border-bh-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-bh-red/50 hover:bg-bh-white/5 rounded-sm cursor-pointer"
              >
                {/* Left: Title & Company */}
                <div className="
                ]grow">
                  <h3 className="font-heading text-xl md:text-2xl text-bh-ivory mb-2 group-hover:text-bh-white transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-bh-ivory/60">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} /> {job.company}
                    </span>
                    {job.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    )}
                    {job.salary && (
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} /> {job.salary}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Meta & Action */}
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="text-right">
                    <span className="inline-block py-1 px-2 mb-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                      {job.type}
                    </span>
                    <div className="flex items-center justify-end gap-1.5 text-xs text-bh-ivory/40">
                      <Clock size={12} /> {new Date(job.postedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}