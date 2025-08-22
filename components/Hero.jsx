import Image from "next/image";

function Hero() {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-10 bg-slate-950 pt-10 gap-5 lg:gap-0">
                <div className="flex flex-col justify-center items-center lg:pb-5 text-center">
                    <h1 className="text-5xl font-bold textGradient">ALESSIO ACCARDO</h1>
                    <h3 className="pt-3 font-medium">AI/ML Engineer, Software Engineer & Web Developer</h3>
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
                            I am currently a student in the Bachelor's degree program in Computer Engineering.
                        </p>
                        <p>    
                            I have studied machine learning, programming in Python and Java, databases, Internet protocols and other related topics.
                        </p>
                        <p>
                            My main interests are <span className="text-violet-500"><em>Python</em></span> and its application using <span className="text-violet-500"><em>PyTorch</em></span> and <span className="text-violet-500"><em>TensorFlow</em></span>.
                        </p>
                        <p>
                            I also know SQL, MongoDB, Next.js, React, Angular, HTML5, CSS, Javascript and TypeScript.
                        </p>
                        <p>
                            After completing my Bachelor's degree, I will begin a Master's degree in Computer Engineering with a specialization in <span className="text-violet-500"><em>AI & Data Analysis</em></span>.
                            </p>
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