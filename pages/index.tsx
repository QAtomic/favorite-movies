import { Geist, Geist_Mono } from "next/font/google";
import Content from "../components/Content";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  
  return (
    <>
      <Content />
    </>
  )  
}
