
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Our Awesome Platform", 
  description = "We provide innovative solutions to help you achieve your goals.",
  keywords = "SEO, web design, development, marketing, content creation, small businessess , web solution, automation for business, ",
  image = "/ourteam/hero-",
  url = ""
}) => {
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Your Company Name" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Our Awesome Platform" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
    </Helmet>
  );
};

export default SEOHead;
