import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Spacer,
  Flex,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";

export default function SignUp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  //Set initial values
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  /**
   *  Yup schema for validation of form fields
   */
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("This field is required"),
    username: Yup.string().required("This field is required"),
    firstName: Yup.string(),
    city: Yup.string(),
    phone: Yup.number().required("This field is required"),
  });

  /**
   * On SignUp Page submit, trigger a API call
   * @param {object} values email and password
   */
  const onSave = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Formik initialValues={data} onSubmit={onSave} validationSchema={schema}>
        {(actions) => (
          <Flex>
            <Flex direction="column" w="530px" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundImage={`url(assets/register.svg)`}>
              <Spacer></Spacer>
              <Box p="4">
                <Text>
                  Already have an account?{" "}
                  <Button
                    color="pink.500"
                    pb="1"
                    variant="link"
                    onClick={() => props.setType("Login")}
                  >
                    Login
                  </Button>
                </Text>
              </Box>
            </Flex>
            <Form>
              <ModalHeader>Sign Up</ModalHeader>
              <ModalCloseButton></ModalCloseButton>
              <ModalBody pb={6}>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input {...field} ref={initialRef} id="username" />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field}  id="email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Flex>
                  <Field name="firstName">
                    {({ field, form }) => (
                      <FormControl
                        orientation="horizontal"
                        isInvalid={
                          form.errors.firstName && form.touched.firstName
                        }
                      >
                        <FormLabel htmlFor="firstName">First name</FormLabel>
                        <Input {...field}  id="firstName" />
                        <FormErrorMessage>
                          {form.errors.firstName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.lastName && form.touched.lastName
                        }
                        pl="4"
                      >
                        <FormLabel htmlFor="lastName">Last name</FormLabel>
                        <Input {...field}  id="lastName" />
                        <FormErrorMessage>
                          {form.errors.lastName}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Field name="address">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.address && form.touched.address}
                    >
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <Input {...field}  id="address" />
                      <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Flex>
                  <Field name="city">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.city && form.touched.city}
                      >
                        <FormLabel htmlFor="city">City</FormLabel>
                        <Input {...field}  id="city" />
                        <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="state">
                    {({ field, form }) => (
                      <FormControl
                        pl="4"
                        isInvalid={form.errors.state && form.touched.state}
                      >
                        <FormLabel htmlFor="state">State</FormLabel>
                        <Input {...field}  id="state" />
                        <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Field name="zip">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.zip && form.touched.zip}
                    >
                      <FormLabel htmlFor="zip">Zip</FormLabel>
                      <Input {...field}  id="zip" />
                      <FormErrorMessage>{form.errors.zip}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="phone">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.phone && form.touched.phone}
                    >
                      <FormLabel htmlFor="phone">Phone</FormLabel>
                      <Input {...field}  id="phone" />
                      <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
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
                  Sign up
                </Button>
              </ModalFooter>
            </Form>
          </Flex>
        )}
      </Formik>
    </>
  );
}
