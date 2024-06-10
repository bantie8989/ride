import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const AddPaymentMethodModal = ({ isOpen, onClose, onAddPaymentMethod }) => {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationMonth, setExpirationMonth] = React.useState("");
  const [expirationYear, setExpirationYear] = React.useState("");
  const [cvc, setCVC] = React.useState("");

  const handleSubmit = () => {
    onAddPaymentMethod({ cardNumber, expirationMonth, expirationYear, cvc });
    onClose();
  };

  return (
    <Box mb={10}>
      <Button onClick={onClose}>Close</Button>
      <Text fontSize="lg" fontWeight="bold">
        Add Payment Method
      </Text>
      <FormControl mt="4">
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </FormControl>
      <FormControl mt="4" display="flex" justifyContent="space-between">
        <Box>
          <FormLabel>Expiration Date</FormLabel>
          <Input
            type="text"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>CVC</FormLabel>
          <Input
            type="text"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
          />
        </Box>
      </FormControl>
      <Button
        mt="4"
        colorScheme="blue"
        onClick={handleSubmit}
        isDisabled={!cardNumber || !expirationMonth || !expirationYear || !cvc}
      >
        Add Payment Method
      </Button>
    </Box>
  );
};

export default AddPaymentMethodModal;
