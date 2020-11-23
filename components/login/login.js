import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Spacer,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";

export default function Login(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  //Set initial values top empty for email and password
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  /**
   *  Yup schema for validation of form fields
   */
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  /**
   * On Login Page submit, trigger a API call
   * @param {object} values email and password
   */
  const onSave = (values, actions) => {
    setTimeout(() => {
      console.log(values);
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Formik initialValues={data} onSubmit={onSave} validationSchema={schema}>
        {(actions) => (
          <Flex h="550px">
            <Flex direction="column" bg="yellow.200" flexBasis="0" flexGrow="1">
              <Spacer></Spacer>
              <Box p="4">
                <Text>
                  Don't have an account?{" "}
                  <Button
                    color="pink.500"
                    pb="1"
                    onClick={() => props.setType("Register")}
                    variant="link"
                  >
                    Register
                  </Button>
                </Text>
              </Box>
            </Flex>
            <Flex flexBasis="0" flexGrow="1">
              <Form style={{width:"100%", paddingRight:"10px"}}>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton></ModalCloseButton>
                <ModalBody pb={6}>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          ref={initialRef}
                          id="email"
                          placeholder="Email"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="Password"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="pink"
                    mr={3}
                    type="submit"
                    isLoading={actions.isSubmitting}
                  >
                    Login
                  </Button>
                </ModalFooter>
              </Form>
            </Flex>
          </Flex>
        )}
      </Formik>
    </>
  );
}
