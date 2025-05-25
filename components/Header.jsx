import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { websiteImages } from "@/config/iconConfig";

const Header = () => {
    return (
        <header className="py-4 text-white xl:py-6">
            <div className="container flex items-center justify-between mx-auto">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold flex ">
                        <Image
                            src={websiteImages.ScanHeritage.img}
                            alt={websiteImages.ScanHeritage.name}
                            width={500}
                            height={500}
                            layout="intrinsic"
                            className="w-10 h-10 mr-2"
                        />
                        ScanHeritage <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop navigation */}
                <div className="items-center hidden gap-8 xl:flex"> {/* Fixed 'item-center' to 'items-center' */}
                    <Nav />
                    {/* <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link> */}
                </div>

                {/* Mobile navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>


            </div>
            {/* border */}
            <div className="w-full border-b border-white/60 mt-6"></div>
        </header>
    );
};

export default Header;