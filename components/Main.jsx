function Main({ children }) {
    return (
        <main className={`flex flex-col flex-1 inset-0 w-full max-w-full bg-slate-950 pointer-events-none`}>
            {children}
        </main>
    );
}

export default Main;