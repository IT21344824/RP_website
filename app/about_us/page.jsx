"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { about_Us } from '@/config/aboutUsConfig'
import Akidu_Social from "@/components/aboutUs_comps/Akidu_Social";



const AboutUs = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover text-center mb-20">Our Amazing Team</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >

                    {about_Us.map((service, index) => (
                        <div key={index} className="flex flex-col justify-center gap-6 group">
                            <div className="flex items-center justify-center w-full">
                                {/* <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                                    {service.num}
                                </div> */}
                                <div className="items-center flex justify-center">
                                    {service.img && (
                                        <div className="w-40 h-40 relative rounded-full overflow-hidden">
                                            <Image
                                                src={service.img}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}

                                </div>
                            </div>
                            {/* title */}
                            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 text-center">
                                {service.title}
                            </h2>
                            <p className="text-white/60 text-center">{service.company}</p>
                            <p className="text-white/60 text-center">{service.address}</p>
                            {service.description !== 'Student' && (
                                <p className="text-white/60 text-center">{service.description}</p>
                            )}
                            <p className="text-center cursor-pointer text-blue-400">{service.email}</p>

                            <div className="flex gap-4 -mt-3">
                                {service.links}
                                {/* <Akidu_Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                                /> */}
                            </div>
                            {/* border */}
                            <div className="w-full border-b border-white/60"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
