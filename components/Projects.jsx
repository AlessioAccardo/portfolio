import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="w-full max-w-full flex flex-col lg:flex-row flex-wrap justify-center items-center mt-25 gap-15 py-20">
            <ProjectCard 
                title="High-Performance URL Shortener"
                pathLogo="/url-shortener.jpeg"
                alt="Logo for URL Shortener"
                techstack="Tech Stack: Python, FastAPI, PostgreSQL, Redis"
                description="An asynchronous and scalable backend service for URL shortening, meticulously designed following Clean Architecture principles. The project aimed to build a resilient system capable of handling traffic spikes while minimizing response times, simulating real-world distributed system challenges."
                projectUrl="https://github.com/AlessioAccardo/urlshortener"
            />
            <ProjectCard 
                title="Facial Emotion Recognition (CNN)"
                pathLogo="/mlproj.png"
                alt="Logo for Facial Emotion Recognition"
                techstack="Tech Stack: Python, TensorFlow/Keras, NumPy, Plotly"
                description="A custom-built deep learning model for Computer Vision, engineered to classify 7 distinct facial expressions from grayscale images. The project heavily focused on optimizing the training pipeline and mitigating overfitting in custom Neural Networks."
                projectUrl="https://github.com/AlessioAccardo/emotionrecognition"
            />
            <ProjectCard 
                title="SessionManager"
                pathLogo="/sessionmanager2.png"
                alt="Logo for SessionManager"
                techstack="Tech Stack: Angular, TypeScript, Node.js, Express.js, SQLite"
                description="A full-stack university management platform built to handle the lifecycle of exams and study plans. The architecture strictly decouples client and server logic, providing highly customized interfaces and permissions for three distinct user roles: Students, Professors, and Admins."
                projectUrl="https://github.com/AlessioAccardo/SessionManager"
            />
            <ProjectCard 
                title="Swifty - iOS Educational App"
                pathLogo="/swifty.png"
                alt="Logo for Swifty"
                techstack="Tech Stack: Swift, MVVM, Firebase Auth, Cloud Firestore"
                description="Swifty is a native iOS application designed to support Apple Foundation Program students. The app accelerates the Swift programming learning curve through interactive educational modules, combining a fluid user interface with a serverless backend infrastructure."
                projectUrl="https://github.com/AlessioAccardo/AFPApp"
            />
        </div>
    );
}

export default Projects;