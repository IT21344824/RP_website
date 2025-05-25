"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Domain',
        path: '/domain'
    },
    {
        name: 'About us',
        path: '/about_us'
    },

    {
        name: 'Contact',
        path: '/contact_us'
    },
    {
        name: 'Other',
        path: '/other'
    },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                            } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;