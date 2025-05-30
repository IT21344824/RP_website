"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { websiteImages } from "@/config/iconConfig";

const Photo = () => {
    return (
        <div className="relative w-full h-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
            >
                <div className=" relative w-[298px] h-[498px] xl:w-[498px] xl:h-[498px] mix-blend-lighten -mt-20 -mb-20" >
                    <Image
                        src={websiteImages.Obj1.img}
                        alt={websiteImages.Obj1.name}
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full p-10"
                    />

                    <motion.svg
                        className="absolute top-0 left-0 w-[298px] h-[498px] xl:w-[498px] xl:h-[498px]"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#00ff99"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </motion.svg>
                </div>
            </motion.div>
        </div>


    );
};

export default Photo;