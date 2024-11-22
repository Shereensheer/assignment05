import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming your ShadCN button is located here
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 h-screen text-white py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi I m <span className="text-yellow-300">SHEREEN AHMED</span> <br />
            A Passionate <span className="text-yellow-300">WEB Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            I specialize in creating professional and responsive web
            applications using modern technologies like React, Next.js, and
            Tailwind CSS.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <Link href={'/contact'}>
            <Button  className="bg-yellow-300 text-gray-800  hover:text-white font-semibold">
           Contact Me
            </Button>
           </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
          <Image
            src="/image.png"
            alt="Hero Image"
            className="w-3/4 lg:w-full max-w-lg rounded-full shadow-lg"
            height={200}
            width={300}
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
