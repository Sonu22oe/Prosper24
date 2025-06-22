import About from "./About";
import Testimonial from "./Testimonial";  
import Footer from "./Footer";
import Ourteam from './Ourteam'
import Hero from "./Hero";
import Services from "./Services";
import Stats from './Stats'
import Slider from './Slider'
import Clients from './Clients'
import {Helmet} from 'react-helmet-async'

  
  const Home = () => {
  return (
    <>
      <Helmet>
        <title>Prosper | Digital Strategy That Drives Growth</title>
        <meta name="description" content="Prosper helps businesses grow with expert digital consulting, marketing, and innovation strategies." />
        <meta name="keywords" content="digital consultant, growth strategy, business innovation, Prosper consulting" />
        <meta property="og:title" content="Prosper | Digital Consultant" />
        <meta property="og:description" content="Get expert digital consulting to grow your business." />
        <meta property="og:image" content="https://yourdomain.com/prosper-og.jpg" />
      </Helmet>
    <div>
      <Hero /> 
    
      <Services/>
      <About />
     <Stats/>
      
    <Testimonial />
      <Clients/>
    <Ourteam />
    <Footer/>
    </div>
    </>
  );
};

export default Home;