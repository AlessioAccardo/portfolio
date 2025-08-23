import Image from "next/image";

function Card(props) {

    const { pathLogo, h1, p1, date, p2, courseDescription, bg, textColor} = props;

    return (
        <div className={`${textColor} font-medium flex flex-col lg:flex-row justify-center items-center ${bg} w-full max-w-[80%] rounded-2xl shadow-2xl py-8 lg:px-8 gap-8 text-center`}>
            <div className="flex justify-center items-center relative w-full max-w-[40%]">
                <Image 
                    src={pathLogo}
                    width={250}
                    height={250}
                    alt="logo-unipa"
                    className="border-0 rounded-full z-0"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full max-w-[60%]">
                <h1 className="text-2xl font-bold">{h1}</h1>
                <p className="font-bold">{p1}</p>
                <p>{date}</p>
                <p>{p2}</p>
                <div className="flex flex-col items-center justify-center text-center">
                    <p>Main Courses:</p>
                    <p>{courseDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;