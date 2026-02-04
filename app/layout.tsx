import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#152645",
};

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "DataDefend | India's #1 AI-Powered DPDPA Compliance Platform",
    template: "%s | DataDefend - DPDPA Compliance",
  },
  description:
    "Automate DPDPA compliance with India's leading AI-powered platform. Consent management, data discovery, vendor risk assessment, and privacy automation trusted by 500+ enterprises. Get compliance-ready in weeks, not months.",
  keywords: [
    "DPDPA compliance",
    "DPDPA compliance software",
    "Digital Personal Data Protection Act",
    "consent management platform",
    "data privacy India",
    "privacy compliance software",
    "GDPR compliance India",
    "data protection software",
    "AI privacy platform",
    "consent management India",
    "vendor risk management",
    "data discovery",
    "privacy impact assessment",
    "DSAR automation",
    "data governance",
    "cookie consent",
    "privacy automation",
    "enterprise compliance",
    "BFSI compliance",
    "healthcare data privacy",
  ],
  authors: [{ name: "DataDefend", url: "https://www.datadefend.com" }],
  creator: "Cybersecure Digital Intelligence Private Limited",
  publisher: "DataDefend",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical & Alternates
  metadataBase: new URL("https://www.datadefend.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "hi-IN": "/hi",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.datadefend.com",
    siteName: "DataDefend",
    title: "DataDefend | India's #1 AI-Powered DPDPA Compliance Platform",
    description:
      "Automate DPDPA compliance with India's leading AI-powered platform. Consent management, data discovery, vendor risk assessment, and privacy automation. Trusted by 500+ enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataDefend - DPDPA Compliance Platform",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@datadefend",
    creator: "@datadefend",
    title: "DataDefend | India's #1 AI-Powered DPDPA Compliance Platform",
    description:
      "Automate DPDPA compliance with India's leading AI-powered platform. Trusted by 500+ enterprises for consent management, data discovery, and privacy automation.",
    images: ["/og-image.png"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // App manifest
  manifest: "/manifest.json",

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Category
  category: "technology",

  // Classification
  classification: "Business Software",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.datadefend.com/#organization",
      name: "DataDefend",
      url: "https://www.datadefend.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.datadefend.com/dad.svg",
      },
      description:
        "India's #1 AI-Powered DPDPA Compliance Platform. Automate consent management, data discovery, and privacy compliance.",
      sameAs: [
        "https://www.linkedin.com/company/datadefend",
        "https://twitter.com/datadefend",
        "https://www.facebook.com/datadefend",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-124-3534897",
        contactType: "sales",
        email: "support@cybersec.enterprises",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kamla Palace, 2, 2nd Floor, Old Jail Road, Near Sohna Chowk",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.datadefend.com/#software",
      name: "DataDefend",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      description:
        "AI-powered DPDPA compliance platform for consent management, data discovery, vendor risk assessment, and privacy automation.",
      featureList: [
        "Consent Management",
        "Data Discovery & Mapping",
        "Privacy Impact Assessments",
        "DSAR Automation",
        "Vendor Risk Management",
        "Compliance Dashboard",
        "Cookie Consent",
        "Multi-language Support",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.datadefend.com/#website",
      url: "https://www.datadefend.com",
      name: "DataDefend",
      publisher: {
        "@id": "https://www.datadefend.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.datadefend.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.datadefend.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is DPDPA and why is it important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Digital Personal Data Protection Act (DPDPA) is India's comprehensive data protection law that governs how organizations collect, store, and process personal data. Non-compliance can result in penalties up to ₹250 crores.",
          },
        },
        {
          "@type": "Question",
          name: "How does DataDefend help with DPDPA compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DataDefend automates the entire DPDPA compliance journey with AI-powered consent management, data discovery, privacy impact assessments, DSAR automation, and real-time compliance monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free plan available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! DataDefend offers a free Starter plan with 3,000 consent collections per month, basic cookie consent, and DPDP-compliant consent artifacts—forever free.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
