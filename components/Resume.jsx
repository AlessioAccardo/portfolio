function Resume() {
    return (
        <div className="w-full max-w-full flex flex-col mt-45 justify-center items-center">
            <div className="flex flex-col items-center py-15 px-4 gap-8 bg-transparent w-full max-w-[90%] lg:max-w-[50%] text-center">
                <p>Open or download my <span className="font-bold">Curriculum Vitae</span></p>
                <div className="flex flex-col lg:flex-row justify-center gap-5">
                    <a
                        href="/space1.webp"
                        target="_blank"
                        className="py-3 px-4 bg-violet-500 rounded-2xl font-medium">
                            Open CV <span className="ml-2"><i className="fa-regular fa-folder-open"/></span>
                    </a>
                    <a
                        href="/space1.webp"
                        download
                        className="py-3 px-4 bg-violet-500 rounded-2xl font-medium">
                            Download CV <span className="ml-2"><i className="fa-solid fa-download"/></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;