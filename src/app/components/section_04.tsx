import React from 'react'
import Image from 'next/image'
import Courses4 from '../../../public/card4.jpg'
import Courses5 from '../../../public/card5.jpg'
import Courses6 from '../../../public/card6.jpg'
import Courses7 from '../../../public/card7.jpg'
import Courses8 from '../../../public/card8.jpg'
import Courses9 from '../../../public/card9.jpg'


export default function section_04() {
  return (
    <div className=" mb-2 space-y-40 md:space-y-16">
      <h1 className="border-none mx-6 py-10 font-extrabold text-4xl  text-[#044E83] ">
        Advanced Courses
      </h1>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses4}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-2">
            Artificial Inteligence
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses5}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-2">
            Web 3 and Metaverse
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses6}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-2">
            Cloud Native Computing
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses7}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-2">
            Ambiant Computing and (IOT)
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses8}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-2">
            Genomics and Bioinformatics
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Courses9}
            alt="Courses Iamge"
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-lg py-2 text-gray-600 ">
            Network Programmability and Automation
          </p>
        </div>
      </div>
    </div>
  )
}