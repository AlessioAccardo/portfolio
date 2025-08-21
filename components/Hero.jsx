import Image from "next/image";

function Hero() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-10 bg-slate-950">
                <div className="flex flex-col justify-center items-center pb-5 text-center">
                    <h1 className="text-5xl font-bold">ALESSIO ACCARDO</h1>
                    <h3>AI/ML Engineer, Software Engineer & Web Developer</h3>
                </div>
                <div>
                    <Image
                        src={"/img1.png"}
                        width={600}
                        height={600}
                        alt="hero image"
                    />
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-start bg-gray-950">
                <h1>PLACEHOLDER</h1>
                <p>Placeholder of a placeholder</p>
            </div>
        </>
    );
}

export default Hero;