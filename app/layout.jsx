import Header from "@/components/Header";
import "./globals.css";
import { Raleway } from 'next/font/google';

export const metadata = {
  title: "Alessio Accardo • Portfolio",
  description: "Alessio Accardo's Portfolio",
};

const raleway = Raleway({
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-full max-w-full min-h-[1000vh] flex flex-col`}
      >
        <Header />
        <main className={`${raleway.className} flex flex-col flex-1 inset-0 bg-slate-950 pointer-events-none`}>
          {children}
        </main>
      </body>
    </html>
  );
}
