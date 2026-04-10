import Image from "next/image";
import Link from "next/link";

function ProjectCard({ title, pathLogo, alt, techstack, description, projectUrl }) {
    return (
        <div className="flex flex-col w-full max-w-[90%] lg:max-w-[35rem] h-full min-h-[40rem] p-8 bg-slate-900 border-2 border-transparent rounded-2xl hover:border-violet-500 transition-all ease-in-out transform hover:-translate-y-2">
            
            <h1 className="text-2xl font-bold text-violet-500 text-center mb-6">
                {title}
            </h1>

            <div className="h-60 w-full flex justify-center items-center mb-6">
                <Image 
                    src={pathLogo}
                    width={400}
                    height={400}
                    alt={alt}
                    className="max-h-full w-auto object-contain drop-shadow-md rounded-xl"
                />
            </div>

            <p className="font-bold text-center mb-4">
                {techstack}
            </p>

            <p className="text-center text-gray-300 mb-8">
                {description}
            </p>

            <div className="mt-auto w-full flex justify-center">
                <Link 
                    href={projectUrl} 
                    target="_blank" 
                    className="font-bold bg-violet-500 text-white py-3 px-6 rounded-lg hover:bg-violet-600 transition-colors w-full text-center"
                >
                    Github repo 🔗
                </Link>
            </div>

        </div> 
    );
}

export default ProjectCard;