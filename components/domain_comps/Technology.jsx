"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaPhp,
    FaJava,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDatabase,
    FaAndroid,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Function to calculate age 
const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageDays = Math.floor((today - birthDateObj) / (1000 * 60 * 60 * 24));

    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        ageYears--;
        ageDays = Math.floor((today - new Date(today.getFullYear() - 1, birthDateObj.getMonth(), birthDateObj.getDate())) / (1000 * 60 * 60 * 24));
    } else {
        const thisYearBirthday = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
        ageDays = Math.floor((today - thisYearBirthday) / (1000 * 60 * 60 * 24));
    }

    return `${ageYears} years and ${ageDays} days`;
};

const birthDate = '2002-07-03';
import { methodology } from '@/config/domainConfig'


const Technology = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
                }}
                className="min-h-[20vh] flex items-center justify-center py-12 xl:py-0 "
            >
                <div className="container mx-auto mt-5">
                    <Tabs
                        defaultValue="level_1"
                        className="flex flex-col xl:flex gap-[60px] "
                    >
                        <TabsList className="flex flex- w-full  mx-auto xl:mx-0 gap-6 mt-1">
                            {/* <TabsTrigger value="level_4" variant="border-only">Border Only Tab</TabsTrigger> */}

                            <TabsTrigger value="level_1">Programming Languages</TabsTrigger>
                            <TabsTrigger value="level_2">Development Environment</TabsTrigger>
                            <TabsTrigger value="level_3">Machine learning libraries</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[35vh] w-full  ">

                            <TabsContent value="level_1" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{methodology.Identification.title}</h3>
                                    <p className=" text-white/60 mx-auto xl:mx-0">
                                        {methodology.Identification.description}
                                    </p>

                                </div>
                            </TabsContent>

                            <TabsContent value="level_2" className="w-full h-full">
                                <div className="flex flex-col gap-[30px] ">
                                    <h3 className="text-4xl font-bold">{methodology.Severity.title} </h3>
                                    <p className=" text-white/60 mx-auto xl:mx-0">
                                        {methodology.Severity.description}
                                    </p>

                                </div>
                            </TabsContent>

                            <TabsContent value="level_3" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                        <h3 className="text-4xl font-bold"> {methodology.InitialLeve.title}</h3>
                                        <p className=" text-white/60 mx-auto xl:mx-0">
                                            {methodology.InitialLeve.description}
                                        </p>
                                    </div>

                                </div>
                            </TabsContent>

                            <TabsContent value="about" className="w-full text-center xl:text-left ">
                                <div className="flex flex-col gap-[30px] ">
                                    <h3 className="ml-16 text-4xl font-bold"> {methodology.Medium_Extreme.title}</h3>
                                    <p className=" text-white/60 mx-2 xl:mx-0 ">
                                        {methodology.Medium_Extreme.description}
                                    </p>

                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>

            {/* border */}
            <div className="w-full border-b border-white/60 mt-8"></div>
        </div>
    );
};

export default Technology;