import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://ananthuks.online";
const siteTitle = "Ananthu K S | Software Engineer";
const siteDescription =
  "Software Engineer with nearly 2 years of experience across 20+ production projects. Currently at Onbyz, building web applications with JavaScript, React, and Node.js.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ananthu K S",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      jobTitle: "Software Engineer",
      description: siteDescription,
      email: "ananthu9526official@gmail.com",
      telephone: "+919526952719",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thrissur",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/ananthu-dev224",
        "https://www.linkedin.com/in/ananthu-k-s-403512291/",
        "https://twitter.com/dev_aks224",
        "https://instagram.com/___ananthu__",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Onbyz",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ananthu K S",
  },
  description: siteDescription,
  keywords: [
    "Ananthu K S",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer India",
    "Software Engineer Kerala",
    "Portfolio",
  ],
  authors: [{ name: "Ananthu K S", url: siteUrl }],
  creator: "Ananthu K S",
  publisher: "Ananthu K S",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ananthu K S",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ananthu K S — Software Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@dev_aks224",
    site: "@dev_aks224",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
