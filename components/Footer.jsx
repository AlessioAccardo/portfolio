import Link from "next/link";

function Footer() {
    return (
        <footer className="lg:grid lg:grid-cols-4 flex flex-col max-w-full bg-black py-10 lg:py-5 text-center justify-center items-center px-10 gap-7">
            <div className="col-span-1 text-3xl">
                <Link href={"https://www.linkedin.com/in/alessio-accardo-a2ab00171/"} target="_blank">
                    <span className="mr-5"><i className="fa-brands fa-linkedin"/></span>
                </Link>
                <Link href={"https://github.com/AlessioAccardo"} target="_blank">
                    <span><i className="fa-brands fa-github"/></span>
                </Link>
            </div>
            <p className="col-span-2">Copyright &copy; 2025 AA</p>
            <p className="col-span-1">Designed and Developed by Alessio Accardo</p>
        </footer>
    );
}

export default Footer;