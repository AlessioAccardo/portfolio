import Card from "./Card";

function Education() {

    const bachTopics = ["Analysis, Linear Algebra, Statistic, Computer Fundamentals, "]


    return (
        <div className="w-full max-w-full flex flex-col justify-center items-center gap-10 py-[9rem]">
            <Card
                textColor="text-slate-950"
                bg="bg-[#F6F4F1]"
                pathLogo="/polito3.png"
                h1="POLITECNICO DI TORINO"
                p1="Master's Degree"
                date="October 2026 - July 2028"
                p2="Computer Engineering: Artificial Intelligence and Data Analytics"
                courseDescription="Machine learning and pattern recognition, Advanced Machine Learning (Deep Learning), Robot Learning, Big data processing and analytics, Data Science and Database Technology, Computer network technologies and services, System and device programming, Information systems security."
            />            
            <Card
                bg="bg-slate-900"
                pathLogo="/logo_unipa.png"
                h1="UNIVERSITÀ DEGLI STUDI DI PALERMO"
                p1="Bachelor's Degree"
                date="October 2023 - July 2026"
                p2="Innovation Engineering for Digital Enterprises"
                courseDescription="Analysis, Linear Algebra, Statistics, Computer Fundamentals, Algorithms and Optimization Methods, Databases, Internet Protocols, Java, C, Python, Machine Learning, Web & Mobile Development, Operative Systems, Automatic Controls, Software Engineering."
            />
        </div>
    );
}

export default Education;