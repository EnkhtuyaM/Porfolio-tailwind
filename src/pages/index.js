import Image from "next/image";
import { Inter } from "next/font/google";
import { Portfolio } from "./Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Portfolio />
    </div>
  );
}
