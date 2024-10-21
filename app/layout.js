import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/pages/Header";
import {ClerkProvider} from '@clerk/nextjs'
import CreateEventDrawer from "@/components/pages/CreateEventDrawer";
import Footer from "@/components/pages/Footer";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Appointrr",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider>

    
    <html lang="en">
      <body className={`inter.className `}>

        {/* Header */}
        <Header/>

        <main className="flex-grow w-full bg-gradient-to-b from-blue-100 to-white">
          {children}
        </main>

        {/* Footer*/}

        {/* <footer className="bg-blue-300 py-10">
          <div className="container mx-auto text-center text-xl">
            A meeting Scheduling App
          </div>
          
        </footer> */}

        <Footer/>

        <CreateEventDrawer/>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
