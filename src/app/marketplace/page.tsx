import Link from "next/link";
import { Search, Filter, ShoppingBag, ArrowUpRight, Star, Building2 } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import { marketplaceQuery } from "@/lib/queries";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Marketplace | Business Hub",
  description: "Browse premium listings, digital products, and professional services from verified businesses on Business Hub.",
};

interface Listing {
  _id: string;
  title: string;
  seller: string;
  category: string;
  price: string;
  rating: number;
  featured: boolean;
  description?: string;
}

async function getListings() {
  const listings = await sanityClient.fetch<Listing[]>(marketplaceQuery);
  return listings;
}

const categories = ["All", "Software", "Design Assets", "Consulting", "Hardware", "Services"];

export default async function MarketplacePage() {
  const listings = await getListings();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">
            Marketplace
          </h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Browse premium listings, digital products, and professional services from verified businesses.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40" size={20} />
            <input 
              type="text" 
              placeholder="Search products, services, sellers..." 
              className="w-full bg-bh-white/5 border border-bh-white/10 text-bh-ivory pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-bh-white/5 border border-bh-white/10 text-bh-ivory px-6 py-3 rounded-sm hover:border-bh-ivory/30 transition-colors">
            <Filter size={18} />
            <span className="font-heading text-sm uppercase tracking-wider">Filters</span>
          </button>
        </div>

        {/* Category Tabs */}
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

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.length === 0 ? (
            <div className="col-span-full text-center py-20 text-bh-ivory/50 font-body">
              No listings posted yet. Check back soon!
            </div>
          ) : (
            listings.map((item) => (
              <div 
                key={item._id} 
                className="group bg-bh-black border border-bh-white/10 p-6 flex flex-col transition-all duration-300 hover:border-bh-red/50 hover:-translate-y-1 rounded-sm"
              >
                {/* Top Meta */}
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                    {item.category || "General"}
                  </span>
                  {item.featured && (
                    <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-gold border border-bh-gold/30 bg-bh-gold/10 rounded-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={14} className="text-bh-ivory/50" />
                    <p className="font-body text-sm text-bh-ivory/60">{item.seller || "Unknown Seller"}</p>
                  </div>
                  
                  {/* Rating */}
                  {item.rating && (
                    <div className="flex items-center gap-1 mb-6">
                      <Star size={14} className="text-bh-gold fill-bh-gold" />
                      <span className="font-body text-sm text-bh-ivory/80">{item.rating}</span>
                    </div>
                  )}
                </div>

                {/* Footer / Price */}
                <div className="flex items-center justify-between pt-6 border-t border-bh-white/10">
                  <span className="font-heading text-lg text-bh-red font-bold">{item.price || "Contact"}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
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