"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="section" pb="112px" textAlign="center">
      <Box color="#F7FAFC" bg="#6B46C1" pb="198px" pt="90px" px="32px">
        <Heading fontWeight="800" fontFamily="48px">
          Simple Pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize="24px" pt="16px">
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
}
