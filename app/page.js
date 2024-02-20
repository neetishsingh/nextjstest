"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import PlaygroundPage from "./playground/page";
import Homepage from "./home/page";
import Link from 'next/link';
import LoginScreen from "./login/page";


export default function App() {
  
  return (  
    <main className="lg h-max " >
      <div className="bg-white flex-auto lg h-full">
      <Link href="/login" className="text-black lg rounded border-black border-2 px-5 m-0 block text-center">Login via Kite</Link>
    <Homepage></Homepage>
    </div>
     
      </main>
  );
}


