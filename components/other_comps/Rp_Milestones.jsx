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


// proposal data
const proposal = {
    icon: 'badge.svg',
    title: "Description",
    description: "Provided an overall understanding about the whole research and presented the individual components to the pannel, explained about the technologies and seperate novelty parts of the components.",
    items: [
        {
            project: "IT21344824",
            // role: "Medicine Store Management",
            // technology: "HTML, CSS, JS, MySQL",
            description: "Needs thorough evaluation of each component, clear identification of the project's main objective, redefinition of the target audience, and stronger justification of the component's business potential.",
            marks: '--',
        },
        {
            project: "IT21352294",
            description: "Needs thorough evaluation of each component, clear identification of the project's main objective, redefinition of the target audience, and stronger justification of the component's business potential",
            marks: '--',
        }, {
            project: "IT21273094",
            description: "Needs thorough evaluation of each component, clear identification of the project's main objective, redefinition of the target audience, and stronger justification of the component's business potential",
            marks: '--',
        },
        {
            project: "IT21360978",
            description: "Needs thorough evaluation of each component, clear identification of the project's main objective, redefinition of the target audience, and stronger justification of the component's business potential",
            marks: '--',
        },
    ],
    marks: '--',
    date: 'badge.svg',
};

// pp1 data
const pp1 = {
    icon: 'badge.svg',
    title: "Description",
    description: "Provided an overall understanding about the whole research and presented the individual components to the pannel, explained about the technologies and seperate novelty parts of the components.",
    items: [
        {
            project: "IT21344824",
            // role: "Medicine Store Management",
            // technology: "HTML, CSS, JS, MySQL",
            description: "team needs to significantly improve the quality and depth of each component of the project. Currently, there is no discernible difference between the contributions of the four members, as all components appear identical. Additionally, the lack of available data has hindered the feasibility of the project, and the work completed does not meet the expected standard for PPI. No working prototypes show the progress of the application. The team informed the panel that this situation had already been communicated to their supervisor.",
            marks: '--',
        },
        {
            project: "IT21352294",
            description: "The team needs to significantly improve the quality and depth of each component of the project. Currently, there is no discernible difference between the contributions of the four members, as all components appear identical. Additionally, the lack of available data has hindered the feasibility of the project, and the work completed does not meet the expected standard for PPI. The team informed the panel that this situation had already been communicated to their supervisor.",
            marks: '--',
        }, {
            project: "IT21273094",
            description: "The team needs to significantly improve the quality and depth of each component of the project. Currently, there is no discernible difference between the contributions of the four members, as all components appear identical. Additionally, the lack of available data has hindered the feasibility of the project, and the work completed does not meet the expected standard for PPI. The team informed the panel that this situation had already been communicated to their supervisor.",
            marks: '--',
        },
        {
            project: "IT21360978",
            description: "The team needs to significantly improve the quality and depth of I each component of the project. Currently, there is no discernible difference between the contributions of the four members, as all components appear identical. Additionally, the lack of available data has hindered the feasibility of the project, and the work completed does not meet the expected standard for PPI. The team informed the panel that this situation had already been communicated to their supervisor.",
            marks: '--',
        },
    ],
    marks: '--',
    date: 'badge.svg',
};

// pp2 data
const pp2 = {
    icon: 'badge.svg',
    title: "Description",
    description: "Provided an overall understanding about the whole research and presented the individual components to the pannel, explained about the technologies and seperate novelty parts of the components.",
    items: [
        {
            project: "IT21344824",
            // role: "Medicine Store Management",
            // technology: "HTML, CSS, JS, MySQL",
            description: "Technical wise all the components are identical. Just converting identified 2D image (by Jayawardhana) to 3D image.",
            marks: '--',
        },
        {
            project: "IT21352294",
            description: "Techinical wise all the components are identical. No diffrence. Image acquisition and display the details.",
            marks: '--',
        }, {
            project: "IT21273094",
            description: "Techinical wise all the components are identical. No diffrence. Image acquisition and display the details.",
            marks: '--',
        },
        {
            project: "IT21360978",
            description: "Techinical wise all the components are identical. No diffrence. Bharami letters identify using Image acquisition and display the details of the letter.",
            marks: '--',
        },
    ],
    marks: '--',
    date: 'badge.svg',
};

