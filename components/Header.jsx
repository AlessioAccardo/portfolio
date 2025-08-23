"use client";

import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

    }, [isScrolled]);

    return (
        <header className={`${isScrolled ? "backdrop-blur-3xl" : ""} fixed top-0 left-0 right-0 flex justify-evenly items-center w-full max-w-full py-5 px-10 transition-all duration-300 font-medium z-10`}>
            <HeaderLink name={"Home"} image={"fa-solid fa-house"} href={"/"}/>
            <HeaderLink name={"Education"} image={"fa-solid fa-book"} href={"/education"} focus={"group-focus-within:scale-x-100"}/>
            <HeaderLink name={"Resume"} image={"fa-regular fa-newspaper"} href={"/resume"} focus={"group-focus-within:scale-x-100"}/>
            <HeaderLink name={"Projects"} image={"fa-solid fa-layer-group"} href={"/projects"} focus={"group-focus-within:scale-x-100"}/>
        </header>
    );
}

export default Header;