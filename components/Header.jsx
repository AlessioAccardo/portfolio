"use client";

import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";


function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
        <div className="relative">
            <header className={`hidden lg:flex ${isScrolled ? "backdrop-blur-3xl" : ""} fixed top-0 left-0 right-0 justify-evenly items-center w-full max-w-full py-5 px-10 transition-all duration-300 font-medium z-10`}>
                <HeaderLink name={"Home"} image={"fa-solid fa-house"} href={"/"}/>
                <HeaderLink name={"Education"} image={"fa-solid fa-book"} href={"/education"} focus={"group-focus-within:scale-x-100"}/>
                <HeaderLink name={"Resume"} image={"fa-regular fa-newspaper"} href={"/resume"} focus={"group-focus-within:scale-x-100"}/>
                <HeaderLink name={"Projects"} image={"fa-solid fa-layer-group"} href={"/projects"} focus={"group-focus-within:scale-x-100"}/>
            </header>
            
            <header className={`flex lg:hidden ${isScrolled ? "backdrop-blur-3xl" : ""} fixed top-0 left-0 right-0 justify-between items-center w-full max-w-full py-5 px-10 transition-all duration-300 font-medium z-10`}>
                <h1 className="lg:hidden  font-bold text-4xl textGradient">AA</h1>
                <button className="lg:hidden text-3xl" onClick={toggle}><i className="fa-solid fa-bars"/></button>
            </header>

            <div className={`lg:hidden flex flex-col items-center py-8 fixed inset-0 bg-slate-950 gap-20 transform transition-transform duration-300 ease-in-out ${isOpen ? "-translate-x-0" : "translate-x-full"} font-medium z-10`}>
                <h1 onClick={toggle} className="self-end px-10">Close <span className="ml-2"><i className="fa-solid fa-circle-xmark" /></span></h1>
                <div onClick={toggle}>
                    <HeaderLink name={"Home"} image={"fa-solid fa-house"} href={"/"}/>
                </div>
                <div onClick={toggle}>
                    <HeaderLink name={"Education"} image={"fa-solid fa-book"} href={"/education"} focus={"group-focus-within:scale-x-100"}/>
                </div>
                <div onClick={toggle}>
                    <HeaderLink name={"Resume"} image={"fa-regular fa-newspaper"} href={"/resume"} focus={"group-focus-within:scale-x-100"}/>
                </div>
                <div onClick={toggle}>
                    <HeaderLink name={"Projects"} image={"fa-solid fa-layer-group"} href={"/projects"} focus={"group-focus-within:scale-x-100"}/>
                </div>
            </div>
        </div>
    );
}

export default Header;