"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Ekanayake T.E.M.A.P.",
        description: "IT21344824@my.sliit.lk",
    },
    {
        icon: <FaEnvelope />,
        title: "Jayawardhana J.R.K.B.",
        description: "IT21352294@my.sliit.lk",
    },
    {
        icon: <FaEnvelope />,
        title: "Ediriwickrama E.A.K.V.",
        description: "IT21273094@my.sliit.lk",
    },
    {
        icon: <FaEnvelope />,
        title: "Serasinghe G.P.G.Y.",
        description: "IT21360978@my.sliit.lk",
    },
    // {
    //     icon: <FaPhoneAlt />,
    //     title: "Email",
    //     description: "dasunpriyanaveen@gmail.com",
    // },
    // {
    //     icon: <FaMapMarkedAlt />,
    //     title: "Address",
    //     description: "331/A Kanupelella Badulla",
    // },
];

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container max-auto">
                <h1 className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover text-right">Contact Us</h1>
                <h2 className="mt-20 mb-5">For more information about Myalo, feel free to contact the below</h2>
                <div className="flex flex-col xl:flex-row gap-[10px] ">

                    <div className="xl:w-[54%] order-2 xl:-order-none ">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            action="https://formspree.io/f/xkgwbjjw" method="POST">
                            <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
                            <p className="text-white/60">
                                Please fill out the form below.
                            </p>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="text" placeholder="First Name" name="First_Name" />
                                <Input type="text" placeholder="Last Name" name="Last_Name" />
                                <Input type="email" placeholder="Email" name="email" />
                                <Input type="tel" placeholder="Phone" name="phone" />
                            </div>
                            <Textarea
                                className="h-[200px]"
                                placeholder="Your Messege here"
                                name="message"
                            />
                            <Button size="md" className="items-center max-w-40 h-10 bg-accent-hover  text-black text-1xl" type="submit">
                                Send Message
                            </Button>
                        </form>
                    </div>
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:-order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div>
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
