import Header from "@/components/Header";
import "./globals.css";
import { Raleway } from 'next/font/google';

export const metadata = {
  title: "Alessio Accardo • Portfolio",
  description: "Alessio Accardo's Portfolio",
  icons: {
    icon: "/mio_logo.WEBP"
  }
};

const raleway = Raleway({
  subsets: ["latin"]
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${raleway.className} text-white text-xl antialiased w-full max-w-full min-h-screen flex flex-col`}
      >
        <Header />
        <main className={`flex flex-col flex-1 inset-0 w-full max-w-full bg-slate-950 pointer-events-none`}>
          {children}
        </main>
      </body>
    </html>
  );
}
