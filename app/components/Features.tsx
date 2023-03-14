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
import { ElementType } from "react";
import {
  moneyGuaranteeIcon,
  setupFeeIcon,
  monthlySubscriptionIcon,
} from "./icons/Icon";
interface FeatureProps extends StackProps {
  icon: ElementType;
}
export function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="32px">
      <HStack px="48px" spacing="20px">
        <Feature icon={moneyGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={setupFeeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={monthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
