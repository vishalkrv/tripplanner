import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import Login from "../login/login";
import SignUp from "../signUp/signUp";

export default function LoginToggle(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formType, setFormType] = useState();
  useEffect(() => {
    setFormType(props.type);
  }, []);
  return (
    <>
      <Button onClick={onOpen} colorScheme="pink" variant="outline" size="md">
        Login
      </Button>
      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          {(formType === "Login" && <Login setType={setFormType} />) || (
            <SignUp setType={setFormType} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
