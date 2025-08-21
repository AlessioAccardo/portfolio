"use client";

import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";

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
        <header className={`${isScrolled ? "backdrop-blur-md" : ""} fixed top-0 left-0 right-0 flex justify-evenly items-center w-full max-w-full py-8 px-10 transition-all duration-300 font-medium`}>
            <HeaderLink name={"Education"} image={"fa-solid fa-book"}/>
            <HeaderLink name={"Resume"} image={"fa-regular fa-newspaper"}/>
            <HeaderLink name={"Projects"} image={"fa-solid fa-layer-group"}/>
        </header>
    );
}

export default Header;