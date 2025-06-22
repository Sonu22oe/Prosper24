import React from "react";
import { motion } from "framer-motion";
import '../font.css'
import {Helmet} from 'react-helmet-async'



const Hero = () => {
  return (<>  
    <Helmet>
      <title>Prosper | Digital Consultant for Smart Business Growth</title>
      <meta
        name="description"
        content="Prosper helps startups and enterprises grow with expert digital consulting, strategy, and transformation services."
      />
      <meta
        name="keywords"
        content="digital consultant, business strategy, digital transformation, Prosper consulting"
      />
      <meta property="og:title" content="Prosper | Digital Consultant" />
      <meta
        property="og:description"
        content="Expert digital consulting services for growth-driven businesses."
      />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
    </Helmet>
    
    <section className="container relative w-full  bg-white bg-cover bg-center bg-no-repeat object-cover object-center overflow-x-hidden mx-auto"  >
      <div className="  flex flex-col lg:flex-row " >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col  h-full px-6 text-center lg:text-left lg:items-left order-2 lg:order-1 mx-auto"
      >
        <h1 className="arial text-[2.5em] leading-tight w-full lg:text-[3.5em] xl:text-[4em] font-extrabold  mb-4 mt-12">
          Empowering Ideas with <span className="">Tailored Tech Solutions</span>
        </h1>

        <p className="text-sm md:text-md  mb-8 leading-relaxed">
          We partner with early-stage startups and growing businesses to accelerate their digital transformation.
          From custom software consulting to full-stack app development, we build fast, scalable solutions using
          modern tech like Vite and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-left justify-center lg:justify-start mb-10">
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-slate-50 px-6 py-3  shadow font-medium hover:bg-slate-100 transition"
          >
            Get a Free Consultation
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-800 text-slate-900 px-6 py-3 text-center hover:bg-white hover:text-slate-900 transition"
          >
            Explore Services
          </motion.a>

          

          
        </div>
      
      </motion.div>
    <img src="/ourteam/jpg/hero-page.jpg" alt="Description of the image" className="aspect-[8/6] order-1 lg:order-2 object-cover w-full lg:w-[50%] h-[100%] lg:m-6 lg:my-auto xl:my-10" /> </div>
    </section></>
  );
};

export default Hero;