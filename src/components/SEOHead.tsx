import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({
  title = "MJ DAVISON CLEANING - Professional Cleaning Services in Queens, NYC",
  description = "Professional residential and commercial cleaning services in Queens, NY. Licensed, insured, and trusted since 2010. Serving Long Island City, Astoria, Sunnyside, and surrounding areas.",
  keywords = "cleaning services queens, professional cleaners NYC, residential cleaning, commercial cleaning, office cleaning, deep cleaning, move out cleaning, Queens NY",
  canonicalUrl,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");
    
    if (canonicalUrl) {
      updateMetaTag("og:url", canonicalUrl, "property");
    }

    // Twitter tags
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
