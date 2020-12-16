import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

/**
 *  Yup schema for validation of form fields
 */
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export default function LodgingForm() {
  //Set initial values top empty for email and password
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  /**
   * On Login Page submit, trigger a API call
   * @param {object} values email and password
   */
  const onSave = (values, actions) => {
    setTimeout(() => {
      console.log("hello");
    }, 1000);
  };
  return (
    <Formik initialValues={data} onSubmit={onSave} validationSchema={schema}>
      {(actions) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            colorScheme="pink"
            mr={3}
            type="submit"
            isLoading={actions.isSubmitting}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
