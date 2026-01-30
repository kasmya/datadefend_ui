import React from "react";

export function SocialProof() {
    const companies = [
        { name: "Acme Bank", logo: "🏛️" },
        { name: "Global Tech", logo: "💻" },
        { name: "HealthPlus", logo: "🏥" },
        { name: "FinSecure", logo: "🛡️" },
        { name: "RetailOne", logo: "🛍️" },
        { name: "DataCorp", logo: "📊" },
    ];

    return (
        <section className="py-10 border-y border-white/5 bg-primary-light/30">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-text-muted mb-8 uppercase tracking-widest">
                    Trusted by Compliance-First Enterprises
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <div key={company.name} className="flex items-center gap-2 group cursor-default">
                            <span className="text-2xl">{company.logo}</span>
                            <span className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
