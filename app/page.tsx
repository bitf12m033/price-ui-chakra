"use client";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Pricing from "./components/Pricing";
import { Features } from "./components/Features";
export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <Pricing />
        <Features />
      </div>
    </ChakraProvider>
  );
}
