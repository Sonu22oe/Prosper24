import  Stats from './Stats'
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aboutContent = [
  {
    heading: "Who We Are",
    text: "We are a team of passionate individuals dedicated to providing high-quality services and innovative solutions. Our mission is to exceed expectations and build lasting relationships with our clients.",
    image: "/ourteam/jpg/Seo.jpg",
    imgstyle: "text-white lg:w-full shadow-lg w-full aspect-video object-cover order-1",
    para: " order-2 lg:order-1 leading-relaxed   lg:text-md  md:text-sm"  
  },
  {
    heading: "What We Do",
    text: "With years of experience in the industry, we have honed our skills and expertise to deliver exceptional results. We are committed to continuous improvement and staying ahead of the curve in a rapidly evolving landscape.",
    image: "/ourteam/jpg/pexels-pixabay-40185.jpg",
    imgstyle: "lg:w-[30vw] shadow-lg w-full aspect-video object-cover order-1 lg:order-2",
    para: " order-2 lg:order-1 leading-relaxed   lg:text-md md:text-sm"  
  },
  {
    heading: "Our Values",
    text: "Our core values are integrity, collaboration, and customer satisfaction. We believe in transparency, open communication, and working together to achieve common goals.",
    image: "/ourteam/jpg/ourstory1.jpg",
    imgstyle: "lg:w-[30vw] shadow-lg w-full aspect-video object-cover order-1",
    para: " order-2 lg:order-1  lg:text-md md:text-md  lg:text-xl lg:col-span-4  "
  },
];




const About = () => {
  return (
    <>
  
      <Helmet>
        <title>About Us | Prosper - Expert Digital Consulting</title>
        <meta name="description" content="Learn about Prosper, a trusted digital consulting firm helping startups and enterprises unlock growth through strategy, innovation, and technology." />
        <meta name="keywords" content="about Prosper, digital consultant, business innovation, digital strategy" />
        <meta property="og:title" content="About Prosper - Digital Consultant" />
        <meta property="og:description" content="We help businesses grow smarter with strategic digital consulting." />
      </Helmet>
  
  
    <div className="container  mx-auto py-16 lg:px-20 px-5  grid grid-cols-1 lg:grid-cols-5 lg:grid-row-6">
      <div className="lg:col-span-2 lg:row-span-2 mb-14 lg:mr-10">
      <h2 className="text-[4em] xl:text-[7em] font-bold text-center  text-gray-800  md:text-left lora">

About  Prosper
</h2>  <p className="jokerman mt-5  text-center md:text-left lg:px-1 lg:text-[1em] fira-code">We help businesses grow with modern web solutions, expert software development, and creative strategies. Our team delivers fast, reliable, and scalable digital products tailored to your success.</p>

      <img src="/ourteam/jpg/Analytics.jpg" alt="About Us" className=" rounded w-full aspect-[6/4]  object-cover lg:order-1 mt-8 "/>

        
  </div>
      <div className="space-y-5 lg:col-span-3 border-1 border-gray-200/20 px-3 py-4 rounded-2xl">


        
        {aboutContent.map((section, index) => (
          <div
            key={index}
        className="flex flex-col lg:flex-row items-center justify-between bg-slate-100 px-5 py-6 lg:py-10 lg:px-10 rounded-xl lg:mx-5"
          >

      
            
            <div className="absolute lg:bg-gradient-to-b from-white to-slate-500 lg:z-99 fira-code"></div>            <div className={section.para}>
              <h3 className="text-3xl font-semibold lora text-slate-900 ">{section.heading}</h3>
              <p className="lg:text-sm xl:text-xl mt-2 lora  text-gray-700">{section.text}</p>
            </div>
      </div>
        ))}
        
      </div>
      
      </div>
    </>
  );
};

export default About;



