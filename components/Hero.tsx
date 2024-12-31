"use client";
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const whatsappNumber = '918885621001'; 

  useEffect(() => {
    // This will run only on the client side after the component mounts
    setIsClient(true);
  }, []);

  return (
    <div className={`relative h-screen w-full dark`}>
      
      {/* Image background */}
      {isClient && (
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" 
             style={{ backgroundImage: 'url(/assets/Hero-try-1.jpg)' }} />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-1">
        <div className={`text-center md:text-left p-4 rounded-lg bg-opacity-60 bg-black`}>
          <h2 className={`text-3xl text-gray-200`}>
            Get things Done faster and efficient
          </h2>
        </div>
        <br />
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="z-1000 fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={38} />
      </a>
    </div>
  );
};

export default Hero;
