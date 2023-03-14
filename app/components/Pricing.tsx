import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "./icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};
export default function Pricing() {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex bg="purple.100">
        <Box p="60px" textAlign="center">
          <Text fontWeight="800" fontSize="24px">
            Premium PRO
          </Text>
          <Heading as="h3" fontWeight="800" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text fontWeight="500" fontSize="18px" color="#171923" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" width="282px" mt="24px">
            Get Started
          </Button>
        </Box>
        <Box p="60px" fontSize="16px" bg="white">
          <Text textAlign="left">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
