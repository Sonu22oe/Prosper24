import React from 'react';
import Clients from './Clients.jpg';
import Clients1 from './Clients1.jpg';
import Clients2 from './Clients2.jpg';
import Clients3 from './Clients3.jpg';
import Clients4 from './Clients4.jpg';
import Clients5 from './Clients5.jpg';
import Clients6 from './Clients6.jpg';
import Clients7 from './Clients7.jpg';
import Clients8 from './Clients8.jpg';
import Clients9 from './Clients9.jpg';
import Clients10 from './Clients10.jpg';


const Clients = () =>{
const clients = [
  Clients,
  Clients1,
  Clients2,
  Clients3,
  Clients4,
  Clients5,
  Clients6,
  Clients7,
  Clients8,
  Clients9,
  Clients10
];

  return (

    <div className="bg-slate-700/90 py-20">
      <div className="container mx-auto">
        <h2 className="text-[3em]  text-center text-white poppins lora leading-tight font-extrabold">Our Clients</h2>
        <p className="text-sm text-white/80 md:text-3xl  mx-5 text-center mt-5 mb-25 leading-relaxed">
  We’re honored to collaborate with an incredible group of clients who inspire us to deliver excellence every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  xl:gap-x-0 lg:gap-y-2 place-items-center my-10 px-5 lg:px-[4%] xl:px-[10%] leading-tight">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center  bg-white aspect-[6/4] shadow-md shadow-gray-700/20 w-[280px] lg:w-[180px] rounded-md m-1">
           <img src={client} alt={`Client ${index + 1}`} className="object-cover aspect-[6/4] object-center rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;