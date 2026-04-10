import EducationCard from "./EducationCard";

function Education() {
    return (
        <div className="w-full max-w-full flex flex-col justify-center items-center gap-10 py-[9rem]">
            <EducationCard
                bg="bg-slate-900"
                pathLogo="/poli_logo.jpg"
                h1="POLITECNICO DI TORINO"
                p1="Master's Degree"
                date="October 2026 - July 2028"
                p2="Cybersecurity Engineering: Cyber Analyst track"
                courseDescription=""
            />            
            <EducationCard
                bg="bg-slate-900"
                pathLogo="/logo_unipa.png"
                h1="UNIVERSITÀ DEGLI STUDI DI PALERMO"
                p1="Bachelor's Degree"
                date="October 2023 - July 2026"
                p2="Innovation Engineering for Digital Enterprises"
                gpa="29.00/30.00 (expected)"
                courseDescription="Analysis, Linear Algebra, Statistics, Computer Fundamentals, Data Structures & Algorithms, Databases, Computer Networks, Java, Python, Machine Learning, Web & Mobile Development, Operative Systems, Software Engineering."
            />
        </div>
    );
}

export default Education;