// final_assesment data
const final_assesment = {
    icon: 'badge.svg',
    title: "Description",
    description: "Provided an overall understanding about the whole research and presented the individual components to the pannel, explained about the technologies and seperate novelty parts of the components.",
    items: [
        {
            project: "IT21344824",
            // role: "Medicine Store Management",
            // technology: "HTML, CSS, JS, MySQL",
            description: "",
            marks: '--',
        },
        {
            project: "IT21352294",
            description: "",
            marks: '--',
        }, {
            project: "IT21273094",
            description: "",
            marks: '--',
        },
        {
            project: "IT21360978",
            description: "",
            marks: '--',
        },
    ],
    marks: '--',
    date: 'badge.svg',
};

// viva data
const viva = {
    icon: 'badge.svg',
    title: "Description",
    description: "Provided an overall understanding about the whole research and presented the individual components to the pannel, explained about the technologies and seperate novelty parts of the components.",
    items: [
        {
            project: "IT21344824",
            // role: "Medicine Store Management",
            // technology: "HTML, CSS, JS, MySQL",
            description: ""
        },
        {
            project: "IT21352294",
            description: ""
        }, {
            project: "IT21273094",
            description: ""
        },
        {
            project: "IT21360978",
            description: ""
        },
    ]
};


const Milestones = () => {
    return (
        <div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
                }}
                className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0 mb-20 "
            >
                <h1 className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover my-10">Research Milestones</h1>
                <div className="container mx-auto ">
                    <Tabs
                        defaultValue="Project_Proposal"
                        className="flex flex-col xl:flex-row gap-[60px] "
                    >
                        <TabsList className="flex flex-col w-full max-w-[350px] mx-auto xl:mx-0 gap-6 mt-1">
                            <TabsTrigger value="Project_Proposal">Project Proposal</TabsTrigger>
                            <TabsTrigger value="PP1">PP1</TabsTrigger>
                            <TabsTrigger value="PP2">PP2</TabsTrigger>
                            <TabsTrigger value="Final_Assesment">Final Assesment</TabsTrigger>
                            <TabsTrigger value="VIVA">VIVA</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[85vh] w-full  ">

                            <TabsContent value="Project_Proposal" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{proposal.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {proposal.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {proposal.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                                >
                                                    <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>
                                                    {/* <p className="text-lg font-medium text-white">{item.role}</p>
                                                    <p className="text-sm text-gray-400">{item.technology}</p> */}
                                                    <p className="mt-2 text-base text-white">{item.description}</p>

                                                    <p className="text-sm text-gray-400 mb-2 ">{item.marks}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <h1>Marks : {proposal.marks} </h1>
                                    <h2>Date :  {proposal.date}</h2>
                                </div>
                            </TabsContent>

                            <TabsContent value="PP1" className="w-full h-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{pp1.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {pp1.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {pp1.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                                >
                                                    <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>

                                                    <p className="text-base text-white">{item.description}</p>

                                                    <p className="text-sm text-gray-400 mb-2 ">{item.marks}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <h1>Marks : {pp1.marks} </h1>
                                    <h2>Date :  {pp1.date}</h2>
                                </div>
                            </TabsContent>

                            <TabsContent value="PP2" className="w-full h-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{pp2.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {pp2.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {pp2.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                                >
                                                    <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>

                                                    <p className="mt-2 text-base text-white">{item.description}</p>

                                                    <p className="text-sm text-gray-400 mb-2 ">{item.marks}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <h1>Marks : {pp2.marks} </h1>
                                    <h2>Date :  {pp2.date}</h2>
                                </div>
                            </TabsContent>

                            <TabsContent value="Final_Assesment" className="w-full text-center xl:text-left ">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{final_assesment.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {final_assesment.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {final_assesment.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                                >
                                                    <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>

                                                    <p className="mt-2 text-base text-white">{item.description}</p>

                                                    <p className="text-sm text-gray-400 mb-2 ">{item.marks}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <h1>Marks : {final_assesment.marks} </h1>
                                    <h2>Date :  {final_assesment.date}</h2>
                                </div>
                            </TabsContent>

                            <TabsContent value="VIVA" className="w-full text-center xl:text-left ">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{viva.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {viva.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {viva.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                                >
                                                    <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>

                                                    <p className="mt-2 text-base text-white">{item.description}</p>

                                                    <p className="text-sm text-gray-400 mb-2 ">{item.marks}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                                <div className="flex justify-between mt-10">
                                    <h1>Marks : {viva.marks} </h1>
                                    <h2>Date :  {viva.date}</h2>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    {/* border */}
                    <div className="w-full border-b border-white/60 mb-5"></div>
                </div>


            </motion.div>
        </div>
    );
};

export default Milestones;