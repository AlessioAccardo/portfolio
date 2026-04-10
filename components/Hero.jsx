import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-10 bg-slate-950 pt-10 gap-5 lg:gap-0">
                <div className="flex flex-col justify-center items-center lg:pb-5 text-center">
                    <h1 className="text-5xl font-bold textGradient">ALESSIO ACCARDO</h1>
                    <h3 className="pt-3 font-medium">Software Engineer and Aspiring Security Engineer</h3>
                </div>
                <div>
                    <Image
                        src={"/img1.png"}
                        width={500}
                        height={500}
                        alt="hero image"
                    />
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center text-center font-medium bg-gray-950 pb-10 lg:py-20">
                <h1 className="uppercase text-5xl textGradient mb-10">ABOUT ME</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:px-20 gap-10 lg:gap-0">
                    <div className="flex flex-col w-full max-w-[70%] text-center lg:text-start gap-5">
                        <p>
                            I am pursuing a Bachelor's Degree in Innovation Engineering for Digital Enterprises (Computer Engineering with notions of Management Engineering) and I am currently in my final year.
                        </p>
                        <p>    
                            I have studied Data Structures & Algorithms, Machine Learning, programming in Python, Java and C, Databases, Computer Networks, Operating Systems, Software Engineering, Web & Mobile Development and other related topics.
                        </p>
                        <p>
                            My main interests are <span className="text-violet-500"><em>Software Engineering</em></span>, <em className="text-violet-500">Cybersecurity</em> and <em className="text-violet-500">Machine Learning</em>.
                        </p>
                        <p>
                            I also know SQL, PostgreSQL, Node.js, Express.js, Next.js, React, Angular, HTML5, CSS, Javascript and Swift.
                        </p>
                        <p>
                            After completing my Bachelor's degree, I will start a Master's degree in Cybersecurity Engineering.</p>
                    </div>
                    <div className="relative w-full max-w-[30%]">
                        <Image 
                            src={"/hello.webp"}
                            width={400}
                            height={400}
                            alt="hello"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;