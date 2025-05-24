"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Literature_Survey from "@/components/domain_comps/Literature_Survey";
import Research_ProblemGap from "@/components/domain_comps/Research_ProblemGap";
import Research_Objectives from "@/components/domain_comps/Research_Objectives";
import Methodology from "@/components/domain_comps/Methodology";
import Phases from "@/components/domain_comps/Phases";
import Technology from "@/components/domain_comps/Technology";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Professional web development services, including the creation of responsive, high-performance websites using modern technologies. Specializing in creating user-friendly and visually appealing web experiences.',
        href: "https://www.fiverr.com/"
    },
    {
        num: '02',
        title: 'Content Creation',
        description: 'Expert content creation services for various platforms, including engaging copywriting, informative blog posts, and multimedia content. Tailored to enhance your brand’s presence and reach your target audience effectively.',
        href: "https://www.tiktok.com/@souron21?"
    },
];


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto my-8">
                <Literature_Survey />
                <Research_ProblemGap />
                <Research_Objectives />
                <Methodology />
                <Phases />
                <Technology />
            </div>


        </section>
    );
};

export default Services;
