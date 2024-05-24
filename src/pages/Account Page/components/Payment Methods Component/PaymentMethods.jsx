import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import PaymentMethodCard from "./PaymentMethodCard";
import AddPaymentMethodModal from "./AddPaymentMethodModal";

const PaymentMethods = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"50%"} position={"center"} margin={"auto"}>
      <Center>
        <Heading size="lg" mb={4} p={10}>
          Payment Methods
        </Heading>
        <Text m={10}>
          Manage your payment options. View and manage your existing payment
          methods, add new payment methods, and set a default payment method for
          future rides.
        </Text>
      

      </Center>
      <AddPaymentMethodModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default PaymentMethods;
