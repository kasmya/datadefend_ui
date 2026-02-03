"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

// ============================================
// CONFIGURATION - Add your Blogspot URL here
// ============================================
export const BLOGSPOT_CONFIG = {
    // Replace with your actual Blogspot blog ID or URL
    // Example: "1234567890123456789" or fetch from RSS
    blogId: "",
    // For now, using mock data. Set to true when you have the API configured
    useMockData: true,
};

// Mock blog data - replace with Blogspot API data later
const mockBlogs = [
    {
        id: "1",
        title: "Understanding DPDPA: A Complete Guide for Indian Enterprises",
        excerpt: "The Digital Personal Data Protection Act 2023 marks a significant milestone in India's data privacy landscape. Learn what it means for your business and how to prepare for compliance.",
        thumbnail: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop",
        author: "DataDefend Team",
        date: "2026-01-28",
        readTime: "8 min read",
        category: "DPDPA",
        featured: true,
    },
    {
        id: "2",
        title: "Consent Management Best Practices in 2026",
        excerpt: "Effective consent management is crucial for DPDPA compliance. Discover the best practices for collecting, managing, and documenting user consent.",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        author: "Privacy Expert",
        date: "2026-01-25",
        readTime: "6 min read",
        category: "Consent",
        featured: true,
    },
    {
        id: "3",
        title: "Data Subject Access Requests: Automation Strategies",
        excerpt: "Learn how to automate DSAR processing to meet the 30-day response requirement under DPDPA while reducing manual workload.",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        author: "Tech Team",
        date: "2026-01-22",
        readTime: "5 min read",
        category: "DSAR",
        featured: false,
    },
    {
        id: "4",
        title: "Vendor Risk Assessment: A Step-by-Step Guide",
        excerpt: "Third-party vendors can be your biggest compliance risk. Here's how to assess and manage vendor data privacy risks effectively.",
        thumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop",
        author: "Compliance Team",
        date: "2026-01-20",
        readTime: "7 min read",
        category: "Vendor Risk",
        featured: false,
    },
    {
        id: "5",
        title: "Building a Privacy-First Culture in Your Organization",
        excerpt: "Privacy isn't just about technology—it's about people. Learn how to foster a privacy-conscious culture across your organization.",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
        author: "HR & Compliance",
        date: "2026-01-18",
        readTime: "6 min read",
        category: "Culture",
        featured: false,
    },
    {
        id: "6",
        title: "Data Breach Response: The First 72 Hours",
        excerpt: "When a data breach occurs, every minute counts. This guide covers the critical steps you must take in the first 72 hours.",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        author: "Security Team",
        date: "2026-01-15",
        readTime: "9 min read",
        category: "Security",
        featured: false,
    },
];



interface BlogCardProps {
    blog: typeof mockBlogs[0];
    featured?: boolean;
}

function BlogCard({ blog, featured = false }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 ${featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
        >
            {/* Thumbnail */}
            <div className={`relative overflow-hidden ${featured ? "h-full min-h-[300px]" : "h-48"}`}>
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-purple-600 rounded-full">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={`p-6 ${featured ? "flex flex-col justify-center" : ""}`}>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                    </span>
                </div>

                <h3 className={`font-bold text-primary mb-3 group-hover:text-accent transition-colors ${featured ? "text-2xl" : "text-lg"
                    }`}>
                    {blog.title}
                </h3>

                <p className={`text-gray-600 mb-4 ${featured ? "text-base" : "text-sm line-clamp-2"}`}>
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <Link
                        href={`/resources/${blog.id}`}
                        className="flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                    >
                        Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}

export default function ResourcesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = mockBlogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const featuredBlogs = filteredBlogs.filter((b) => b.featured);
    const regularBlogs = filteredBlogs.filter((b) => !b.featured);

    return (
        <main className="min-h-screen bg-gradient-to-b from-primary-light/30 to-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                            Resources
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Insights & Knowledge Hub
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest in data privacy, DPDPA compliance, and best practices for protecting personal data.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}

                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    {/* Featured Posts */}
                    {featuredBlogs.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-accent rounded-full" />
                                Featured Articles
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {featuredBlogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} featured />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All Posts */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-purple-500 rounded-full" />
                            Latest Articles
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularBlogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 text-accent font-medium hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-white/80 mb-6 max-w-lg mx-auto">
                            Subscribe to our newsletter for the latest DPDPA updates, compliance tips, and privacy insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl text-primary outline-none"
                            />
                            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
